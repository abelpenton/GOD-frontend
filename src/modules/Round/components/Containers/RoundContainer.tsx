import React, {useState} from 'react';
import axios from 'axios';
import * as ACTIONS from '@app/Round/redux/actions';
import EndGame from '@app/Game/components/Presentations/EndGame';
import Rounds from '@app/Round/components/Presentation/Rounds';
import RoundPresentation from '@app/Round/components/Presentation/RoundPresentation';
import { useCurrentPlayer, useRound } from '@app/Round/hooks';
import { useGameId } from '@app/Game/hooks';
import * as config from '@utils/config';

const RoundContainer: React.FC = () => {
    const {state, dispatch} = useRound();
    const gameId = useGameId();
    const  currentPlayerNumber  = useCurrentPlayer();

    const [rounds, setRounds] = useState([]);

    const newRound = () => {
        axios.post(`${config.GOD_API}/game/NewRound`, {
            'Move': state.currentMove,
            'GameId': gameId
        }, config.options)
        .then(response => {
                dispatch(ACTIONS.add_round(response.data.id));
                dispatch(ACTIONS.set_current_player_number(2));
            });
    };

    const completeRound = () => {
        axios.put(`${config.GOD_API}/game/UpdateRound/${state.roundId}`, {
            'lastMove': state.currentMove
        }, config.options)
        .then(response => {
                const roundUpdates: never[] = [];
                response.data.rounds.map(({playerRoundWinnerName}: never) => {
                    roundUpdates.push(playerRoundWinnerName);
                });
                setRounds(roundUpdates);
                if (response.data.endGame) {
                    dispatch(ACTIONS.end_game(true));
                    dispatch(ACTIONS.set_winner_game(response.data.playerGameWinnerName));
                } else {
                    dispatch(ACTIONS.set_current_player_number(1));
                }
            });
    };

    const proccessRound = () => {
        if (currentPlayerNumber === 1) {
            newRound();
        } else {
            completeRound();
        }
    };

    const handleMove = (moves: string[], event: any) => {
        dispatch(ACTIONS.set_current_move(moves.indexOf(event.target.value) + 1));
    };

    return (
        <div>
            {!state.endGame && <div>
                    <RoundPresentation
                        roundNumer={rounds.length + 1}
                        handleMove={handleMove}
                        proccessRound={proccessRound}
                    />
                <Rounds rounds={rounds}/>
            </div>}
            {state.endGame && <EndGame/>}
        </div>
    );
};

export default RoundContainer;