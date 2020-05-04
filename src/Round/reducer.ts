import * as ACTION_TYPES from './actions/action_types';
import { roundInitialState, IRoundState } from './state';

export const RoundReducer = (state: IRoundState = roundInitialState, action: IAction) => {
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
                endGame: true
            };

        case ACTION_TYPES.SET_WINNER:
            return {
                ...state,
                winnerName: action.payload
            };

        default:
            return state;
    }
};

interface IAction {
    type: string;
    payload: any;
}