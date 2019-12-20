
import React, {useState} from 'react';
import { Redirect } from 'react-router';

const EndGame: React.FC<any> = ({winnerName}) => {
    const [newGame, setNewGame] = useState(false);

    return (
        <div>
            <h1>WE have a WINNER!!!!</h1>
            <div style={{marginLeft: '44rem'}}>
                <h2>{winnerName} is the new EMPEROR!</h2>
                <button style={{marginLeft: '5rem'}} type='button' onClick={() => setNewGame(true)}>Play Again</button>
            </div>
            {newGame && <Redirect to={`/`}/>}
        </div>
    );
};

export default EndGame;