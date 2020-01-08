import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
    player1Name: '',
    player2Name: '',
    gameId: undefined
};

export const GameReducer = (state = initialState, action: IAction) => {
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

        default:
            return state;
    }
};

interface IAction {
    type: string;
    payload: any;
}