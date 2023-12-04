import React, { Component } from "react";

class Task24 extends Component {
  state = {
    scores: {
      TeamA: 0,
      TeamB: 0,
    },
  };

  add = (team, points) => {
    let s1={...this.state};

    s1.scores = {
    ...s1.scores,
    [team]: s1.scores[team] + points,
  };
  this.setState(s1);

  };

  Clear = () => {
    let s1 = { ...this.state };
    s1.scores = {
      TeamA: 0,
      TeamB: 0,
    };
    this.setState(s1);
  };
  

  render() {
    const { scores } = this.state;
    const teamOptions = [
      { points: 3, label: "+3 POINTS" },
      { points: 2, label: "+2 POINTS" },
      { points: 1, label: "FREE THROW" },
    ];

    return (
      <React.Fragment>
        <div className="row col-8 m-2 bg-light text-center">
          <div className="col-6">
            <div className="row-3">
              <h3 className="text-secondary">Team A</h3>
              <p className="display-4">{scores.TeamA}</p>
            </div>
            {teamOptions.map((option) => (
              <p><button className="btn btn-warning"onClick={() => this.add("TeamA", option.points)}>{option.label}</button>
         </p> ))}
          </div>

          <div className="col-6">
            <div className="row-3">
              <h3 className="text-secondary">Team B</h3>
              <p className="display-4">{scores.TeamB}</p>
            </div>
            {teamOptions.map((option) => (
              <p><button className="btn btn-warning  "onClick={() => this.add("TeamB", option.points)}>{option.label}</button>
         </p> ))}
          </div>
        

        <div className=" text-center">
          <button className="btn btn-warning " onClick={this.Clear}> Reset </button>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Task24;
