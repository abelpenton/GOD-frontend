import * as ACTION_TYPES from './action_types';

export const add_player1 = (player: string) => {
    return {
        type: ACTION_TYPES.SET_PLAYER1_NAME,
        payload: player
    };
};

export const add_player2 = (player: string) => {
    return {
        type: ACTION_TYPES.SET_PLAYER2_NAME,
        payload: player
    };
};
