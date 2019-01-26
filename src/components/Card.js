import React from 'react';

const Card = ({ card, isHidden}) => {
    return (
        isHidden ? (
            <div className='card'>
                ?
            </div>
        ) : (
            <div className='card'>
                {card}
            </div>
        )
    )
};

export default Card;