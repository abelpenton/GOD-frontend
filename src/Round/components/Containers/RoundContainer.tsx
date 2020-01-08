import React, {useReducer, useState, useEffect} from 'react';
import * as RoundReducer from '../../reducers/round_reducer';
import * as ACTIONS from '../../actions/actions';
import EndGame from '../../../Game/components/Presentations/EndGame';
import Rounds from '../Presentation/Rounds';
import PresentationRound from '../Presentation/RoundPresentation';
import axios from 'axios';

const config = require('../../../../config');

const getGameId = (): number => {
    const from: number = location.pathname.indexOf('gameId=') + 7;
    const to: number = location.pathname.lastIndexOf('/') + 1;

    return Number.parseInt(location.pathname.substring(from, to - from + 7));
};

const RoundContainer: React.FC = () => {
    const [stateRoundReducer, dispatchRoundReducer] = useReducer(RoundReducer.RoundReducer, RoundReducer.initialState);
    const [gameId] = useState(getGameId());
    const [rounds, setRounds] = useState([]);

    const getPlayer = async () => {
        const response = await axios.get(`${config.GOD_API}/game/GetPlayer/${stateRoundReducer.currentPlayerNumber}`, config.options);
        dispatchRoundReducer(ACTIONS.set_current_player_name(response.data.playerName));
    };

    const newRound = () => {
        axios.post(`${config.GOD_API}/game/NewRound`, {
            'Move': stateRoundReducer.currentMove,
            'GameId': gameId
        }, config.options)
        .then(response => {
                dispatchRoundReducer(ACTIONS.add_round(response.data.id));
                dispatchRoundReducer(ACTIONS.set_current_player_number(2));
            });
    };

    const completeRound = () => {
        axios.put(`${config.GOD_API}/game/UpdateRound/${stateRoundReducer.roundId}`, {
            'lastMove': stateRoundReducer.currentMove
        }, config.options)
        .then(response => {
                const roundUpdates: never[] = [];
                response.data.rounds.map(({playerRoundWinnerName}: never) => {
                    roundUpdates.push(playerRoundWinnerName);
                });
                setRounds(roundUpdates);
                if (response.data.endGame) {
                    dispatchRoundReducer(ACTIONS.end_game());
                    dispatchRoundReducer(ACTIONS.set_winner_game(response.data.playerGameWinnerName));
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
    }, [stateRoundReducer.currentPlayerNumber]);

    return (
        <div>
            {!stateRoundReducer.endGame && <div>
                <PresentationRound
                    roundNumer={rounds.length + 1}
                    currentPlayer={stateRoundReducer.currentPlayerName}
                    handleMove={handleMove}
                    proccessRound={proccessRound}
                />
                <Rounds rounds={rounds}/>
            </div>}
            {stateRoundReducer.endGame && <EndGame winnerName={stateRoundReducer.winnerName}/>}
        </div>
    );
};

export default RoundContainer;