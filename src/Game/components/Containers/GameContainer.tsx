import React, { useState, useReducer } from 'react';
import GamePresentation from '../Presentations/GamePresentation';
import axios from 'axios';
import * as GameReducer from '../../reducers/game_reducer';
import * as ACTIONS from '../../actions/actions';

const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const [gameId, setGameId] = useState(undefined);

    const [stateGameReducer, dispatchGameReducer] = useReducer(GameReducer.GameReducer, GameReducer.initialState);

    const handlePlayerName1 = (name: string) => {
        dispatchGameReducer(ACTIONS.add_player1(name));
    };

    const handlePlayerName2 = (name: string) => {
        dispatchGameReducer(ACTIONS.add_player2(name));
    };

    const validate = (): boolean => {
        return stateGameReducer.player1Name && stateGameReducer.player2Name && gameId !== undefined;
    };

    const startGame = () => {
        axios.post(`${config.GOD_API}/Game/NewGame`, {
            'Player1': stateGameReducer.player1Name,
            'Player2': stateGameReducer.player2Name
        }, config.options)
            .then(response => {
                setGameId(response.data.id);
            });
    };

    return (
        <GamePresentation
            startGame={startGame}
            gameId={gameId}
            handlePlayerName1={handlePlayerName1}
            handlePlayerName2={handlePlayerName2}
            validate={validate}
            player1Name={stateGameReducer.player1Name}
            player2Name={stateGameReducer.player2Name}
        />
    );
};

export default GameContainer;
