import { useContext, useEffect, useCallback } from 'react';
import { RoundContext } from '@app/Round/context';
import * as ACTIONS from '@app/Round/redux/actions';
import { gameService } from '@utils/services';

export const useRound = () => useContext(RoundContext);
const service = gameService();
export const useCurrentPlayer = () => {
    const { state: { currentPlayerNumber }, dispatch } = useRound();

    const getPlayer = useCallback(async () => {
        const response = await service.get(currentPlayerNumber);
        dispatch(ACTIONS.set_current_player_name(response.data.playerName));
    }, [currentPlayerNumber]);

    useEffect(() => {
        getPlayer();
    }, [getPlayer]);

    return currentPlayerNumber;
};

export const usePlayerName = () => useRound().state.currentPlayerName;

export const useWinnerName = () => useRound().state.winnerName;

export const useRounds = () => useRound().state.rounds;