import { Action } from 'redux';

export const createAction = <P = never, M = never>(
  type: string
): ActionCreator<P, M> => {
  function actionCreator(): Action<string>;
  function actionCreator(payload: P): PayloadAction<P>;
  function actionCreator(payload: P, meta?: M): PayloadAction<P, M>;
  function actionCreator(
    payload?: P,
    meta?: M
  ): Action<string> | PayloadAction<P, M> {
    return { type, payload, meta };
  }

  actionCreator.type = type;
  actionCreator.toString = () => type.toString();
  return actionCreator;
};

export interface ActionCreator<P = never, M = never> {
  (): Action<string>;
  (payload: P, meta?: M): PayloadAction<P, M>;
  type: string;
}
export interface PayloadAction<P, M = never> extends Action<string> {
  payload: P;
  meta?: M;
}
