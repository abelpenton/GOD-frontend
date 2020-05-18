import React from 'react';
import { Redirect } from 'react-router';
import { useGame } from '@app/Game/hooks';

const GamePresentation: React.FC<IProps> = (props: IProps) => {
    const { state } = useGame();
    const players = [state.player1Name, state.player2Name];

    return (
        <div>
            <h1>Enter Player's Name</h1>
            {
                players.map((name, index) => {
                    return (
                        <div key={index + 1}>
                            <label>Player {index + 1}</label>
                            <input type='text' placeholder={`Enter Player ${index + 1} Name`} value={name} onChange={e => props.handlePlayerName(e.target.value, index + 1)} />
                            <br />
                            <br />
                        </div>
                    );
                })
            }
            <button type='button' onClick={props.startGame}>Start Game</button>
            {props.validate() && <Redirect to={`/round`} />}
        </div>
    );
};

interface IProps {
    startGame: () => void;
    handlePlayerName: (name: string, playerNumber: number) => void;
    validate: () => boolean;
}

export default GamePresentation;
