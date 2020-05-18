import * as ACTION_TYPES from '@app/Game/redux/action_types';
import { createAction } from '@app-types/action-creator';

const add_player1 = createAction<string>(ACTION_TYPES.SET_PLAYER1_NAME);

const add_player2 = createAction<string>(ACTION_TYPES.SET_PLAYER2_NAME);

const set_game_id = createAction<number>(ACTION_TYPES.SET_GAME_ID);

export {add_player1, add_player2, set_game_id};
