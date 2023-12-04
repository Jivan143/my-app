import React, {Component} from "react";
class A17task1 extends Component{

state= {

    person: this.props.person,
    errors:{},
countries:[
        "United States of America",
        "Canada",
        "India",
        "United Kingdom",
        "react",],
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
    if (this.isValid(errors))
     this.props.onSubmit (this.state.person);
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
    let {name ,age,country}=this.state.person;
    let errors={};
    errors.name=this.vallidateName(name);
    errors.age=this.vallidateAge(age);
    errors.country=this.vallidateCountry(country);

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
    case "country":s1.errors.country=this.vallidateCountry(input.value);
    break;
    default:
        break;
}
this.setState(s1);
}
    
vallidateName =(name)=>
    !name?"Name must be entered": name.length <5? "Name should have minimum 5 characters":"";

vallidateAge =(age)=>
    !age?"Age must be entered": age<21 || age>75? "Age should be between 21 and 75 ":"";

 vallidateCountry =(country)=>
    !country?"Country must be Selected":"";

    render() {
        let { name, age, country}= this.state.person;
        let { countries,errors } = this.state;
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
    <label>Country</label>
    <select className="form-control"
    
    name="country" value={country} onChange={this.handleChange} onBlur={this.handleValidate}
    >
    <option  value=""> Select the Country</option>
    {countries.map((c1) => (
        <option>{c1}</option>
    ))}
    </select>
    {errors.country ? ( <span className="text-danger">{errors.country}</span>):("")}

    </div>
    <button className="btn btn-primary btn-sm" onClick={this.handleSubmit} disabled={!this.isFormValid()}  >Submit</button>
    </div>
    );
    }
}
export default A17task1;