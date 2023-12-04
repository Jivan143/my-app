import React, { Component } from "react";
import { getQuizQuestions } from "./getQuizQuestion";

class Assignment2 extends Component {
  state = {
    players: [
      { name: "James", points: 0 },
      { name: "Julia", points: 0 },
      { name: "Martha", points: 0 },
      { name: "Steve", points: 0 },
    ],
    questions: getQuizQuestions(),
    currentQuestion: 0,
    playerBuzzer: null,
  };

  handleOptionClick = (selectedOption) => {
    const { currentQuestion, questions, playerBuzzer } = this.state;
    const currentAnswer = questions[currentQuestion].answer;
  
    let message = "";
  
    if (selectedOption === currentAnswer && playerBuzzer) {
      const updatedPlayers = [...this.state.players];
      const playerIndex = updatedPlayers.findIndex(
        (player) => player.name === playerBuzzer
      );
  
      if (playerIndex !== -1) {
        updatedPlayers[playerIndex].points += 3;
        message = "Correct answer! You got 3 points.";
        this.setState({ players: updatedPlayers });
      }
    } else if (playerBuzzer) {
      const updatedPlayers = [...this.state.players];
      const playerIndex = updatedPlayers.findIndex(
        (player) => player.name === playerBuzzer
      );
  
      if (playerIndex !== -1) {
        updatedPlayers[playerIndex].points -= 1;
        message = "Wrong answer! You got -1 point.";
        this.setState({ players: updatedPlayers });
      }
    }
    if (message !== "") {
      alert(message);
    }
    
    const nextQuestion =currentQuestion + 1 < questions.length ? currentQuestion + 1 : 0;

    this.setState({ currentQuestion: nextQuestion, playerBuzzer: null });
  };
  
  

  handleBuzzerClick = (playerName) => {
    this.setState({ playerBuzzer: playerName });
  };

  render() {
    const { players, currentQuestion, questions, playerBuzzer } = this.state;
    const currentQuestionData = questions[currentQuestion];
    
    const gameIsOver = currentQuestion === questions.length-1;
  
    let highestScore = -1;
    let winners = [];
  
    if (gameIsOver) {
      players.forEach((player) => {
        if (player.points > highestScore) {
          highestScore = player.points;
          winners = [player.name];
        } else if (player.points === highestScore ) {
          winners.push(player.name);
        }
      });
    }
  
    return (
      <div className="container">
        <div className="text-center">
          <h3>Welcome to the Quiz Contest</h3>
          <h4>Participants</h4>
        </div>
        <div className="row border">
          {players.map((player, index) => (
            <div key={index}
              className={"col-3 border text-center " + (playerBuzzer === player.name ? "bg-success" : "bg-warning")}
            >
              <h4>Name: {player.name}</h4>
              <h4>Score: {player.points}</h4>
              <button className="btn btn-light text-dark"
                onClick={() => this.handleBuzzerClick(player.name)}
                >BUZZER
              </button>
            </div>
          ))}
        </div>
        <div className="container text-center">
              {gameIsOver ? (
                <div>
                  <h3>Game Over</h3>
                  <h4>
                    {winners.length === 1 ? "Winner is " + winners[0]
                      : winners.length >=1 ?( "Tie! Winners are " + winners.join(", ")):"There is No Winner"}
                  </h4>
                </div>
              ): (
              <div>
              <h3>Question Number: {currentQuestion + 1}</h3>
              <h4>{currentQuestionData.text}</h4>
              <div className=" box text-center ">

                {currentQuestionData.options.map((option, index) => (
                  <div key={index} className={"btn btn-info p-3 m-2 btn-sm " + (playerBuzzer ? "" : "disabled")}
                  onClick={() => this.handleOptionClick(index)}
                    >{option}
                    </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Assignment2;
