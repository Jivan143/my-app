import React,{Component} from "react";
import http from "./httpService";

class AddPerson extends Component{

    state={
        person:{name:"",age:"",city:"",company:""},
        cities:["London","Paris","New Delhi","Bangalore"],
        companies:["Apple","Google","Facebook","Microsoft","Tesla"],
        edit:false,
    };
    
    async componentDidMount(){
        this.fetchdata();
    }
    async componentDidUpdate( prevProps,prevState){
        if(prevProps!==this.props) this.fetchdata();
    }
    async fetchdata(){
        const{id}=this.props.match.params;
        if(id){
            let response=await http.get(`/persons/${id}`);
            let {data}=response;
            this.setState({person:data,edit:true });
        }
        else {
            let  person={name:"",age:"",city:"",company:""};
            this.setState({
                person:person, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.person[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {person,edit}=this.state;
        edit? this.putData(`/persons/${person.id}`,this.state.person):
        this.postData("/persons",this.state.person);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/persons");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/persons");
    }
    render (){
        const {name,age,city,company}=this.state.person;
        const {cities,companies}=this.state;

        return( <div className="container">
             <div className="form-group">
                <label>Person Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter  Name"
                value={name} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label> Age</label>
                <input type="number" className="form-control" id="age" name="age" placeholder="Enter  age"
                value={age} onChange={this.handleChange}    />
            </div>


            <div className="form-group">
                <label> City</label>
                <select  id="city" name="city" className="form-control" value={city} onChange={this.handleChange}>
                    <option id="">Select City</option>
                    {cities.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            
            <div className="form-group">
                <label> Company</label>
                <select  id="company" name="company" className="form-control" value={company} onChange={this.handleChange}>
                    <option id="">Select Company</option>
                    {companies.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
     
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AddPerson;