import React, { Component } from "react";
import './App.css';
import CrocSVG from './croc.svg'
import ElephantSVG from './elephant.svg';
import GiraffeSVG from './giraffe.svg';
import Gorilla from './gorilla.svg';
import Koala from './koala.svg';
import Polar from './polar-bear.svg';
import Tiger from './tiger.svg';
import Whale from './whale.svg';

class GameOfMemory extends Component {
  state = {
      cards: [
        { id: 1, image: CrocSVG , isOpen: false },
        { id: 2, image: ElephantSVG , isOpen: false },
        { id: 3, image:GiraffeSVG , isOpen: false } ,
         { id: 4, image: ElephantSVG, isOpen: false },
        { id: 5, image: Tiger, isOpen: false },
        { id: 6, image: Whale, isOpen: false },
        { id: 7, image: Polar, isOpen: false },
        { id: 8, image: Koala, isOpen: false },
        { id: 9, image: Whale, isOpen: false },
        { id: 10, image: GiraffeSVG, isOpen: false },
        { id: 11, image: CrocSVG, isOpen: false },
        { id: 12, image: Gorilla, isOpen: false },
        { id: 13, image: Koala, isOpen: false },
        { id: 14, image: Gorilla, isOpen: false },
        { id: 15, image: Tiger, isOpen: false },
        { id: 16, image: Polar, isOpen: false },
      ],
      openCards: [],
      background:"bg-primary",
    
    };
    initialState = { ...this.state };

  handleCardClick(card) {
    if (card.isOpen || this.state.openCards.length === 2) {
      return;
    }

    const updatedCards = this.state.cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isOpen: true  };
      }
      return c;
    });

    const updatedOpenCards = [...this.state.openCards, card];

    this.setState({
      cards: updatedCards,
      openCards: updatedOpenCards,
    });

    if (updatedOpenCards.length === 2) {
      this.checkMatch(updatedOpenCards);
    }
  }

  checkMatch(openCards) {
    if (openCards[0].image === openCards[1].image) {
      const updatedCards = this.state.cards.map((c) => {
        if (c.id === openCards[0].id || c.id === openCards[1].id) {
          return { ...c, isOpen: true, image: "" };
        }
        return c;
      });

      this.setState({
        cards: updatedCards,
        openCards: [],
      });
    } else {
      setTimeout(() => {
        const updatedCards = this.state.cards.map((c) => {
          if (c.isOpen && c.image !=="") {
            return { ...c, isOpen: false };
          }
          return c;
        });

        this.setState({
          cards: updatedCards,
          openCards: [],
        });
      }, 1000);
    }
  }
  resetGame = () => {
    this.setState({ ...this.initialState });
  }
  heckGameStatus(cards) {
    const totalCards = cards.length;
    const matchedCards = cards.filter(card => card.image === "").length;
    const isGameOver = matchedCards === totalCards;
    this.setState({ isGameOver });
  }


render() {
  const { cards, openCards, isGameOver } = this.state;
  return (
    <div className="container mt-5">
      <div className="col-10 text-center">
        <div className="row ">
          {cards.map((card) => (
            <div key={card.id} className="col-3  ">
              <div className={"card " + (card.isOpen ? "bg-light" : "bg-primary")} onClick={() => this.handleCardClick(card)}>
                <div className="card-body text-center">
                  {card.isOpen ? (card.image ? (
                      <img src={card.image} className="img-fluid" />
                    ) : (<div className="blank-card"></div>)) : null}
                </div>
              </div>
              {openCards.length === 2 && card.isOpen && card.image === openCards[0].image && (
                <button disabled></button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" container  m-2 ">
        <button className="btn btn-primary btn-lg" onClick={this.resetGame}>Reset Game</button>
      </div>
    </div>
  );
}
}
export default GameOfMemory;
