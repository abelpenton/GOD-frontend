import React from 'react';

const Rounds: React.FC<any> = ( {rounds} ) => {
    return (
        <div>
            <h1>Score</h1>
            <div style={{display: 'flex', marginLeft: '50rem'}}>
                <h2>Round</h2>
                <h2 style={{marginLeft: '1rem'}}>Winner</h2>
            </div>
            <div style={{marginLeft: '53rem'}}>
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