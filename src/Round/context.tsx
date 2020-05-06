import React, { useReducer, Dispatch } from 'react';
import {reducer} from './redux/reducer';
import {initState} from './redux/state';
import {IRoundState, IContextProps} from '../libs/types';

const RoundContext = React.createContext<{ state: IRoundState, dispatch: Dispatch<any> }>({
    state: initState,
    dispatch: () => null
});

const RoundProvider = ({ children }: IContextProps) => {
    let [state, dispatch] = useReducer(reducer, initState);

    return (
        <RoundContext.Provider value={{ state, dispatch }}>
            {children}
        </RoundContext.Provider>
    );
};

export { RoundContext, RoundProvider };
