import * as ACTION_TYPES from '@app/Game/redux/action_types';
import { IAction } from '@app-types/types';
import { initState, IGameState } from '@app/Game/redux/state';

export const reducer = (state: IGameState = initState, action: IAction): IGameState => {
    switch (action.type) {
        case ACTION_TYPES.SET_PLAYER1_NAME:
            return {
                ...state,
                player1Name: action.payload
            };

        case ACTION_TYPES.SET_PLAYER2_NAME:
            return {
                ...state,
                player2Name: action.payload
            };

        case ACTION_TYPES.SET_GAME_ID:
            return {
                ...state,
                gameId: action.payload
            };

        default:
            return state;
    }
};
