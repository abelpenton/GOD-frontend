import React, {useReducer, Dispatch} from 'react';
import { IRoundState, roundInitialState } from '../state';
import { RoundReducer } from '../reducer';

const RoundContext = React.createContext<{state: IRoundState, dispatch: Dispatch<any>}>({
    state: roundInitialState,
    dispatch: () => null
});

type Props = {
    children: React.ReactNode;
};

const RoundProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(RoundReducer, roundInitialState);

    return (
        <RoundContext.Provider value={{ state , dispatch}}>
            {children}
        </RoundContext.Provider>
    );
};

export {RoundContext, RoundProvider};
