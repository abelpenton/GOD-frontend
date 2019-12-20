import React, {useReducer, useState, useEffect} from 'react';
import * as RoundReducer from '../../../store/reducers/round_reducer';
import * as ACTIONS from '../../../store/actions/actions';
import EndGame from '../../game/Presentations/EndGame';
import Rounds from '../Presentation/Rounds';
import PresentationRound from '../Presentation/RoundPresentation';
import axios, { AxiosRequestConfig } from 'axios';

const config = require('../../../../config');

const getGameId = (): number => {
    const from: number = location.pathname.indexOf('gameId=') + 7;
    const to: number = location.pathname.lastIndexOf('/') + 1;

    // tslint:disable-next-line: radix
    return Number.parseInt(location.pathname.substring(from, to - from + 7));
};

const options: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json-patch+json',
        'Accept': 'application/json'
    }
};

const RoundContainer: React.FC = () => {
    const [stateRoundReducer, dispatchRoundReducer] = useReducer(RoundReducer.RoundReducer, RoundReducer.initialState);
    const [gameId] = useState(getGameId());

    const loadRounds = () => {
        axios.get(`${config.GOD_API}/game/GetGame/${gameId}`, options)
            .then(async response => {
                const gameRounds = response.data.Rounds;
                const roundUpdates: any[] = [];
                gameRounds && gameRounds.map(({PlayerRoundWinnerName}: any) => {
                    // tslint:disable-next-line: no-array-mutation
                    roundUpdates.push(PlayerRoundWinnerName);
                });
                dispatchRoundReducer(ACTIONS.load_rounds(roundUpdates));
            });
    };

    const getPlayer = async () => {
        const response = await axios.get(`${config.GOD_API}/game/GetPlayer/${stateRoundReducer.currentPlayerNumber}`, options);
        dispatchRoundReducer(ACTIONS.set_current_player_name(response.data.playerName));
    };

    const newRound = () => {
        axios.post(`${config.GOD_API}/game/NewRound`, {
            'Move': stateRoundReducer.currentMove,
            'GameId': gameId
        }, options)
        .then(response => {
                dispatchRoundReducer(ACTIONS.add_round(response.data.id));
                dispatchRoundReducer(ACTIONS.set_current_player_number(2));
            });
    };

    const completeRound = () => {
        axios.put(`${config.GOD_API}/game/UpdateRound/${stateRoundReducer.roundId}`, {
            'lastMove': stateRoundReducer.currentMove
        }, options)
        .then(response => {
                if (response.data.EndGame) {
                    dispatchRoundReducer(ACTIONS.end_game());
                    dispatchRoundReducer(ACTIONS.set_winner_game(response.data.PlayerGameWinnerName));
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

    const handleMove = (moves: string[], event: any) => {
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