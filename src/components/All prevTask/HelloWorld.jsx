import React,{Component} from "react";
class Helloworld extends Component{
    state={
        players:[
            {name:'Willians',answered:10,correct:8},
            {name:'George',answered:8,correct:7},
            {name:'Katherine',answered:12,correct:9},
            {name:'Sophia',answered:11,correct:10},
            {name:'Timothy',answered:9,correct:6},
            {name:'Timothy',answered:13,correct:8}
        ],
        correctScore:2,
        incorrectScore:-1,
    };
    sortplayer=(p1,p2)=>{
        const {correctScore,incorrectScore}=this.state;
        let x1=p1.correct*correctScore+(p1.answered-p1.correct)*p1.incorrectScore;
        let x2=p2.correct*correctScore+(p2.answered-p2.correct)*p2.incorrectScore;
    return x2-x1;
    }
    totalQns= () =>{
        const { players }=this.state;
       return players.reduce((acc,curr) => acc + curr.answered,0);
    };
    totalCorrect= () =>{
        const { players }=this.state;
       return players.reduce((acc,curr)=> acc+curr.correct,0);
    };
    
    render(){
        let {players,correctScore,incorrectScore}=this.state;
        const players1=players;
        players1.sort(this.sortplayer);
        let tottalQnsAsked=this.totalQns();
        let totalCorrectAns=this.totalCorrect();
        return (
            <div className="container">
            <div className="row ">
        {players.map((st)=>{
            let {name,answered,correct}=st;
            return (
            <div className="col-3 border">
            Name:{name}<br/>
            Answered:{answered}<br/>
            Correct:{correct}<br/>
            Score:  {correct*correctScore+(answered-correct)*incorrectScore}
            </div>
            );
          })}
        </div>
          <div className="row bg-light">
            <div className="col-6 border">
                <h4>Leaderboard</h4>
                1. {players1[0].name}<br/>
                2. {players1[1].name}<br/>
                3. {players1[2].name}<br/>

            </div>
            <div className="col-6 border">
                <h4>Stastistics</h4>
                Total Questions : {tottalQnsAsked} <br/>
                Correct Ansers : {totalCorrectAns}<br/>
                Incorrect Answers :{tottalQnsAsked-totalCorrectAns} <br/>

            </div>
          </div>
                </div>
      
        );
            
    }
}
export default Helloworld;