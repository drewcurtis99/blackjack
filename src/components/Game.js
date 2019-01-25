import React, { Component } from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Interface from './Interface';
import Scoreboard from './Scoreboard';
import _ from 'underscore';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            dealerRoundTotal: 0,
            dealerPoints: 0,
            dealerCards: ['2S', 'KS'],
            player1RoundTotal: 0,
            player1Points: 0,
            player1Cards: ['2A', 'KH']
        }
      }
      
    //   let faceCards = {
    //       'J': 10,
    //       'Q': 10,
    //       'K': 10,
    //       'A': 10
    //   }

    componentDidMount() {
        this.startGame();
    }
    
    startGame() {
        let cards = this.shuffleDeck(this.createDeck(1), 1);
        this.setState({
            cards,
        })
    }

    createDeck(deckQuantity) {
        let { cards } = this.state;
        let numberCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let suits = ['♠', '♥', '♦', '♣'];
        for (let deckCount = 0; deckCount < deckQuantity; deckCount++) {
            numberCards.forEach((card) => {
                suits.forEach((suit) => {
                    cards.push(card + suit);
                })
            })
        }
        return cards;
    }

    shuffleDeck(deck, shuffleQuantity = 1) {
        for (let shuffleCount = 0; shuffleCount < shuffleQuantity; shuffleCount++) {
            deck = _.shuffle(deck);
        }
        return deck;
    }


    render() {
        let { dealerRoundTotal, dealerPoints, dealerCards, player1RoundTotal, player1Points, player1Cards} = this.state;
      return (
        <div className='gameContainer'>
            <h1>BlackJack</h1>
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