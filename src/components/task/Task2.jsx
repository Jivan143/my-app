import React,{Component} from "react";
class Task2 extends Component{
    state={}
    showoutput=()=> {
        return <React.Fragment>
          <div className="text-success">
          <strong>Name : James Smith</strong>  
          </div>
          <div className="text-primary">
            Age :  27<br />
            Email : james@myemail.com
          </div>
        </React.Fragment> ;
      }
      render() {
        return <div>{this.showoutput()}</div>

      }
}
export default Task2;
