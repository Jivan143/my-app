import React, { Component, useEffect } from "react";
class Visitor extends Component{

    getbutton=(status,onEnter,onExit,onExitQue,id)=>
        status ==="Outside" ?(<button className="btn btn-success btn-sm " onClick={()=> onEnter(id)}>Enter</button>)
        : status ==="Inside" ?(<button className="btn btn-warning btn-sm" onClick={() => onExit(id)}>Exit</button>)
        :(<button className="btn btn-warning btn-sm" onClick={() => onExitQue(id)}>ExitQueue</button>);

    getrowcolor =(status)=>
        status === "Outside" ? "bg-dark text-white" : status === "Inside" ? "bg-secondary text-white" : "bg-light";
    
    render(){
        const {visitor,onEnter,onExit,onExitQue}=this.props;
        const {id,name,status}=visitor;
        return ( <div className={"row border m-1  " +this.getrowcolor(status)}>
            <div className="col-3">{id}</div>
            <div className="col-3">{name}</div>
            <div className="col-3">{status}</div>
            <div className="col-3">{this.getbutton(status,onEnter,onExit,onExitQue,id)}</div>

        </div>
        );
    }
}
export default Visitor;