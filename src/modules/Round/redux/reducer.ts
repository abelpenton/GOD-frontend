import { IAction } from '@app-types/types';
import * as ACTION_TYPES from '@app/Round/redux/action_types';
import { initState, IRoundState } from '@app/Round/redux/state';

export const reducer = (state: IRoundState = initState, action: IAction) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayerName: action.payload
            };
        case ACTION_TYPES.SET_PLAYER_NUMBER:
            return {
                ...state,
                currentPlayerNumber: action.payload
            };

        case ACTION_TYPES.SET_CURRENT_MOVE:
            return {
                ...state,
                currentMove: action.payload
            };

        case ACTION_TYPES.SET_ROUND:
            return {
                ...state,
                roundId: action.payload
            };

        case ACTION_TYPES.END_GAME:
            return {
                ...state,
                endGame: action.payload
            };

        case ACTION_TYPES.SET_WINNER:
            return {
                ...state,
                winnerName: action.payload
            };

        case ACTION_TYPES.ADD_ROUND:
            return {
                ...state,
                rounds: action.payload
            };

        default:
            return state;
    }
};