import React, { Component } from "react";
class NewMatch extends Component {
  state = {
    team1: "",
    team2: "",
    isMatchStarted: false,
    goals: { team1: 0, team2: 0 },
    view:1,
  };

  handleTeamSelection = (team, teamType) => {
    if (teamType === "team1" && !this.state.team2 && team !== this.state.team2) {
      this.setState({ team1: team });
    } else if (teamType === "team2") {
      this.setState({ team2: team });
    }
    else if (teamType === "team1" ) {
      this.setState({ team1: team });
    }
   
  };


  handleStartMatch = () => {
    if (this.state.team1 && this.state.team2 &&(this.state.team1 !== this.state.team2) ) {
      this.props.isMatchStarted();
      this.setState({ isMatchStarted: true });
    }
    else if(this.state.team1 && this.state.team2 &&(this.state.team1 === this.state.team2)) {
      alert("Please Select Diffrent team");

    }
    else if(!this.state.team1){
      alert("Please Select Team 1");
    }
    else if(!this.state.team2){
      alert("Please Select Team 2 ");
    }
  };

  handleGoalScored = (team) => {
    if (this.state.isMatchStarted) {
      this.setState((prevState) => ({
        goals: {
          ...prevState.goals,
          [team]: prevState.goals[team] + 1,
        },
      }));
    }
  };

  handleMatchOver = () => {
    const { team1, team2 ,goals} = this.state;
    this.props.isMatchOver();
    const result =
    goals.team1 > goals.team2 ? team1 + " Won" : goals.team2 > goals.team1 ? team2 + " Won" : "Match Drawn";


    this.props.addpointtable({
      team: team1,
      played: 1,
      won: result === team1 + " Won" ? 1 : 0,
      lost: result === team2 + " Won" ? 1 : 0,
      drawn: result === "Match Drawn" ? 1 : 0,
      goalsfor: goals.team1,
      goalsagainst: goals.team2,
    });
  
    this.props.addpointtable({
      team: team2,
    played: 1,
    won: result === team2 + " Won" ? 1 : 0,
    lost: result === team1 + " Won" ? 1 : 0,
    drawn: result === "Match Drawn" ? 1 : 0,
    goalsfor: goals.team2,
    goalsagainst: goals.team1,
    });    
    const newMatch = {

    team1: team1,
    team2: team2,
    score1:goals.team1,
    score2:goals.team2,
    result:result
};
this.props.addNewMatch(newMatch);

    this.setState({
      team1: "",
      team2: "",
      score1: 0,
      score2: 0,
      
      isMatchStarted: false,
      goals: { team1: 0, team2: 0 },
    });
  };

  render() {
    const {view, team1, team2, isMatchStarted, goals } = this.state;

    if (!isMatchStarted ) {
      return (
        <div className="row">
          <h5 className="text-center">Choose Team 1  {team1}</h5>
            {this.props.teams.map((team, index) => (
                        <div className="col-2 m-2 ">
              <button key={index} className="btn btn-warning p-2" onClick={() => this.handleTeamSelection(team,"team1")}>
                {team}
              </button>
              </div>

            ))}

          <h5 className="text-center">Choose Team 2 {team2}</h5>
          <div className="row">
            {this.props.teams.map((team, index) => {
            
                return (
                  <div className="col-2 m-2 ">

                  <button key={index} className="btn btn-warning " onClick={() => this.handleTeamSelection(team,"team2")}>
                    {team}
                    </button>
              </div>
                );
            })}
          </div>

            <div className="text-center">
            <button className="btn btn-secondary" onClick={this.handleStartMatch}>Start Match</button>

            </div>
        </div>
      );
    } else if(isMatchStarted ) {
      return (
        <div className="container">
          <h5 className="text-center">Welcome to an Exciting Match</h5>
          <div>
            <div className="row">
                <div className="col-4 h5 text-center"> {team1} </div>
                <div className="col-4 h5 text-center">{goals.team1}-{goals.team2}</div>
                <div className="col-4 h5 text-center"> {team2}</div>
            </div>
            <div className="row">
            <div className="col-4 text-center">
            <button className="btn btn-warning"  onClick={() => this.handleGoalScored("team1")}>Goal Scored</button>
                </div>
                <div className="col-4"></div>
            <div className="col-4 text-center">
            <button className="btn btn-warning"onClick={() => this.handleGoalScored("team2")}>Goal Scored</button>
                </div>
            </div>
            </div>
            <div className=" text-center">
            <button className="btn btn-warning m-2" onClick={this.handleMatchOver}>Match Over</button>
            </div>
        </div>
      );
    }
  }
}

export default NewMatch;
