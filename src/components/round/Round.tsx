import React, {useReducer, useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import * as RoundReducer from '../../store/reducers/round_reducer';
import * as ACTIONS from '../../store/actions/actions';

const config = require('../../../config');

const getGameId = (): number => {
    const from: number = location.pathname.indexOf('gameId=') + 7;
    const to: number = location.pathname.lastIndexOf('/') + 1;

    // tslint:disable-next-line: radix
    return Number.parseInt(location.pathname.substring(from, to - from + 7));
};

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const Round: React.FC = () => {
    const [stateRoundReducer, dispatchRoundReducer] = useReducer(RoundReducer.RoundReducer, RoundReducer.initialState);
    const [gameId] = useState(getGameId());

    const moves: string[] = ['Rock', 'Papper', 'Scissors'];

    const loadRounds = () => {
        fetch(`${config.GOD_API}/game/GetRoundsGame/${gameId}`, options)
            .then(response => {
                const gameRounds = JSON.stringify(response.json())['Rounds'];
                const roundUpdates = [];
                gameRounds.map(({PlayerRoundWinnerName}, index) => {
                    // tslint:disable-next-line: no-array-mutation
                    roundUpdates.push({
                        roundNumber: index,
                        roundWinner: PlayerRoundWinnerName
                    });
                });
            });
    };

    const getPlayer = () => {
        fetch(`${config.GOD_API}/game/GetPlayer/${stateRoundReducer.currentPlayerNumber}`, options)
            .then(response => dispatchRoundReducer(
                ACTIONS.set_current_player_name(JSON.stringify(response.json())['PlayerName'])));
    };

    const newRound = () => {
        const postOptions = {
            method: 'POST',
            body: JSON.stringify({
                'Move': stateRoundReducer.currentMove,
                'GameId': gameId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/NewRound`, postOptions)
            .then(response => {
                dispatchRoundReducer(ACTIONS.add_round(JSON.stringify(response.json())['Id']));
                dispatchRoundReducer(ACTIONS.set_current_player_number(2));
            });
    };

    const completeRound = () => {
        const postOptions = {
            method: 'POST',
            body: JSON.stringify({
                'lastMove': stateRoundReducer.currentMove
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/UpdateRound/${stateRoundReducer.roundId}`, postOptions)
            .then(response => {
                const game = JSON.stringify(response.json());
                if (game['EndGame']) {
                    dispatchRoundReducer(ACTIONS.end_game());
                    dispatchRoundReducer(ACTIONS.set_winner_game(game['PlayerGameWinnerName']));
                } else {
                    dispatchRoundReducer(ACTIONS.set_current_player_number(1));
                }
            });
    };

    const proccessRound = () => {
        if (stateRoundReducer.currentPlayerNumber === 1) {
            newRound();
        } else {
            completeRound();
        }
    };

    useEffect(() => {
        getPlayer();
        loadRounds();
    }, [stateRoundReducer.currentPlayerNumber]);


    return (
        <div>
            {!stateRoundReducer.endGame && <div>
                <label>Round {stateRoundReducer.rounds.length + 1}</label>
                <br/>
                <br/>
                <label>{stateRoundReducer.currentPlayerName}</label>
                <br/>
                <br/>
                <label>Select Move</label>
                <select onChange={e => dispatchRoundReducer(ACTIONS.set_current_move(moves.indexOf(e.target.value) + 1))}>
                    {moves.map((value, index) => {
                        // tslint:disable-next-line: no-unused-expression
                    return (<option key={index + 1} value={value}>{value}</option>);
                    })}
                </select>
                <br/>
                <br/>
                <button type='button' onClick={proccessRound}>Ok</button>
            </div>}
            {stateRoundReducer.endGame && <Redirect to={`/end-game`}/>}
        </div>
    );
};

export default Round;