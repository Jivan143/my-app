import React, { Component } from "react";
class Player extends Component{
    render(){
        const {player,onAdd}=this.props;
        const {id,name,score}=player;
        return (
            <div className="d-flex justify-content-center align-items-center">
            <div className="col-5 bg-light text-start border">
              <div className="text-primary">Name: {name}</div>
              <div className="text-primary">Score: {score}</div>
              <div className="btn btn-success btn-sm" onClick={() =>onAdd(id) }>1 Point</div>

            </div>
          </div>
        );
    }
}
export default Player;