import React, { Component } from "react";
class Js4 extends Component{
    state = {
 secA: [{ roll: 1, sec: "A", name: "Jack", maths: 67, eng: 71, comp: 61 },
        { roll: 2, sec: "A", name: "Mary", maths: 79, eng: 74, comp: 51 },
        { roll: 3, sec: "A", name: "Steve", maths: 61, eng: 78, comp: 46 },
        { roll: 4, sec: "A", name: "Bob", maths: 75, eng: 67, comp: 68 },
        { roll: 5, sec: "A", name: "Kathy", maths: 70, eng: 63, comp: 74 },
        { roll: 6, sec: "A", name: "Meg", maths: 46, eng: 61, comp: 63 },
        { roll: 7, sec: "A", name: "Tom", maths: 72, eng: 85, comp: 65 },
        { roll: 8, sec: "A", name: "David", maths: 85, eng: 71, comp: 85 }],

 secB: [{ roll: 1, sec: "B", name: "Arthur", maths: 67, eng: 55, comp: 78 },
        { roll: 2, sec: "B", name: "Kevin", maths: 69, eng: 64, comp: 68 },
        { roll: 3, sec: "B", name: "Harry", maths: 61, eng: 88, comp: 80 },
        { roll: 4, sec: "B", name: "Martin", maths: 65, eng: 60, comp: 48 },
        { roll: 5, sec: "B", name: "Pam", maths: 80, eng: 53, comp: 54 },
        { roll: 6, sec: "B", name: "Nicky", maths: 76, eng: 71, comp: 83 },
        { roll: 7, sec: "B", name: "Robert", maths: 82, eng: 65, comp: 75 },
        { roll: 8, sec: "B", name: "Susan", maths: 65, eng: 81, comp: 50 }],
 click:-1,
arr:[],
};
show=()=>{
    const {secA,secB,click}=this.state;
    let s1='';
    const combinedata= [...secA,...secB];
    let sorteddata=[];
     if(click==0){
        s1='Section A- Sorted by Total'
        sorteddata = [...secA].sort((a, b) =>
        a.maths + a.eng + a.comp > b.maths + b.eng + b.comp ? -1 : 1
        );
     }
     else if (click === 1) {
        s1='Section B- Sorted by Total'
        sorteddata = [...secB].sort((a, b) =>
          a.maths + a.eng + a.comp > b.maths + b.eng + b.comp ? -1 : 1
        );
      } else if (click === 2) {
        s1=' All Sections - Sorted by Total'
        sorteddata = [...combinedata].sort((a, b) =>
        a.maths + a.eng + a.comp > b.maths + b.eng + b.comp ? -1 : 1
        );
      }
       else if (click === 3 ) {
        s1='Section A - Sorted by Name'
        sorteddata = [...secA].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (click === 4) {
        s1='Section B - Sorted by Name'
        sorteddata = [...secB].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (click === 5) {
        s1='All Sections - Sorted by Name'
        sorteddata = [...combinedata].sort((a, b) =>
        a.name.localeCompare(b.name)
        );
      }
     


     if(sorteddata.length>0)
     
    return (
        <div className="container">
        <div className="h4 text-center">Performance Report for {s1}</div>
        <div className="row bg-dark text-white   ">
        <div className="col-1  ">RollNo</div>
        <div className="col-1 border">Section</div>
        <div className="col-2 ">Name</div>
        <div className="col-2 border">Maths</div>
        <div className="col-2 ">English</div>
        <div className="col-2 border">Computers</div>
        <div className="col-2 ">Total</div>
      </div>
      {sorteddata.map((ele,index)=>{
       let {name,roll,sec,maths,eng,comp}=ele;
        return(
            <div className="row border ">
            <div className="col-1 bg-light  ">{roll}</div>
            <div className="col-1 bg-light border">{sec}</div>
            <div className="col-2  ">{name}</div>
            <div className="col-2 border">{maths}</div>
            <div className="col-2 ">{eng}</div>
            <div className="col-2 border">{comp}</div>
            <div className="col-2 ">{maths+eng+comp }</div>

          </div>

        );
      })}
        </div>
    );



} 
render() {
    const { click } = this.state;

    return (  <React.Fragment>
        <div>
        <div className="col m-2 ">
        <button  className="btn btn-primary m-2" onClick={() => this.setState({ click: 0 })}>SecA by Total</button>
        <button  className="btn btn-primary m-2" onClick={() => this.setState({ click: 1 })}>SecB by Total</button>
        <button className="btn btn-primary m-2" onClick={() => this.setState({ click: 2 })}>All Sec by Total</button>
        <button  className="btn btn-primary m-2" onClick={() => this.setState({ click: 3 })}>SecA by Name</button>
        <button  className="btn btn-primary m-2" onClick={() => this.setState({ click: 4 })}>SecB by Name</button>
        <button  className="btn btn-primary m-2" onClick={() => this.setState({ click: 5 })}>All Sec  by Name</button>
        </div>
        {this.show()}

        </div>
    </React.Fragment>
    
    );
  }
}
export default Js4;
