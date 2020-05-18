import React from 'react';
import { Redirect } from 'react-router';
import { useGame } from '@app/Game/hooks';

const GamePresentation: React.FC<any> = (props: IProps) => {
    const { state } = useGame();

    const Players = [
        {name: state.player1Name, 'function': props.handlePlayerName1},
        {name: state.player2Name, 'function': props.handlePlayerName2}
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
        <button type='button' onClick={props.startGame}>Start Game</button>
        {props.validate() && <Redirect to={`/round`}/>}
    </div>
    );
};

interface IProps {
    startGame: any;
    handlePlayerName1: any;
    handlePlayerName2: any;
    validate: any;
}

export default GamePresentation;
