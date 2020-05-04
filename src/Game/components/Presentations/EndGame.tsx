
import React, {useState, useContext} from 'react';
import { Redirect } from 'react-router';
import { RoundContext } from '../../../Round/context';

const EndGame: React.FC<any> = () => {
    const {state: {winnerName}} = useContext(RoundContext);
    const [newGame, setNewGame] = useState(false);

    return (
        <div>
            <h1>WE have a WINNER!!!!</h1>
            <div id='end-game'>
                <h2>{winnerName} is the new EMPEROR!</h2>
                <button id='play-again' type='button' onClick={() => setNewGame(true)}>Play Again</button>
            </div>
            {newGame && <Redirect to={`/`}/>}
        </div>
    );
};

export default EndGame;