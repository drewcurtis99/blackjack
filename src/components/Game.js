import React, { Component } from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Interface from './Interface';
import Scoreboard from './Scoreboard';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            dealerRoundTotal: 0,
            dealerPoints: 0,
            dealerCards: ["2A", 'KS'],
            player1RoundTotal: 0,
            player1Points: 0,
            player1Cards: ["2A", 'KH']
        }
      }
    render() {
        let { dealerRoundTotal, dealerPoints, dealerCards, player1RoundTotal, player1Points, player1Cards} = this.state;
      return (
        <div>
            Testing
            <Scoreboard 
                dealerRoundTotal={dealerRoundTotal} 
                dealerPoints={dealerPoints} 
                player1RoundTotal={player1RoundTotal} 
                player1Points={player1Points} />
            <Dealer dealerCards={dealerCards} />
            <Player player1Cards={player1Cards} />
            <Interface />
        </div>
      );
    }
  }
  
  export default Game;