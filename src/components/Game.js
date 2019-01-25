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
            player1RoundTotal: 0,
            player1Points: 0
        }
      }
    render() {
        let { dealerRoundTotal, dealerPoints, player1RoundTotal, player1Points} = this.state;
      return (
        <div>
            Testing
            <Scoreboard 
                dealerRoundTotal={dealerRoundTotal} 
                dealerPoints={dealerPoints} 
                player1RoundTotal={player1RoundTotal} 
                player1Points={player1Points} />
            <Dealer />
            <Player />
            <Interface />
        </div>
      );
    }
  }
  
  export default Game;