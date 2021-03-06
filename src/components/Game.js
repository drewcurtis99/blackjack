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
            dealerHiddenRoundTotal: 0,
            dealerPoints: 0,
            dealerHand: [],
            player1RoundTotal: 0,
            player1Points: 0,
            player1Hand: [],
            isHidden: true,
            isGameOver: false
        }

        this.handleHold = this.handleHold.bind(this);
        this.handleHit = this.handleHit.bind(this);
        this.handleDeal = this.handleDeal.bind(this);
        this.startGame = this.startGame.bind(this);
      }
      
    componentDidMount() {
        this.startGame();
    }
    
    startGame() {
        return new Promise((res) => {
            return res(this.shuffleDeck(this.createDeck(1), 1))
        }).then(() => {
            let player1Cards = [this.dealCard(), this.dealCard()];
            let dealerCards = [this.dealCard(), this.dealCard()];
    
            this.setState({
                player1Hand: player1Cards,
                player1RoundTotal: this.calculateScore(player1Cards),
                dealerHand: dealerCards,
                dealerRoundTotal: this.calculateScore([dealerCards[1]]),
                dealerHiddenRoundTotal: this.calculateScore(dealerCards),
                isGameOver: false,
                isHidden: true
            })
        })
    }

    calculateScore(cards) {
        let score = 0;
        let aceCount = cards.filter(value => value[0] === 'A').length;
        let faceCards = {
            'J': 10,
            'Q': 10,
            'K': 10,
            'A': 11
        }

        cards.forEach((card) => {
            if (card.length === 3) {
                score += 10;
            } else if (faceCards[card[0]]) {
                score += faceCards[card[0]];
            } else {
                score += Number(card[0]);
            }
        })

        while (score > 21 && aceCount) {
            score -= 10;
            aceCount--;
        }

        return score;
    }

    createDeck(deckQuantity) {
        let cards = [];
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
        this.setState({cards: deck});
    }

    dealCard() {
        let { cards } = this.state;
        let cardIndex = this.getRandomValueInclusive(0, cards.length - 1);
        let card = cards[cardIndex];
        cards.splice(cardIndex, 1);
        this.setState({cards});
        return card;
    }

    getRandomValueInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    //Click Handler Functions

    handleDeal() {
        this.startGame();
    }

    handleHit() {
        let { player1Hand, dealerPoints } = this.state;
        let drawCard = this.dealCard();
        player1Hand.push(drawCard);
        let updatedScore = this.calculateScore(player1Hand);
        if (updatedScore > 21) {
            this.setState({
                isGameOver: true,
                dealerPoints: dealerPoints + 1,
            })
        }
        this.setState({
            player1Hand,
            player1RoundTotal: updatedScore
        })
    }

    handleHold() {
        return new Promise((res) => {
            this.setState({
                isGameOver: true, 
                isHidden: false,
                dealerRoundTotal: this.state.dealerHiddenRoundTotal
            }, res(true))
        }).then(() => {
            let { dealerHand, dealerRoundTotal, player1RoundTotal } = this.state;
            let drawCardInterval = setInterval(() => {
                if (dealerRoundTotal < 21 && dealerRoundTotal <= player1RoundTotal) {
                    let drawCard = this.dealCard();
                    dealerHand.push(drawCard);
                    dealerRoundTotal = this.calculateScore(dealerHand);
                    this.setState({
                        dealerHand,
                        dealerRoundTotal
                    })
                } else {
                    this.handleScoring();
                    clearInterval(drawCardInterval);
                }
            }, 1000);
        })
    }

    handleScoring() {
        return
    }

    render() {
        let { dealerRoundTotal, dealerPoints, dealerHand, player1RoundTotal, player1Points, player1Hand, isHidden} = this.state;
      return (
        <div className='gameContainer'>
            <h1>BlackJack</h1>
            <Scoreboard 
                dealerRoundTotal={dealerRoundTotal} 
                dealerPoints={dealerPoints} 
                player1RoundTotal={player1RoundTotal} 
                player1Points={player1Points} />
            <Dealer dealerHand={dealerHand} isHidden={isHidden} />
            <Player player1Hand={player1Hand} />
            <Interface 
            handleDeal={this.handleDeal} 
            handleHit={this.handleHit} 
            handleHold={this.handleHold} />
        </div>
      );
    }
  }
  
  export default Game;

  //Steps left because I ran out of time
    // 1. Complete handleScoring
    // 2. make hit and hold buttons not clickable once a game is over
    // 3. make application look better with more styling.