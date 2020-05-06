import { IRoundState } from '../../libs/types';

export const initState: IRoundState = {
    currentPlayerName: '',
    currentPlayerNumber: 1,
    currentMove: 1,
    roundId: 0,
    endGame: false,
    winnerName: '',
    rounds: []
};