import React, {useState} from 'react';
import GamePresentation from '../Presentations/GamePresentation';
import axios, { AxiosRequestConfig } from 'axios';

const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const [gameId, setGameId] = useState(undefined);

    const startGame = (playerName1: string, playerName2: string) => {
        const options: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json-patch+json',
                'Accept': 'application/json'
            }
        };
        axios.post(`${config.GOD_API}/Game/NewGame`, {
                    'Player1': playerName1,
                    'Player2': playerName2
                    }, options)
                .then(response => {
                    setGameId(response.data.id);
            });
    };
    return (
        <GamePresentation startGame={startGame} gameId={gameId}/>
    );
};

export default GameContainer;
