import React, { Component } from 'react';
import './App.css';
import Cell from './cell'; 
class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(-1),
      nextMove: 0,
      gameOver: false,
    };
  }

  onClickHandle = (cellNo) => {
    if (!this.state.gameOver) {
      const { cells, nextMove } = this.state;
      const newCells = [...cells];
      newCells[cellNo] = nextMove;

      this.setState(
        {
          cells: newCells,
          nextMove: nextMove === 0 ? 1 : 0,
        },
        () => {
          this.checkGameStatus();
        }
      );
    }
  };

  checkGameStatus() {
    const { cells } = this.state;
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winPatterns.map((pattern) => {
        const [a, b, c] = pattern;
        if (cells[a] !== -1 && cells[a] === cells[b] && cells[a] === cells[c]) {
          this.setState({ gameOver: 'Player ' + (cells[a] === 0 ? 'O' : 'X') });
        }
        return null; 
      });
    
      if (!cells.includes(-1) && this.state.gameOver === false) {
        this.setState({ gameOver: 'draw' });
      }
    }
  resetGame = () => {
    this.setState({
      cells: Array(9).fill(-1),
      nextMove: 0,
      gameOver: false,
    });
  };

  render() {
    const { cells, nextMove, gameOver } = this.state;

    return (
      <div>
        <div className="player-info">
        {gameOver ? (
    <div className="game-result h3 text-center">
      {gameOver === 'draw' ? 'Game Over!' :'Game Over!'}
    </div>
  ) : (
    <div className="player-move text-center">
      <h3> Move: {nextMove === 0 ? '0' : 'X'}</h3>
    </div>
  )}
      
        </div>
        <div className="tictactoe-board">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              cellNo={index}
              value={cell}
              onClickHandle={this.onClickHandle}
            />
          ))}
        </div>
        <div className='container text-center p-2'>
        <button className="btn btn-primary" onClick={this.resetGame}>{gameOver?'New Game':'Reset Game'}</button>
        </div>
        <div  className='row text-center '>
        {gameOver && (
            <div className="game-result h3">
            {gameOver === 'draw' ? 'Draw' : 'Player ' + (nextMove === 0 ? 'X' : '0') + ' Wins'}
            </div>
          )}
        </div>
       
      </div>
    );
  }
}

export default TicTacToe;
