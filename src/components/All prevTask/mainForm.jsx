import React, { Component} from "react";
import A17task3 from "./A17task3";
class MainForm extends Component{
    state={
        persons:[{name: "Williams",age: 27,gender:"Male",country:"India",passport:true,license:"",city:"Indore",email:"jivan@gmail.com",address:"mahalaxmi nagar indore",
        passportNumber:"FGROT5423", designation:"", techsKnown: [],experience:"",manager:"",server:[], description:"I am jack from usa",productcode:"AA9932",catagory:"Food",price:"23",discount:"5%",
    },
    {name: "Anna Jack",age: 31,gender:"Female",country:"Canada",passport:false,license:"",city:"Delhi",email:"jack@gmail.com",address:"New Delhi pashcim vihar",
    passportNumber:"", designation:"", techsKnown: [], description:"ab this shop",productcode:"AB3412",catagory:"Apparels",price:"24",discount:"20%",},
   
    ],
    view :0,
    editpersonindex:-1,
    isEditMode: false,
    }
    handlePerson =(person)=>{
        console.log("Handle Person",person);
        let s1={...this.state};
        s1.editpersonindex >=0 ? (s1.persons[s1.editpersonindex] = person)
        :s1.persons.push(person);
        s1.view=0;
        this.setState(s1);

    };
    showForm =()=>{
        let s1={...this.state};
        s1.editpersonindex = -1;
        s1.isEditMode=false;
        s1.view=1;
        this.setState(s1);
    }
    editPerson=(index)=>{
        let s1={...this.state};
        s1.view=1;
        s1.editpersonindex=index;
        s1.isEditMode=true;
        this.setState(s1);
    };
    deletePerson=(index)=>{
        let s1={...this.state};
        s1.persons=s1.persons.filter((_, i) => i !== index);
        this.setState(s1);

    }
    render() {
        let person ={name: "", age: ""};
        let {persons,view,editpersonindex,isEditMode}=this.state;
        
        return view===0 ?(
            <div className="container text-center">
                <nav className="navbar bg-dark text-light">Number of Products: {persons.length}</nav>

                <div className="row border bg-info">
                <div className="col-2 border">Name</div>
                <div className="col-2 border">Description</div>
                <div className="col-2 border">Product Code</div>
                <div className="col-2 border">Catagory</div>
                <div className="col-1 border">Price</div>
                <div className="col-1 border">Dis.</div>
                <div className="col-2 border"></div>

                </div>
                {persons.map((p1, index) => (
                <div className="row border" key={index}>
                <div className="col-2">{p1.name}</div>
                <div className="col-2 border">{p1.description}</div>
                <div className="col-2 border">{p1.productcode}</div>
                <div className="col-2 border">{p1.catagory}</div>
                <div className="col-1 border">{p1.price}</div>
                <div className="col-1 border">{p1.discount}</div>
                <div className="col-2"><button className="btn btn-success btn-sm" onClick={()=>this.editPerson(index)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={()=>this.deletePerson(index)}>Delete</button></div>
                </div>
                ))}

                <button className=" btn btn-primary" onClick={()=>this.showForm()}>Add New Person</button>
            </div>
        ):(
         <A17task3 person={editpersonindex>=0? persons[editpersonindex]:person} 
         onSubmit={this.handlePerson}
         edit={editpersonindex >=0 && isEditMode}
        
         /> 

        );
    }
    
}
export default MainForm;