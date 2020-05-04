import React, {useReducer, Dispatch} from 'react';
import './reducer';
import { GameReducer } from './reducer';
import { gameState, IGameState } from './state';

const GameContext = React.createContext<{state: IGameState, dispatch: Dispatch<any>}>({
    state: gameState,
    dispatch: () => null
});

type Props = {
    children: React.ReactNode;
};

const GameProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(GameReducer, gameState);

    return (
        <GameContext.Provider value={{ state , dispatch}}>
            {children}
        </GameContext.Provider>
    );
};

export {GameContext, GameProvider};
