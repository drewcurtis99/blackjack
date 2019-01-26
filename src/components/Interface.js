import React from 'react';

const Interface = ({ handleDeal, handleHit }) => (
    <div className='interface'>
        <button onClick={() => handleDeal()} className='dealBtn'>Deal</button>
        <button onClick={() => handleHit()} className='hitBtn'>Hit</button>
        <button className='holdBtn'>Hold</button>
    </div>
);

export default Interface;