import React, {useState} from 'react';

const config = require('../../../config');

const Game: React.FC = () => {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [gameId, setGameId] = useState(undefined);

    const onChangeName1 = (name: string) => {
        console.log(config.GOD_API)
        setPlayer1Name(name);
    };

    const onChangeName2 = (name: string) => {
        setPlayer2Name(name);
    };

    const startGame = (): void => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                'Player1': player1Name,
                'Player2': player2Name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/NewGame`, options)
            .then(response => setGameId(response.json()[gameId]));

    };

    const validate = (): boolean => {
        return player2Name !== '' && player1Name !== '' && gameId;
    };

    // const players: IPlayer[] = [
    //     {name: player1Name, changeFunction: onChangeName1},
    //     {name: player2Name, changeFunction: onChangeName2}];

    return (
    <div>
        <h1>Enter Player's Name</h1>
        <label>Player 1</label>
        <input type='text' placeholder='Enter Player 1 Name' value={player1Name} onChange={e => onChangeName1(e.target.value)}/>
        <br/>
        <br/>
        <label>Player 2</label>
        <input type='text' placeholder='Enter Player 2 Name' value={player2Name} onChange={e => onChangeName2(e.target.value)}/>
        <br/>
        <br/>
        <button type='button' onClick={startGame}>Start Game</button>
    {/* {...players.map(({name, changeFunction}, index) => {
        // tslint:disable-next-line: no-unused-expression
        <div>
            <label>Player {index}</label>
            <input type='text' value={name} onChange={changeFunction}/>
        </div>;
    })} */}
    </div>
    );
};

interface IPlayer {
    name: string;
    changeFunction: any;
}

export default Game;
