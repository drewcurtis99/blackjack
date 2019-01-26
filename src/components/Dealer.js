import React from 'react';
import Card from './Card';

const Dealer = ({ dealerHand, isHidden }) => (
    <div>
        <div>Dealer Cards</div>
        <div className='dealerCards'>
            {dealerHand.map((card, index) => (
                <div key={card} className='dealerCard'>
                    <Card card={card} isHidden={index === 0 ? isHidden : false} />
                </div>
            ))}
        </div>
    </div>
);

export default Dealer;