import React from 'react';

import '../../../../../styles/index.css';
import { usePlayerName } from '@app/Round/hooks';
const moves: string[] = ['Rock', 'Papper', 'Scissors'];

const RoundPresentation: React.FC<IProps> = (props: IProps) => {
    const currentPlayerName = usePlayerName();
    return (
        <div id='round-presentation'>
            <label>Round {props.roundNumer}</label>
            <br/>
            <br/>
            <label>{currentPlayerName}</label>
            <br/>
            <br/>
            <label>Select Move</label>
            <select id='select-id' onChange={e => props.handleMove(moves, e)}>
                {moves.map((value, index) => {
                return (<option key={index + 1} value={value}>{value}</option>);
                })}
            </select>
            <br/>
            <br/>
            <button type='button' onClick={props.proccessRound}>Ok</button>
        </div>
    );
};

interface IProps {
    roundNumer: number;
    handleMove: any;
    proccessRound: any;
}

export default RoundPresentation;
