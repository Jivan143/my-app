import React, {Component} from "react";
import AllMatches from "./Allmatches";
import PointTable from "./pointtable";
import NewMatch from "./newmatch";




class MainPage extends Component{
    state={

        teams:['Argentina','Brazil','France','England','Germany'],
        count1:0,
        count2:0,

        view:0,
         matches: [],
          pointtable:[
            {team:"France",played:0,won:0,lost:0,drawn:0,goalsfor:0,goalsagainst:0},
            {team:"England",played:0,won:0,lost:0,drawn:0,goalsfor:0,goalsagainst:0},
            {team:"Brazil",played:0,won:0,lost:0,drawn:0,goalsfor:0,goalsagainst:0},
            {team:"Germany",played:0,won:0,lost:0,drawn:0,goalsfor:0,goalsagainst:0},
            {team:"Argentina",played:0,won:0,lost:0,drawn:0,goalsfor:0,goalsagainst:0},
        ],
        isMatchStarted:false,

    }

    Showallmathces=()=>{
        let s1={...this.state};
        s1.view=1;
        this.setState(s1);

    }
    ShowPointTable=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1);


    }
    NewMatch=()=>{
        let s1={...this.state};
        s1.view=-1;
        this.setState(s1);
    }
    addNewMatch = (newMatch) => {
        this.setState((ele) => ({
          matches: [...ele.matches, newMatch],
        }));
      }
      addpointtable = (newMatch) => {
        let s1={...this.state};
        
        let index=s1.pointtable.findIndex((ele) => ele.team === newMatch.team);
        s1.pointtable[index].drawn +=newMatch.drawn;
        s1.pointtable[index].played +=1;
        s1.pointtable[index].won +=newMatch.won;
        s1.pointtable[index].lost +=newMatch.lost;
        s1.pointtable[index].goalsfor +=newMatch.goalsfor;
        s1.pointtable[index].goalsagainst +=newMatch.goalsagainst;
        this.setState((ele) => ({
            pointtable: [...ele.pointtable],
          }));
      }

      handleMatchStart =()=>{
        let s1={...this.state};
        s1.isMatchStarted=true;
        this.setState(s1);
      }  
      handleMatchover =()=>{
        let s1={...this.state};
        s1.view=0;
        s1.isMatchStarted=false;
        this.setState(s1);
      }  

    render() {
         const {teams,view,matches,pointtable,count1,count2,isMatchStarted}=this.state;

         return (
            <div className="container p-2">
              <nav className="Navbar bg-dark text-light">
                <div className="row p-2">
                  <div className="col-5">Football Tournament</div>
                  <div className="col">Number of matches <label className="text-primary">{matches.length}</label></div>
                </div>
              </nav>
        
              {isMatchStarted ? null : (
                <div className="row p-2">
                  <div className="col">
                    <button className="btn btn-primary" onClick={this.Showallmathces}>All Matches</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary" onClick={this.ShowPointTable}>Points Table</button>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary" onClick={this.NewMatch}>New Match</button>
                  </div>
                </div>
              )}
        
              {view === 1 && !isMatchStarted ? (
                <AllMatches
                  matches={matches}
                />
              ) : null}
        
              {view === 2 && !isMatchStarted ? (
                <PointTable
                  pointtable={pointtable}
                />
              ) : null}
        
              {view === -1? (
                <NewMatch
                  teams={teams}
                  count1={count1}
                  count2={count2}
                  addNewMatch={this.addNewMatch}
                  addpointtable={this.addpointtable}
                  isMatchStarted={this.handleMatchStart}
                  isMatchOver={this.handleMatchover}

                />
              ) : null}
            </div>
          );
        }
}
export default MainPage;