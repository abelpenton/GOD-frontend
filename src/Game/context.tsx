import React, {useReducer, Dispatch} from 'react';
import {IContextProps} from '../libs/types';
import {initState} from './redux/state';
import {reducer} from './redux/reducer';
import {IGameState} from '../libs/types';

const GameContext = React.createContext<{state: IGameState, dispatch: Dispatch<any>}>({
    state: initState,
    dispatch: () => null
});

const GameProvider = ({children}: IContextProps) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <GameContext.Provider value={{ state , dispatch}}>
            {children}
        </GameContext.Provider>
    );
};

export {GameContext, GameProvider};
