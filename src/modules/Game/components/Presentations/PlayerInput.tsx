import React from 'react';

interface IProps {
    name: string;
    index: number;
    handlePlayerName: (name: string, playerNumber: number) => void;
}

const PlayerInput: React.FC<IProps> = (props: IProps) => {
    const {name, index, handlePlayerName} = props;
    return (
        <div key={index + 1}>
            <label>Player {index + 1}</label>
            <input type='text' placeholder={`Enter Player ${index + 1} Name`} value={name} onChange={e => handlePlayerName(e.target.value, index + 1)} />
            <br />
            <br />
        </div>
    );
};

export default React.memo(PlayerInput);