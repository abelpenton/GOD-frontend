import React, { useEffect } from 'react';
import GamePresentation from '@app/Game/components/Presentations/GamePresentation';
import * as ACTIONS from '@app/Game/redux/actions';
import { useGame } from '@app/Game/hooks';
import {gameService} from '@utils/services';
import { useHistory } from 'react-router-dom';

const service  = gameService();
const GameContainer: React.FC = () => {
    const {state, dispatch} = useGame();
    let history = useHistory();

    const handlePlayerName = (name: string, playerNumber: number) =>
        playerNumber === 1 ? dispatch(ACTIONS.add_player1(name)) : dispatch(ACTIONS.add_player2(name));

    const startGame = async () => {
        if (!state.player1Name || !state.player2Name)
            return;
        const response = await service.post(state.player1Name, state.player2Name);
        dispatch(ACTIONS.set_game_id(response.data.id));
        history.push(`/round`);
    };

    return (
        <GamePresentation
            startGame={startGame}
            handlePlayerName={handlePlayerName}
        />
    );
};

export default GameContainer;
