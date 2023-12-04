import React, { Component } from "react";
class Task5 extends Component {
    state = {
        Students: [{name: "Bill Johnson",english: 61,maths: 55,computer: 60},
        {name: "Mary Smith",english: 75,maths: 80,computer: 82},
        {name: "Rex Williams",english: 37,maths: 32,computer: 27}
    ]
    }
    totalmarks =(eng,mat,com)=>{
       return eng+mat+com
    }
    grade = (tot) => {
        if (tot >= 225) return 'A';
        else if (tot >= 180) return 'B';
        else if (tot >= 150) return 'C';
        else return 'D';
      };

    show = () =>{
        let { Students } = this.state;
        return Students.map((ele) => (
            <div className="col-4">
            Name:{ele.name}<br />
            Marks in English:{ele.english}<br />
            Marks in Maths: {ele.maths} <br />
            Martks in Computers: {ele.computer}<br />
            Total Marks: {this.totalmarks(ele.english,ele.maths,ele.computer)}<br />
            Grade: {this.grade(this.totalmarks(ele.english,ele.maths,ele.computer))}<br />
            </div>

        ));


    };
    render() {
        return (
            <div className="row">
              {this.show()}
            </div>
          );
      }
}
export default Task5;