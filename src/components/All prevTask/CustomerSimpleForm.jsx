import React, { Component } from "react";
class CustomerSimpleForm extends Component{

        state = { person: this.props.person,
    

        paymentoptions:["Credit Card","Debit Card","Net Banking"],
        deliveryoptions:["Home","Office","Pickup"],
        deliveryslot:["2PM-6PM","Before 10 AM"],
        genders:["Male","Female"],

       
    };
    handleChange = (e) => {
        const { currentTarget: input } = e;
        const { name, type, value, checked } = input;

        console.log("Name:", name);
  console.log("Type:", type);
  console.log("Value:", value);
  console.log("Checked:", checked);
      
        this.setState((prevState) => {
          const updatedPerson = { ...prevState.person };
      
          updatedPerson[name] =
          type === "checkbox" && name === "payment"
            ? checked
              ? [...(updatedPerson[name] || []), value]
              : (updatedPerson[name] || []).filter((item) => item !== value)
            : value;
        
          return { person: updatedPerson };
        });
      }; 
      

    handleSubmit = (e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.person)
            };
  updateCBs =(checked,value,arr=[])=>{
        if (checked) arr.push(value);
        else {
          let index =arr.findIndex(ele =>ele ===value);
          if (index >= 0) arr.splice(index,1);
}
 return arr;
  }
    render() {

            let{ name, gender,delivery,slot,payment,} = this.state.person;
            const {genders,deliveryoptions,deliveryslot,paymentoptions }=this.state;

        return (

        <div className="container">
            <h5>Enter New Details</h5>

        <div className="form-group">
            <label>Name</label>
        <input type="text" className="form-control"id="name"name="name" placeholder="Enter Name"value={name} onChange={this.handleChange}/>
        </div>

        {genders.map((p1)=>(
         <div className="form-check form-check-inline">
         <input type="radio" value={p1} className="form-check-input" name="gender"  checked={gender==p1} onChange={this.handleChange}/>
         <label className="form-check-label" >{p1}</label>
         </div>
        
        ))}
        <br />
        <label className="form-check-label font-weight-bold h6 ">Choose your Delivery Option  </label><br />
        {deliveryoptions.map((p1)=>(
         <div className="form-check form-check-inline">
         <input type="radio" value={p1} className="form-check-input" name="delivery"  checked={delivery==p1} onChange={this.handleChange}/>
         <label className="form-check-label" >{p1}</label>
         </div>
        
        ))}
        <br /><label className="form-check-label font-weight-bold h6 ">Choose your Payments Options  </label> <br />
        {paymentoptions.map((p1)=>( <div className="form-check">
        <input type="checkbox" className="form-check-input" name="payment" value={p1}    checked={payment && payment.findIndex((payment) => payment === p1) >= 0}

        onChange={this.handleChange}/>
        <label className="form-check-label" >{p1}</label>
        </div>)
        )}
        <select className="form-select" name="slot"
        value={slot} onChange={this.handleChange}>
        <option value="">Select the Delivery Slot</option>
        {deliveryslot.map((p1) => (<option key={p1} value={p1}>
        {p1}</option>
         ))}
      </select>

        
        <div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
        </div>
        );
        }
        }
        export default CustomerSimpleForm;
