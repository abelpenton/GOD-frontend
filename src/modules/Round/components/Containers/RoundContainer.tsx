import React from 'react';
import * as ACTIONS from '@app/Round/redux/actions';
import EndGame from '@app/Game/components/Presentations/EndGame';
import Rounds from '@app/Round/components/Presentation/Rounds';
import RoundPresentation from '@app/Round/components/Presentation/RoundPresentation';
import { useCurrentPlayer, useRound } from '@app/Round/hooks';
import { moves } from '@utils/utils-contants';
import { roundService } from '@utils/services';
import { useGameId } from '@app/Game/hooks';

const service = roundService();
const RoundContainer: React.FC = () => {
    const { state, dispatch } = useRound();
    const gameId = useGameId();
    const currentPlayerNumber = useCurrentPlayer();

    const proccessRound = async () => {
        let response;
        if (currentPlayerNumber === 1) {
            response = await service.post(gameId, state.currentMove);
            dispatch(ACTIONS.set_round(response.data.id));
            dispatch(ACTIONS.set_current_player_number(2));
        } else {
            response = await service.put(state.roundId, state.currentMove);
            dispatch(ACTIONS.add_round(response.data.rounds.map(({ playerRoundWinnerName }: never) => playerRoundWinnerName)));
            if (response.data.endGame) {
                dispatch(ACTIONS.end_game(true));
                dispatch(ACTIONS.set_winner_game(response.data.playerGameWinnerName));
            } else {
                dispatch(ACTIONS.set_current_player_number(1));
            }

        }
    };

    const handleMove = (event: React.ChangeEvent<HTMLSelectElement>) => dispatch(ACTIONS.set_current_move(moves.indexOf(event.target.value) + 1));

    return (
        <div>
            {!state.endGame && <div>
                <RoundPresentation
                    handleMove={handleMove}
                    proccessRound={proccessRound}
                />
                <Rounds />
            </div>}
            {state.endGame && <EndGame />}
        </div>
    );
};

export default RoundContainer;