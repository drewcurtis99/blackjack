import React from 'react';
import Card from './Card';

const Player = ({ player1Hand }) => (
    <div>
        <div>Player Cards</div>
        <div className='playerCards'>
            {player1Hand.map((card, index) => (
                <div key={card} className='playerCard'>
                    <Card card={card} />
                </div>
            ))}
        </div>
    </div>
);

export default Player;