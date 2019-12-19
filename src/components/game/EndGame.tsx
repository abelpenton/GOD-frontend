
import React, {useReducer, useState} from 'react';
import { Redirect } from 'react-router';
import * as RoundReducer from '../../store/reducers/round_reducer';

const EndGame: React.FC = () => {
    const [stateRoundReducer] = useReducer(RoundReducer.RoundReducer, RoundReducer.initialState);
    const [newGame, setNewGame] = useState(false);

    return (
        <div>
            <h1>WE have a WINNER!!!!</h1>
            <h2>{stateRoundReducer.winnerName} is the new EMPEROR!</h2>
            <button type='button' onClick={() => setNewGame(true)}>Play Again</button>
            {newGame && <Redirect to={`/`}/>}
        </div>
    );
};

export default EndGame;