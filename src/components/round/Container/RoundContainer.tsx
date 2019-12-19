import React, {useReducer, useState, useEffect} from 'react';
import * as RoundReducer from '../../../store/reducers/round_reducer';
import * as ACTIONS from '../../../store/actions/actions';
import EndGame from '../../game/Presentations/EndGame';
import Rounds from '../Presentation/Rounds';
import PresentationRound from '../Presentation/RoundPresentation';

const config = require('../../../../config');

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

const getPostOption = (body) => {
    return {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};

const RoundContainer: React.FC = () => {
    const [stateRoundReducer, dispatchRoundReducer] = useReducer(RoundReducer.RoundReducer, RoundReducer.initialState);
    const [gameId] = useState(getGameId());

    const loadRounds = () => {
        fetch(`${config.GOD_API}/game/GetRoundsGame/${gameId}`, options)
            .then(response => {
                const gameRounds = JSON.stringify(response.json())['Rounds'];
                const roundUpdates = [];
                gameRounds.map(({PlayerRoundWinnerName}) => {
                    // tslint:disable-next-line: no-array-mutation
                    roundUpdates.push(PlayerRoundWinnerName);
                });
                dispatchRoundReducer(ACTIONS.load_rounds(roundUpdates));
            });
    };

    const getPlayer = () => {
        fetch(`${config.GOD_API}/game/GetPlayer/${stateRoundReducer.currentPlayerNumber}`, options)
            .then(response => dispatchRoundReducer(
                ACTIONS.set_current_player_name(JSON.stringify(response.json())['PlayerName'])));
    };

    const newRound = () => {
        fetch(`${config.GOD_API}/game/NewRound`, getPostOption({
            'Move': stateRoundReducer.currentMove,
            'GameId': gameId
        })).then(response => {
                dispatchRoundReducer(ACTIONS.add_round(JSON.stringify(response.json())['Id']));
                dispatchRoundReducer(ACTIONS.set_current_player_number(2));
            });
    };

    const completeRound = () => {
        fetch(`${config.GOD_API}/game/UpdateRound/${stateRoundReducer.roundId}`, getPostOption({
            'lastMove': stateRoundReducer.currentMove
        })).then(response => {
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

    const handleMove = (moves, event) => {
        dispatchRoundReducer(ACTIONS.set_current_move(moves.indexOf(event.target.value) + 1));
    };

    useEffect(() => {
        getPlayer();
        loadRounds();
    }, [stateRoundReducer.currentPlayerNumber]);

    return (
        <div>
            {!stateRoundReducer.endGame && <div>
                <PresentationRound
                    roundNumer={stateRoundReducer.rounds.length + 1}
                    currentPlayer={stateRoundReducer.currentPlayerName}
                    handleMove={handleMove}
                    proccessRound={proccessRound}
                />
                {stateRoundReducer.rounds.length > 0 && <Rounds rounds={stateRoundReducer.rounds}/>}
            </div>}
            {stateRoundReducer.endGame && <EndGame winnerName={stateRoundReducer.winnerName}/>}
        </div>
    );
};

export default RoundContainer;