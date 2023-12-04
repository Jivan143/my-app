import React, { Component } from "react";
import { Link } from "react-router-dom";
class Emp extends Component {
    render() {
        const { emps } = this.props;
        const { id } = this.props.match.params;
        const emp = emps.find((office) => office.id === id);

        return (
            <div className="container">
                <h4>Employee Details</h4>
                <h6>Employee id : {emp.id}</h6>
                <h6>Name: {emp.name}</h6>
                <h6>Department:<Link to={`/employee/${emp.dept}/1`}>{emp.dept}</Link></h6>
                <h6>Designation: {emp.designation}</h6>
                    </div>
                
            
        );
    }
}

export default Emp;
