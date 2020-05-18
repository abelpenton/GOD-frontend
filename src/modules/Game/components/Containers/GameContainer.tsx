import axios from 'axios';
import React from 'react';
import GamePresentation from '@app/Game/components/Presentations/GamePresentation';
import * as ACTIONS from '@app/Game/redux/actions';
import { useGame } from '@app/Game/hooks';
import * as config from '@utils/config';

const GameContainer: React.FC = () => {
    const {state, dispatch} = useGame();

    const handlePlayerName = (name: string, playerNumber: number) => {
        playerNumber === 1 ? dispatch(ACTIONS.add_player1(name)) : dispatch(ACTIONS.add_player2(name));
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
            handlePlayerName={handlePlayerName}
            validate={validate}
        />
    );
};

export default GameContainer;
