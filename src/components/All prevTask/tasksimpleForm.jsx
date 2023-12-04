import React, { Component } from "react";
class TaskSimpleForm extends Component{

        state = { person: this.props.person,
        countries: ["United States of America","Canada","India","United Kingdom",],
        countryList:[
            {country:"United States of America",cities:["New York","Los Angeles","Seattle","San Francisco"],},
            {country:"Canada",cities:["Toronto","Montreal","Vancouver"],},
            {country:"India",cities:["New Delhi","Bengaluru","Pune","Chennai"],},
            {country:"United Kingdom",cities:["London","Bristol","Manchester"],},
        ],
        designations: [ "Developer","Senior Developer","Team Lead","Architect","Delivery Manager",],
        techs:["React","Javascript","JQuery","AngularJS"],
        workexps:["Fresher","0-1 years","1-3 years","3-5 years","5+ years"],
        managers: ["Meg Smith","Bill Watson","Tim Gates","George Cook","Larry Gomes"],
        Servers :["Development","Deployment","Alpha Test","Beta Test","BackUp"],
       
    };

    handleChange = (e) => {
            const { currentTarget: input } = e
            let s1 = {...this.state };
            input.type==="checkbox"
            ? input.name ==="techsKnown"
            ? (s1.person.techsKnown= this.updateCBs(input.checked,input.value,s1.person.techsKnown))
            : input.name ==="server"
            ? (s1.person.server= this.updateCBs(input.checked,input.value,s1.person.server))
            :(s1.person[input.name]=input.checked)
             :(s1.person[input.name]=input.value);
            if (input.name=="country") s1.person.city="";
            if(!s1.person.passport) s1.person.passportNumber="";
            this.setState(s1);
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
            let{ name, age,country,gender,passport,license,city,passportNumber,
                designation,techsKnown=[],experience,manager,server} = this.state.person;
            const {countries,countryList,designations,techs,workexps,managers,Servers}=this.state;
            const cities = country ? countryList.find((p1) => p1.country === country).cities : [];

        return (

        <div className="container">
            <h5>Enter New Details</h5>

        <div className="form-group">
            <label>Name</label>
        <input type="text" className="form-control"id="name"name="name" placeholder="Enter Name"value={name} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
        <label>Age</label>
        <input type="number" value={age}className="form-control"id="age"name="age"placeholder="Enter Age"onChange={this.handleChange}/>
        </div>

        <div className="form-group">
        <label>Country</label>
        <select className="form-control" name="country" value={country} onChange={this.handleChange}>

        <option disabled value="">Select the Country </option>
        {countries.map(c1 =>(<option>{c1}</option>))}
        </select>
        </div>
        {country ?(<div className="form-group">
        <label>City</label>
        <select className="form-control" name="city" value={city} onChange={this.handleChange}>

        <option disabled value="">Select the City </option>
        {cities.map(c1 =>(<option>{c1}</option>))}
        </select>
        </div> ) :("")}

        <div className="form-check form-check-inline">
        <input type="radio" value="Male"className="form-check-input"name="gender" checked={gender=="Male"} onChange={this.handleChange}/>
        <label className="form-check-label" >Male</label>
        </div>

        <div className="form-check form-check-inline">
        <input type="radio" value="Female"className="form-check-input" name="gender"  checked={gender=="Female"} onChange={this.handleChange}/>
        <label className="form-check-label" >Female</label>
        </div>

        <div className="form-check">
        <input type="checkbox" className="form-check-input" name="passport" value={passport}  checked={passport} onChange={this.handleChange}/>
        <label className="form-check-label" >passport</label>
        </div>
        {passport ?( <div className="form-group">
            <label>Passport Number</label>
        <input type="text" className="form-control" id="passportNumber"name="passportNumber" placeholder="Enter  Passport Number"value={passportNumber} onChange={this.handleChange}/>
        </div>):("") }

        <div className="form-check">
        <input type="checkbox" className="form-check-input" name="license" value={license}  checked={license} onChange={this.handleChange}/>
        <label className="form-check-label" >License</label>
        </div>

        <label className="form-check-label font-weight-bold h6 ">Choose the Designation  </label>
        {designations.map((p1)=>(
         <div className="form-check form-check-inline">
         <input type="radio" value={p1} className="form-check-input" name="designation"  checked={designation==p1} onChange={this.handleChange}/>
         <label className="form-check-label" >{p1}</label>
         </div>
        
        ))}
        <label className="form-check-label font-weight-bold h6 ">Choose the Technologies  </label>
        {techs.map((p1)=>( <div className="form-check">
        <input type="checkbox" className="form-check-input" name="techsKnown" value={p1}  checked={techsKnown.findIndex((tech)=>tech ==p1)>=0  } 
        onChange={this.handleChange}/>
        <label className="form-check-label" >{p1}</label>
        </div>)
        )}


        <label className="form-check-label font-weight-bold h6 ">Work Experience  </label>
        <select className="form-select" name="experience"
        value={this.state.selectedExperience} onChange={this.handleChange}>
        <option value="">Select Work Experience</option>
        {workexps.map((p1) => (<option key={p1} value={p1}>
        {p1}</option>
         ))}
      </select>
         
      <label className="form-check-label font-weight-bold h6 ">Choose the Name of Manager  </label>
        {managers.map((p1)=>(
         <div className="form-check form-check-inline">
         <input type="radio" value={p1} className="form-check-input" name="manager"  checked={manager==p1} onChange={this.handleChange}/>
         <label className="form-check-label" >{p1}</label>
         </div>
        
        ))}
        <label className="form-check-label font-weight-bold h6">Choose the Servers</label>
       {Servers.map((p1) => (
        <div className="form-check">
        <input type="checkbox" className="form-check-input" name="server" value={p1}
        checked={server ? server.findIndex((s2) => s2 === p1) >= 0 : false}
        onChange={this.handleChange}
        />
       <label className="form-check-label">{p1}</label>
  </div>
))}

        <div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
        </div>
        );
        }
        }
        export default TaskSimpleForm;
