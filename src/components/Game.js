import React, { Component } from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Interface from './Interface';
import Scoreboard from './Scoreboard';

class Game extends Component {
    constructor() {
        super();
        this.state = {}
      }
    render() {
      return (
        <div>
            Testing
            <Scoreboard />
            <Dealer />
            <Player />
            <Interface />
        </div>
      );
    }
  }
  
  export default Game;