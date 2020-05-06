
import React, {useState, useContext} from 'react';
import { Redirect } from 'react-router';
import {  useWinnerName } from '../../../Round/hooks';

const EndGame: React.FC<any> = () => {
    const winnerName = useWinnerName();
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