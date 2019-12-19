import * as ACTION_TYPES from '../actions/action_types';
import {IAction} from '../actions/actions';

export const initialState = {
    player1Name: '',
    player2Name: '',
    gameId: 10
};

export const GameReducer = (state = initialState, action: IAction) => {
    // tslint:disable-next-line: switch-default
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