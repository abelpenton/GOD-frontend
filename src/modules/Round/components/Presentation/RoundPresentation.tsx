import React from 'react';

import '../../../../../styles/index.css';
import { usePlayerName, useRounds } from '@app/Round/hooks';
import { moves } from '@utils/utils-contants';

const RoundPresentation: React.FC<IProps> = (props: IProps) => {
    const currentPlayerName = usePlayerName();
    const round = useRounds().length;
    return (
        <div id='round-presentation'>
            <label>Round {round}</label>
            <br />
            <br />
            <label>{currentPlayerName}</label>
            <br />
            <br />
            <label>Select Move</label>
            <select id='select-id' onChange={e => props.handleMove(e)}>
                {moves.map((value, index) => (<option key={index + 1} value={value}>{value}</option>))}
            </select>
            <br />
            <br />
            <button type='button' onClick={props.proccessRound}>Ok</button>
        </div>
    );
};

interface IProps {
    handleMove: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    proccessRound: () => void;
}

export default RoundPresentation;
