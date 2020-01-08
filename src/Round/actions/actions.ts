import * as ACTION_TYPES from './action_types';

export const set_current_player_name = (name: string) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_PLAYER,
        payload: name
    };
};

export const set_current_player_number = (number: number) => {
    return {
        type: ACTION_TYPES.SET_PLAYER_NUMBER,
        payload: number
    };
};

export const set_current_move = (move: number) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_MOVE,
        payload: move
    };
};

export const add_round = (round_id: number) => {
    return {
        type: ACTION_TYPES.SET_ROUND,
        payload: round_id
    };
};

export const end_game = () => {
    return {
        type: ACTION_TYPES.END_GAME,
        payload: true
    };
};

export const set_winner_game = (name: string) => {
    return {
        type: ACTION_TYPES.SET_WINNER,
        payload: name
    };
};
