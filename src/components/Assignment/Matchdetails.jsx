import React, { Component } from "react";

class MatchDetails extends Component {
  render() {
    const { team1, team2, goals, handleGoalScored, handleMatchOver } = this.props;
    
    return (
      <div className="container">
        <h5 className="text-center">Welcome to an Exciting Match</h5>
        <div>
          <div className="row">
            <div className="col-4 h5 text-center">{team1}</div>
            <div className="col-4 h5 text-center">{goals.team1}-{goals.team2}</div>
            <div className="col-4 h5 text-center">{team2}</div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <button className="btn btn-warning" onClick={() => handleGoalScored("team1")}>
                Goal Scored
              </button>
            </div>
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <button className="btn btn-warning" onClick={() => handleGoalScored("team2")}>
                Goal Scored
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-warning m-2" onClick={handleMatchOver}>
            Match Over
          </button>
        </div>
      </div>
    );
  }
}

export default MatchDetails;
