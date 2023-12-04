import React, {Component} from "react";
class A17task2 extends Component{

state= {

    person: this.props.person,
    errors:{},

};

handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = {...this.state };
    s1.person [input.name] = input.value;
    this.handleValidate(e);
    this.setState(s1);

    };
handleSubmit = (e) => {
    e.preventDefault();
    let errors= this.validateAll();
    if (this.isValid(errors)){
     this.props.onSubmit (this.state.person);
    alert("Successfully Submited");
    }
    else {
        let s1 = {...this.state };
        s1.errors=errors;
        this.setState(s1);
    }
    };
isFormValid=()=>{
    let errors=this.validateAll();
    return this.isValid(errors);
}


isValid =(errors)=>{
    let keys= Object.keys(errors);
    let count=keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
    return count===0;
    };
validateAll= ()=>{
    let {name ,age,city,email,address}=this.state.person;
    let errors={};
    errors.name=this.vallidateName(name);
    errors.age=this.vallidateAge(age);
    errors.city=this.vallidateCity(city);
    errors.email=this.vallidateEmail(email);
    errors.address=this.vallidateAddress(address);

    return errors;
}

handleValidate=(e)=>{
    let {currentTarget:input}=e;
    let s1={ ...this.state};
switch(input.name){
    case "name":s1.errors.name=this.vallidateName(input.value);
    break;
    case "age":s1.errors.age=this.vallidateAge(input.value);
    break;
    case "city":s1.errors.city=this.vallidateCity(input.value);
    break;
    case "email":s1.errors.email=this.vallidateEmail(input.value);
    break;
    case "address":s1.errors.address=this.vallidateAddress(input.value);
    break;
    default:
        break;
}
this.setState(s1);
}
    
vallidateName =(name)=>
    !name?"Name must be entered": name.length <5? "Name should have minimum 5 characters":"";

vallidateAge =(age)=>
    !age?"Age must be entered": age<21 || age>75? "Age should be greater then 20  ":"";

vallidateCity =(city)=>
    !city?"City must be entered":city.length <3 ?"City should have minimum 3 character":"";

vallidateEmail =(email)=>
      !email ? "Email must be entered" : !email.includes("@") ? "Enter an Correct email address" : "";
   
vallidateAddress=(address)=>
    !address?"Address must be entered":"";

    
    render() {
        let { name, age, city,address,email}= this.state.person;
        let { errors } = this.state;
    return (
    <div className="container">
         <h5>Enter New Details</h5>
    <div className="form-group"> 
    <label>Name</label>
    
    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"
    value={name} onChange={this.handleChange} onBlur={this.handleValidate}
    />
    {errors.name ? ( <span className="text-danger">{errors.name}</span>):("")}
    </div>
    <div className="form-group">
    <label>Age</label>
    
    <input type="number" value={age}
    className="form-control" id="age" name="age"placeholder="Enter Age"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.age ? ( <span className="text-danger">{errors.age}</span>):("")}

    </div> 
    <div className="form-group">
    <label>Email </label>
    
    <input type="text" value={email}
    className="form-control" id="email" name="email"placeholder="Enter Email"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.email ? ( <span className="text-danger">{errors.email}</span>):("")}

    </div> 

    <div className="form-group">
    <label>City</label>
    
    <input type="text" value={city}
    className="form-control" id="city" name="city"placeholder="Enter City"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.city ? ( <span className="text-danger">{errors.city}</span>):("")}

    </div>  
    <div className="form-group">
    <label>Address</label>
    
    <input type="text" value={address}
    className="form-control" id="address" name="address"placeholder="Enter Address"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.address ? ( <span className="text-danger">{errors.address}</span>):("")}

    </div>    
    <button className="btn btn-primary" onClick={this.handleSubmit} disabled={!this.isFormValid()}  >Submit</button>
    </div>
    );
    }
}
export default A17task2;