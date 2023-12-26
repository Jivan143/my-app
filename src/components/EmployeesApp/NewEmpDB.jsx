import React,{Component} from "react";
import http from "./Httpserviceemp";

class NewEmpDB extends Component{

    state={
        employees:{ empCode:"",name:"",department:"",designation:"",salary:"",gender:""},
        departments:["Finance", "HR", "Technology", "Marketing"],
        designations:["VP","Manager","Trainee"],
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
            let response=await http.get(`/svr/employess/${id}`);
            let {data}=response;
            // console.log("ab",data[0]);
            this.setState({employees:data[0],edit:true });
        }
        else {
            let employees={ empCode:"",name:"",department:"",designation:"",salary:"",gender:""};
            this.setState({
                employees:employees, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.employees[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {employees,edit}=this.state;
        console.log("handeSubmit",employees,edit);
        edit? this.putData(`/svr/employess/${employees.empCode}`,employees):
        this.postData("/svr/employess",this.state.employees);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/employess");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/employess");
    }
    render (){
        let { empCode,name,department,designation,salary,gender}=this.state.employees;
        let {edit}=this.state
   let {employees}=this.state;
   console.log("edist", employees);
        const {designations,departments}=this.state;

        return( <div className="container">
              <div className="form-group">
                <label>Employee Id</label>
                <input type="number" className="form-control" id="empCode" name="empCode" placeholder="Enter  Id" disabled={edit}
                value={empCode} onChange={this.handleChange}    />
            </div>
             <div className="form-group">
                <label>Employee Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter  Name"
                value={name} onChange={this.handleChange}/>
            </div>
            
            <div className="form-group">
                <label>Employee Gender</label>
                <input type="text" className="form-control" id="gender" name="gender" placeholder="Enter  gender"
                value={gender} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label>Employee salary</label>
                <input type="number" className="form-control" id="salary" name="salary" placeholder="Enter  salary"
                value={salary} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label> Departments</label>
                <select  id="department" name="department" className="form-control" value={department} onChange={this.handleChange}>
                    <option id="">Select Department</option>
                    {departments.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
     
            <div className="form-group">
                <label>Designation</label>
                <select  id="designation" name="designation" className="form-control" value={designation} onChange={this.handleChange}>
                    <option id="">Select  Designation</option>
                    {designations.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default NewEmpDB;