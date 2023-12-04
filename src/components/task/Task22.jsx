import React,{Component} from "react";
class Task22 extends Component{
  state ={
    n1:'',
    txt :"Text = ",
  }
add=(str)=>{
    let s1={...this.state};
    s1.n1+=str;
    this.setState(s1);

}
Backspace=()=>{
    let s1={...this.state};
    s1.n1=s1.n1.slice(0,-1);
    this.setState(s1);
};
Clear =()=>{
    let s1={...this.state};
    s1.n1='';
    this.setState(s1);

};

render(){
    let {n1,txt}=this.state;
    return(
        <React.Fragment>
            
            <button className="btn btn-primary m-2" onClick={() =>this.add('A')}>A</button>
            <button className="btn btn-primary m-2" onClick={() =>this.add('B')}>B</button>
            <button className="btn btn-primary m-2" onClick={() =>this.add('C')}>C</button>
            <button className="btn btn-primary m-2" onClick={() =>this.add('D')}>D</button>
            < br />
            <strong>{txt} {n1}</strong>
            < br />
            <button className="btn btn-primary m-2" onClick={() =>this.Backspace()}>BackSpace</button>
            <button className="btn btn-primary m-2" onClick={() =>this.Clear()}>Clear</button>


    </React.Fragment>
    );
}
}
export default Task22;
