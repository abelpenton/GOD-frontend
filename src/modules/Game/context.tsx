import React, {useReducer, Dispatch} from 'react';
import {IContextProps} from '@app-types/types';
import {initState, IGameState} from '@app/Game/redux/state';
import {reducer} from '@app/Game/redux/reducer';

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
