import React from 'react';

interface IItemProps {
    name: string;
    index: number;
}

const RoundItem: React.FC<IItemProps> = (props: IItemProps) => {
    return (
        <div key={props.index + 1}>
            <label>{props.index + 1}</label>
            <label style={{ marginLeft: '3rem' }}>{props.name}</label>
        </div>
    );
};

export default React.memo(RoundItem);