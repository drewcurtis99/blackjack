import React from "react";
import Card from "./Card";

const Player = ({ player1Cards }) => (
    <div>
        <div>Player Cards</div>
        <div className="playerCards">
            {player1Cards.map((card, index) => (
                <div className="playerCard">
                    <Card key={card} card={card} />
                </div>
            ))}
        </div>
    </div>
);

export default Player;