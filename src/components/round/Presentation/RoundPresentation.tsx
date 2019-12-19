import React from 'react';

const moves: string[] = ['Rock', 'Papper', 'Scissors'];

const RoundPresentation: React.FC<IProps> = (props: IProps) => {
    return (
        <div>
            <label>Round {props.roundNumer}</label>
            <br/>
            <br/>
            <label>{props.currentPlayer}</label>
            <br/>
            <br/>
            <label>Select Move</label>
            <select onChange={e => props.handleMove(moves, e)}>
                {moves.map((value, index) => {
                    // tslint:disable-next-line: no-unused-expression
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
    currentPlayer: string;
    handleMove: any;
    proccessRound: any;
}

export default RoundPresentation;
