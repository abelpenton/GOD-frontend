import * as ACTION_TYPES from './actions/action_types';
import { gameState , IGameState} from './state';

export const GameReducer = (state: IGameState = gameState, action: IAction): IGameState => {
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

interface IAction {
    type: string;
    payload: any;
}