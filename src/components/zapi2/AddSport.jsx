import React,{Component} from "react";
import http from "../httpService";

class AddSport extends Component{

    state={
        star:{country:"",name:"",sport:"",details:{dob:"",info:""},},
        countries:["India", "Australia", "Portugal", "Argentina", "Brazil", "France",],
        sports:["Cricket", "Footbal"],

    };
    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.star[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/sporticons/star",this.state.star)

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/stars");
    }
    render (){
        const {name,country,sport}=this.state.star;
        const {dob,info}=this.state
        const {countries,sports}=this.state;

        return( <div className="container">
             <div className="row m-2">
                <div className="col-3  text-center "> Name</div>
                <div className="col-9">

                <input type="text" className="form-control" id="name" name="name" placeholder="Enter  Name"
                value={name} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Info</div>
            <div className="col-9">

                <input type="text" className="form-control" id="info" name="info" placeholder="Enter  Info"
                value={info} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> DOB</div>
            <div className="col-9">

                <input type="date" className="form-control" id="dob" name="dob" placeholder="Enter  dob"
                value={dob} onChange={this.handleChange}    />
            </div>
            </div>




            <div className="row m-2">
            <div className="col-3  text-center"> Country</div>
            <div className="col-9">

                <select  id="city" name="country" className="form-control bg-light" value={country} onChange={this.handleChange}>
                    <option id="">Select country</option>
                    {countries.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
                </div>

            </div>
            
            <div className="row m-2">
            <div className="col-3 text-center"> Sports</div>
            <div className="col-9">
                <select  id="sport" name="sport" className="form-control bg-light" value={sport} onChange={this.handleChange}>
                    <option id="">Select Sport</option>
                    {sports.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
                </div>
            </div>
           <div className="col text-center">
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Create</button>
            </div>
            </div>
            )
    }
}
export default AddSport;