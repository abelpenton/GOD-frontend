import * as ACTION_TYPES from './action_types';
import { createAction } from '../../libs/action-creator';

export const set_current_player_name = createAction<string>(ACTION_TYPES.SET_CURRENT_PLAYER);

export const set_current_player_number = createAction<number>(ACTION_TYPES.SET_PLAYER_NUMBER);

export const set_current_move = createAction<number>(ACTION_TYPES.SET_CURRENT_MOVE);

export const add_round = createAction<number>(ACTION_TYPES.SET_ROUND);

export const end_game = createAction<boolean>(ACTION_TYPES.END_GAME);

export const set_winner_game = createAction<string>(ACTION_TYPES.SET_WINNER);

export const fetch_player_name = createAction<number>(ACTION_TYPES.FETCH_PLAYER_NAME);