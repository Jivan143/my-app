import React,{Component} from "react";
import Player from "./player";
class PlayerSystem extends Component{
    state ={
        players:[
            {id: 101, name: "Jack", score:44},
            {id: 102, name: "Tim" ,score:29},
            {id: 235, name: "Mary" ,score:26},
            {id: 107, name: "Steve",score:11},
            {id: 96, name: "Anna",score:65},
            {id: 126, name: "Kathy",score:31},
            {id: 129, name: "Meg",score:41},
            {id: 108, name: "Bob",score:23},
        ],
    };
    handleAdd = (id) => {
        let s1 = { ...this.state };
      
        s1.players = s1.players.map((player) =>
          player.id === id ? { ...player, score: player.score + 1 } : player
        );
      
        this.setState(s1);
      };
      

    render(){
        const {players,}=this.state;
        return ( <div className="container text-center ">
                        <h4>List of Names</h4>

            {players.map((v1)=>(
            <Player player={v1} 
            onAdd={this.handleAdd}

            />
            ))}
        
        </div>
        );
    }
}
export default PlayerSystem;