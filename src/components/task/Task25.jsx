import React,{Component} from "react";
class Task25 extends Component{
  state ={
    calcValue:0,
    calcValue1:1,
    expression :"",
    selectedOpt: null,

  }
add=(str)=>{
    let s1={...this.state};
    s1.calcValue+=str;
    s1.expression +=(s1.expression=='')?str:'+'+str;
    this.setState(s1);

}

multiply = (str) => {
    let s1 = { ...this.state };
     s1.calcValue==0 ?s1.calcValue +=str:s1.calcValue *= str;
    s1.expression += s1.expression === "" ? str : "*" + str;
    this.setState(s1);
  };

  addmulti =(opt)=>{
    let s1={...this.state};
    s1.selectedOpt=opt;
    s1.expression='';
    s1.calcValue=opt=='+'?0:1
    this.setState(s1);
  }
render(){
    let {selectedOpt,calcValue,expression}=this.state;
    const numOptions=[1,3,5,7]
    return(
        <React.Fragment>
            <div className="col">
            Operator: <button className="btn btn-primary  sm-2" onClick={() =>this.addmulti('+')}>Add</button>
             <button className="btn btn-primary m-2" onClick={() =>this.addmulti('*')}>Multiply</button>
            </div>
            {numOptions.map((option) => (
                <button
  className="btn btn-primary m-2"
  onClick={() => {
    if (selectedOpt === "+") {
      this.add(option);
    } else if (selectedOpt === "*") {
      this.multiply(option);
    }
  }}
>
  {option}
</button>
         ))}
             < br />
            <strong>Operation = {selectedOpt} </strong>
            < br />
            <strong>Expression = {expression} </strong>
            < br />
            <strong>Calculated Value = {calcValue} </strong>



    </React.Fragment>
    );
}
}
export default Task25;
