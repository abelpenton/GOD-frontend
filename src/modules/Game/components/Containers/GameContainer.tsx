import React from 'react';
import GamePresentation from '@app/Game/components/Presentations/GamePresentation';
import * as ACTIONS from '@app/Game/redux/actions';
import { useGame } from '@app/Game/hooks';
import {gameService} from '@utils/services';

const service  = gameService();
const GameContainer: React.FC = () => {
    const {state, dispatch} = useGame();

    const handlePlayerName = (name: string, playerNumber: number) => {
        playerNumber === 1 ? dispatch(ACTIONS.add_player1(name)) : dispatch(ACTIONS.add_player2(name));
    };

    const validate = (): boolean => {
        return state.player1Name !== '' && state.player2Name !== '' && state.gameId !== -1;
    };

    const startGame = async () => {
        const response = await service.post(state.player1Name, state.player2Name);
        dispatch(ACTIONS.set_game_id(response.data.id));
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
