
import React from 'react';
import { useWinnerName } from '@app/Round/hooks';
import { useHistory } from 'react-router-dom';

const EndGame: React.FC<{}> = () => {
    const winnerName = useWinnerName();
    let history = useHistory();
    return (
        <div>
            <h1>WE have a WINNER!!!!</h1>
            <div id='end-game'>
                <h2>{winnerName} is the new EMPEROR!</h2>
                <button id='play-again' type='button' onClick={() => history.push('/')}>Play Again</button>
            </div>
        </div>
    );
};

export default EndGame;