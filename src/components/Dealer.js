import React from 'react';
import Card from './Card';

const Dealer = ({ dealerCards }) => (
    <div>
        <div>Dealer Cards</div>
        <div className='dealerCards'>
            {dealerCards.map((card, index) => (
                <div key={card} className='dealerCard'>
                    <Card card={card} />
                </div>
            ))}
        </div>
    </div>
);

export default Dealer;