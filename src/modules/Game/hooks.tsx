import { useContext } from 'react';
import { GameContext } from '@app/Game/context';

export const useGame = () => useContext(GameContext);

export const useGameId = () => useGame().state.gameId;