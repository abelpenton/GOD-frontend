import React, {useReducer} from 'react';
import * as GameReducer from '../../../store/reducers/game_reducer';
import * as ACTIONS from '../../../store/actions/actions';
import GamePresentation from '../Presentations/GamePresentation';

const config = require('../../../../config');

const GameContainer: React.FC = () => {
    const [, dispatchGameReducer] = useReducer(GameReducer.GameReducer, GameReducer.initialState);

    const startGame = (playerName1: string, playerName2: string) => {
        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify({
                'Player1': playerName1,
                'Player2': playerName2
            }),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/Game/NewGame`, options)
            .then(async response => {
                const result = (await response.json())['id'];
                dispatchGameReducer(ACTIONS.add_game(result));
            });
    };
    return (
        <GamePresentation startGame={startGame}/>
    );
};

export default GameContainer;
