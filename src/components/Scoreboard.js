import React from "react";

const Scoreboard = ({ dealerRoundTotal, dealerPoints, player1RoundTotal, player1Points }) => (
    <div>
        <table className="scoreboard">
            <thead>
                <tr>
                    <th colSpan="3">Scoreboard</th>
                </tr>
                <tr className="tableHeaders">
                    <th>Name</th>
                    <th>Round Total</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dealer</td>
                    <td>{dealerRoundTotal}</td>
                    <td>{dealerPoints}</td>
                </tr>
                <tr>
                    <td>Player</td>
                    <td>{player1RoundTotal}</td>
                    <td>{player1Points}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Scoreboard;