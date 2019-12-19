import * as ACTION_TYPES from './action_types';

export const success = {
    type: ACTION_TYPES.SUCCESS
};

export const failure = {
    type: ACTION_TYPES.FAILURE
};

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

export const add_game = (game: number) => {
    return {
        type: ACTION_TYPES.SET_GAME_ID,
        payload: game
    };
};

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

export const load_rounds = (rounds: string[]) => {
    return {
        type: ACTION_TYPES.SET_ROUNDS,
        payload: rounds
    };
};

export interface IAction {
    type: string;
    payload: any;
}