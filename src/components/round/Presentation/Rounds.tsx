import React from 'react';

const Rounds: React.FC<any> = ( {rounds} ) => {
    return (
        <div>
            <h1>Score</h1>
            <div style={{display: 'flex', marginLeft: '50rem'}}>
                <h2>Round</h2>
                <h2 style={{marginLeft: '1rem'}}>Winner</h2>
            </div>
            {rounds.map((item, index) => {
                return (
                    <div key={index + 1}>
                        <label>{index + 1}</label>
                        <label>{item}</label>
                    </div>
                );
            })}
        </div>
    );
};

export default Rounds;