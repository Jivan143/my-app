import React,{Component} from "react";
import http from "../httpService";

class AddStudentstApp extends Component{

    state={
        student:{name:"",course:"",grade:"",city:""},
        courses: ["JS", "React", "Node","Angular"],
        grades: ["A", "B", "C","D"],
        cities:["London","Paris","Mumbai","Tokyo"],
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
            let response=await http.get(`/svr/students/${id}`);
            let {data}=response;
            this.setState({student:data,edit:true });
        }
        else {
            let  student={name:"",course:"",grade:"",city:""};
            this.setState({
                student:student, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.student[input.name]=input.value;
        this.setState(s1);
    }
    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //     let {student,edit}=this.state;
    //     edit? this.putData(`/students/${student.id}`,this.state.student):
    //     this.postData("/students",this.state.student);

    // };
    handleSubmit = async (e) => {
        e.preventDefault();
        const { student, edit } = this.state;
        if(student.name===""){
            alert("Please Enter Student Name")
            return false;
        }
        if(student.course===""||student.city===""||student.grade===""){
            alert("plese select all field")
            return false;
        }
      
        console.log("eds",student.id)
        const url = edit ? `/svr/students/${student.id}` : "/svr/students";
    const response = edit? await http.put(url, student)
            : await http.post(url, student);
    
          console.log("Response:", response);
          this.props.history.push("/students");
        
      };

    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/students");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/students");
    }
    render (){
        const{name,course,grade,city}=this.state.student

        const {cities,grades,courses}=this.state;

        return( <div className="container">
             <div className="form-group">
                <label>Student Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter  Name"
                value={name} onChange={this.handleChange}    />
            </div>
    

      
            <div className="form-group">
                <label> Course</label>
                <select  id="course" name="course" className="form-control" value={course} onChange={this.handleChange}>
                    <option id="">Select Course</option>
                    {courses.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            <div className="form-group">
                <label> Grade</label>
                <select  id="grade" name="grade" className="form-control" value={grade} onChange={this.handleChange}>
                    <option id="">Select  Grade</option>
                    {grades.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
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
            
     
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AddStudentstApp;