import React, { Component } from "react";
class Task7 extends Component{
    state ={
        employees : [{name:"Jack Smith", level:2, dept:"Tech", designation:"Manager", salary:24000},
        {name:"Mary Robbins", level:3, dept:"Fin", designation:"Manager", salary:28000},
        {name:"Steve Williams", level:4, dept:"Ops", designation:"President", salary:35000},
        {name:"Bob Andrews", level:1, dept:"Fin", designation:"Trainee", salary:16500},
        {name:"Dave Martin", level:2, dept:"Fin", designation:"Manager", salary:21700},
        {name:"Julia Clarke", level:3, dept:"Ops", designation:"Manager", salary:26900},
        {name:"Kathy Jones", level:4, dept:"Tech", designation:"President", salary:42500},
        {name:"Tom Bresnan", level:2, dept:"Tech", designation:"Manager", salary:22200}]
    }
    show = () => {
        let { employees } = this.state;
        const sortedname =[...employees];
        sortedname.sort((p1, p2) => p1.name.localeCompare(p2.name));
        const sortedsalary = [...employees];
        sortedsalary.sort((p1, p2) => p1.salary - p2.salary);
        const sortedlavel=[...employees];
        sortedlavel.sort((p1, p2) => p1.level - p2.level);


        
        return (
            <div>
          <div className="row border bg-dark text-white">
            <div className="col-3">Name</div>
            <div className="col-2">Level</div>
            <div className="col-2">Dept</div>
            <div className="col-3">Designation</div>
            <div className="col-2">Salary</div>
          </div>
          {sortedlavel.map((ele) => {
            let { name, level, dept, designation, salary } = ele;
            return (
              <div className="row border">
                <div className="col-3">{name}</div>
                <div className="col-2 border">{level}</div>
                <div className="col-2">{dept}</div>
                <div className="col-3">{designation}</div>
                <div className="col-2">{salary}</div>
              </div>
            
            );
            
          })}
          </div>

        );
      };
    render() {
        return (
          <div className="container pl-2 ">
            <h3>Table View</h3>
            {this.show()}
          </div>
        );
      }
      
}
export default Task7;
