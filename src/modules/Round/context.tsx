import React, { useReducer, Dispatch } from 'react';
import {reducer} from '@app/Round/redux/reducer';
import {initState, IRoundState} from '@app/Round/redux/state';
import { IContextProps} from '@app-types/types';

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
