import React, {useReducer} from 'react';
import * as GameReducer from '../../../store/reducers/game_reducer';
import * as ACTIONS from '../../../store/actions/actions';
import GamePresentation from '../Presentations/GamePresentation';

const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const [_, dispatchGameReducer] = useReducer(GameReducer.GameReducer, GameReducer.initialState);

    const startGame = (playerName1, playerName2): void => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                'Player1': playerName1,
                'Player2': playerName2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/NewGame`, options)
            .then(response => dispatchGameReducer(ACTIONS.add_game(JSON.stringify(response.json())['gameId'])));

    };
    return (
        <GamePresentation startGame={startGame}/>
    );
};

export default GameContainer;
