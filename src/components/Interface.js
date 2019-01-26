import React from 'react';

const Interface = ({ handleDeal }) => (
    <div className='interface'>
        <button onClick={() => handleDeal()} className='dealBtn'>Deal</button>
        <button className='hitBtn'>Hit</button>
        <button className='holdBtn'>Hold</button>
    </div>
);

export default Interface;