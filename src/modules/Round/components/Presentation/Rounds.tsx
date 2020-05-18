import React from 'react';
import '../../../../../styles/index.css';

const Rounds: React.FC<any> = ( {rounds} ) => {
    return (
        <div>
            <h1>Score</h1>
            <div id='score'>
                <h2>Round</h2>
                <h2 id='winner'>Winner</h2>
            </div>
            <div id='rounds'>
                {rounds.map((item: string, index: number) => {
                    return (
                        <div key={index + 1}>
                            <label>{index + 1}</label>
                            <label style={{marginLeft: '3rem'}}>{item}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Rounds;