import React from "react";
import Card from "./Card";

const Dealer = ({ dealerCards }) => (
    <div>
        <div>Dealer Cards</div>
        <div className="dealerCards">
            {dealerCards.map((card, index) => (
                <div className="dealerCard">
                    <Card key={card} card={card} />
                </div>
            ))}
        </div>
    </div>
);

export default Dealer;