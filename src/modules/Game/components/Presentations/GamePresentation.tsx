import React from 'react';
import { Redirect } from 'react-router';
import { usePlayers } from '@app/Game/hooks';
import PlayerInput from '@app/Game/components/Presentations/PlayerInput';

const GamePresentation: React.FC<IProps> = (props: IProps) => {
    const players = usePlayers();

    return (
        <div>
            <h1>Enter Player's Name</h1>
            {
                players.map((name, index) => <PlayerInput name={name} index={index} handlePlayerName={props.handlePlayerName}/>)
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
