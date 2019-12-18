import * as ACTION_TYPES from './action_types';

export const success = {
    type: ACTION_TYPES.SUCCESS
};

export const failure = {
    type: ACTION_TYPES.FAILURE
};

export const add_player1 = (player) => {
    return {
        type: ACTION_TYPES.SET_PLAYER1_NAME,
        payload: player
    };
};

export const add_player2 = (player) => {
    return {
        type: ACTION_TYPES.SET_PLAYER2_NAME,
        payload: player
    };
};

export const add_game = (game) => {
    return {
        type: ACTION_TYPES.SET_GAME_ID,
        payload: game
    };
};