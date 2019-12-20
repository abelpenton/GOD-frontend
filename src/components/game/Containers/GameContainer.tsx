import React, {useState} from 'react';
import GamePresentation from '../Presentations/GamePresentation';
import axios from 'axios';

const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const [gameId, setGameId] = useState(undefined);

    const startGame = (playerName1: string, playerName2: string) => {
        axios.post(`${config.GOD_API}/Game/NewGame`, {
                    'Player1': playerName1,
                    'Player2': playerName2
                    }, config.options)
                .then(response => {
                    setGameId(response.data.id);
            });
    };
    return (
        <GamePresentation startGame={startGame} gameId={gameId}/>
    );
};

export default GameContainer;
