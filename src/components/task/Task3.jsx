import React,{Component} from "react";
class Task3 extends Component{
    state = {
        employee : {name: "Steve Martin",company: "Google",department: "Technology",designation: "Senior Developer"}
};

show = () => {
    const { employee } = this.state;
    return (
      <div>
        <p>Name: {employee.name}</p>
        <p>Company: {employee.company}</p>
        <p>Department: {employee.department}</p>
        <p>Designation: {employee.designation}</p>
      </div>
    );
  };
  render() {
    return <React.Fragment>{this.show()}</React.Fragment>;
  }
}
export default Task3;
