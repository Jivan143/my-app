import React, { Component} from "react";
import CustomerSimpleForm from "./CustomerSimpleForm";
class CustomerComp extends Component{
    state={
        persons:[],
    view :1,
    editpersonindex:-1,
    }
    handlePerson =(person)=>{
        console.log("Handle Person",person);
        let s1={...this.state};
        s1.editpersonindex >=0 ? (s1.persons[s1.editpersonindex] = person)
        :s1.persons.push(person);
        s1.view=0;
        this.setState(s1);

    };
    showtable =()=>{
        let s1={...this.state};
        s1.view=0;
        this.setState(s1);
    }
    showForm =()=>{
        let s1={...this.state};
        s1.view=-1;
        this.setState(s1);
    }
    editPerson=(index)=>{
        let s1={...this.state};
        s1.view=-1;
        s1.editpersonindex=index;
        this.setState(s1);
    };
    render() {
        let person ={name: "", age: ""};
        let {persons,view,editpersonindex}=this.state;
        
        
        return(  
        <div className="container">
        <div className="col m-2 p-2 ">
        <button className=" btn btn-primary m-2" onClick={()=>this.showForm()}> New Customer</button>
        <button className=" btn btn-primary m-2" onClick={()=>this.showtable()}>List of Customers</button>
        </div>
        {view===0 && persons.length>0 ?(
            <div className="container text-center">
                <div className="row border bg-info">
                <div className="col-2 border">Name</div>
                <div className="col-2 border">Gender</div>
                <div className="col-2 border">Delivery</div>
                <div className="col-2 border">Payments</div>
                <div className="col-2 border">Slot</div>
                <div className="col-2 border"></div>

                </div>
                {persons.map((p1, index) => (
                <div className="row border" key={index}>
                <div className="col-2">{p1.name}</div>
                <div className="col-2 border">{p1.gender}</div>
                <div className="col-2 border">{p1.delivery}</div>
                <div className="col-2 border">{p1.payment.join(',')}</div>
                <div className="col-2 border">{p1.slot}</div>
                <div className="col-2"><button className="btn btn-success" onClick={()=>this.editPerson(index)}>Edit</button></div>
                </div>
                ))}

            </div>
        ):
        view==-1 ?(
         <CustomerSimpleForm person={editpersonindex>=0? persons[editpersonindex]:person} 
         onSubmit={this.handlePerson}
         edit={editpersonindex >=0}
         /> 

        ):(
            view === 0 ? <h3>There are Zero customers</h3> : <h3>Welcome to the Customer System</h3>
          )}
        </div>

        )
    }
    
}
export default CustomerComp;