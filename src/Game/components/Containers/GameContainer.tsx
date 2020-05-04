import React, { useContext } from 'react';
import GamePresentation from '../Presentations/GamePresentation';
import axios from 'axios';
import * as ACTIONS from '../../actions/actions';
import { GameContext } from '../../context/context';
const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const {state, dispatch} = useContext(GameContext);

    const handlePlayerName1 = (name: string) => {
        dispatch(ACTIONS.add_player1(name));
    };

    const handlePlayerName2 = (name: string) => {
        dispatch(ACTIONS.add_player2(name));
    };

    const validate = (): boolean => {
        return state.player1Name !== '' && state.player2Name !== '' && state.gameId !== -1;
    };

    const startGame = () => {
        axios.post(`${config.GOD_API}/Game/NewGame`, {
            'Player1': state.player1Name,
            'Player2': state.player2Name
        }, config.options)
            .then(response => {
                dispatch(ACTIONS.set_game_id(response.data.id));
            });
    };

    return (
        <GamePresentation
            startGame={startGame}
            handlePlayerName1={handlePlayerName1}
            handlePlayerName2={handlePlayerName2}
            validate={validate}
        />
    );
};

export default GameContainer;
