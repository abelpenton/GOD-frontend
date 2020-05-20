import { useContext } from 'react';
import { GameContext } from '@app/Game/context';

export const useGame = () => useContext(GameContext);

export const useGameId = () => useGame().state.gameId;

export const usePlayers = () => {
    const { state } = useGame();
    return [state.player1Name, state.player2Name];
};