import React,{Component} from "react";
import Visitor from "./visitor";
class VisitorSystem extends Component{
    state ={
        visitors:[
            {id: 101, name: "Jack", status: "Outside"},
            {id: 102, name: "Tim", status: "Outside"},
            {id: 235, name: "Mary", status: "Outside"},
            {id: 107, name: "Steve", status: "Outside"},
            {id: 96, name: "Anna", status: "Outside"},
            {id: 126, name: "Kathy", status: "Outside"},
            {id: 129, name: "Meg", status: "Outside"},
            {id: 108, name: "Bob", status: "Outside"},
        ],
        queue: [],
    };

    getInsideCount =()=>
        this.state.visitors.reduce(
            (acc,curr)=>acc + (curr.status === "Inside" ? 1:0),0
            );

    handleEnter= (id) =>{
        let s1={...this.state};
        let visitor=s1.visitors.find((v1)=>v1.id===id);
        let insidecount=this.getInsideCount();
        if(insidecount === 2){
            visitor.status="Waiting";
            s1.queue.push(visitor);
        }
        else   visitor.status="Inside";
        this.setState(s1);
    }
    handleExit= (id) =>{
        let s1={...this.state};
        let visitor=s1.visitors.find((v1)=>v1.id===id);
        visitor.status="Outside";
        if (s1.queue.length>0){
           let v2= s1.queue.shift();
           v2.status="Inside"
        }
        this.setState(s1);        
    };
    handleQueueExit = (id) => {
        let s1={...this.state};
        let visitor=s1.visitors.find((v1)=>v1.id===id);
        visitor.status="Outside";
        s1.queue = s1.queue.filter((v3) => v3.id !== id);
        this.setState(s1);        
        

    };
    
    render(){
        const {visitors,queue}=this.state;
        return ( <div className="container">
                <h4> Inside ={this.getInsideCount()} Queue ={queue.length} </h4>

            {visitors.map((v1)=>(
            <Visitor visitor={v1} 
             onEnter={this.handleEnter}
             onExit ={this.handleExit}
             onExitQue={this.handleQueueExit}
              />
            ))}
            <h4>Queue</h4>
            <ul>
            {queue.map(q1=>(<li>{q1.name}</li>))}
            </ul>
        </div>
        );
    }
}
export default VisitorSystem;