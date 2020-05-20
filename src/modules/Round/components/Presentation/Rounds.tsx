import React from 'react';
import '../../../../../styles/index.css';
import { useRounds } from '@app/Round/hooks';
import RoundItem from '@app/Round/components/Presentation/RoundItem';

const Rounds: React.FC<{}> = () => {
    const rounds = useRounds();
    return (
        <div>
            <h1>Score</h1>
            <div id='score'>
                <h2>Round</h2>
                <h2 id='winner'>Winner</h2>
            </div>
            <div id='rounds'>
                {rounds.map((item: string, index: number) => <RoundItem name={item} index={index} />)}
            </div>
        </div>
    );
};

export default Rounds;