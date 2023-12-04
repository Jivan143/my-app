import React, { Component } from "react";

class PointTable extends Component {
  state = {
    pointcopy:[],
  };

  sort = (column) => {
    const { pointtable } = this.props;
    let pointtable1 = [...pointtable];

    pointtable1.sort((a, b) => {
      if (column === 0) {
        return a.team.localeCompare(b.team);
      } else if (column === 1) {
        return b.played - a.played;
      } else if (column === 2) {
        return b.won - a.won;
      } else if (column === 3) {
        return b.lost - a.lost;
      } else if (column === 4) {
        return b.drawn - a.drawn;
      } else if (column === 5) {
        return b.goalsfor - a.goalsfor;
      } else if (column === 6) {
        return b.goalsagainst - a.goalsagainst;
      } else if (column === 7) {
        const pointsA = a.won * 3 + a.drawn * 1+a.lost*0;
        const pointsB = b.won * 3 + b.drawn * 1+b.lost*0;

        return pointsB - pointsA;
      }

      return 0;
    });

    this.setState({
      pointcopy: pointtable1,
    });
  };

  render() {
    const { pointtable } = this.props;
    const {pointcopy}=this.state;
    let pointss=pointcopy.length !==0?pointcopy:pointtable
    


    return (
      <div className="container">
        <div className="row bg-dark text-light border">
          <div className="col-2 border" onClick={()=> this.sort(0)}>Team</div>
          <div className="col-1 border" onClick={()=> this.sort(1)}>Played</div>
          <div className="col-1 border" onClick={()=> this.sort(2)}>Won</div>
          <div className="col-1 border" onClick={()=> this.sort(3)}>Lost</div>
          <div className="col-1 border" onClick={()=> this.sort(4)}>Drawn</div>
          <div className="col-2 border" onClick={()=> this.sort(5)}>Goals For</div>
          <div className="col-2 border" onClick={()=> this.sort(6)}>Goals Against</div>
          <div className="col-2 border" onClick={()=> this.sort(7)}>Points</div>
        </div>
        {pointss.map((team) => {
          const points = team.won * 3 + team.drawn * 1+team.lost*0;
          return (
            <div className="row border" key={team.team}>
              <div className="col-2 border">{team.team}</div>
              <div className="col-1 border">{team.played}</div>
              <div className="col-1 border">{team.won}</div>
              <div className="col-1 border">{team.lost}</div>
              <div className="col-1 border">{team.drawn}</div>
              <div className="col-2 border">{team.goalsfor}</div>
              <div className="col-2 border">{team.goalsagainst}</div>
              <div className="col-2 border">{points}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PointTable;
