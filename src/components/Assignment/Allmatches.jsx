import React, { Component } from "react";

class AllMatches extends Component {
  render() {
   
    const {matches}=this.props;

    return (
      <div>
        {matches.length === 0 ? (
          <div>No matches to display</div>
        ) : (
            <div className=" table">
                <div className="row bg-dark text-light p-2 border">
                <div className="col">Team1</div>
                <div className="col">Team2</div>
                <div className="col">Score</div>
                <div className="col">Result</div>
                </div>

                {matches.map((match, index) => (
                <div className="row  p-2 border">
                <div className="col">{match.team1}</div>
                <div className="col">{match.team2}</div>
                <div className="col">{match.score1}-{match.score2}</div>
                <div className="col">{match.result}</div>
                </div>

                ))}



            </div>
            
        )}
      </div>
    );
  }
}

export default AllMatches;
