import React, {useReducer} from 'react';
import { Redirect } from 'react-router';
import * as GameReducer from '../../../store/reducers/game_reducer';
import * as ACTIONS from '../../../store/actions/actions';

const GamePresentation: React.FC<any> = ({startGame}) => {
    const [stateGameReducer, dispatchGameReducer] = useReducer(GameReducer.GameReducer, GameReducer.initialState);

    const handlePlayerName1 = (name) => {
        dispatchGameReducer(ACTIONS.add_player1(name));
    };

    const handlePlayerName2 = (name) => {
        dispatchGameReducer(ACTIONS.add_player2(name));
    };

    const validate = (): boolean => {
        return stateGameReducer.player1Name && stateGameReducer.player2Name && stateGameReducer.gameId !== undefined;
    };

    const Players = [
        {name: stateGameReducer.player1Name, 'function': handlePlayerName1},
        {name: stateGameReducer.player2Name, 'function': handlePlayerName2}
    ];

    return (
    <div>
        <h1>Enter Player's Name</h1>
        {
            Players.map(({name, function: func}, index) => {
                return (
                    <div key={index + 1}>
                        <label>Player {index + 1}</label>
                        <input type='text' placeholder={`Enter Player ${index + 1} Name`} value={name} onChange={e => func(e.target.value)}/>
                        <br/>
                        <br/>
                    </div>
                );
            })
        }
        <button type='button' onClick={startGame(stateGameReducer.player1Name, stateGameReducer.player2Name)}>Start Game</button>
        {validate() && <Redirect to={`/gameId=${stateGameReducer.gameId}/round`}/>}
    </div>
    );
};

export default GamePresentation;
