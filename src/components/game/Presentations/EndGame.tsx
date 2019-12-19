
import React, {useState} from 'react';
import { Redirect } from 'react-router';

const EndGame: React.FC<any> = ({winnerName}) => {
    const [newGame, setNewGame] = useState(false);

    return (
        <div>
            <h1>WE have a WINNER!!!!</h1>
            <h2>{winnerName} is the new EMPEROR!</h2>
            <button type='button' onClick={() => setNewGame(true)}>Play Again</button>
            {newGame && <Redirect to={`/`}/>}
        </div>
    );
};

export default EndGame;