import React,{Component} from "react";
import http from "../httpService";

class AddCust extends Component{

    state={
        customer:{ id:"",name:"",city:"",age:"",gender:"",payment:""},
        payments:["Credit Card","Debit Card","Wallet"],
        genders:["Male","Female"],
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
            let response=await http.get(`/customers/${id}`);
            let {data}=response;
            this.setState({customer:data,edit:true });
        }
        else {
            let customer={ id:"",name:"",city:"",age:"",gender:"",payment:""};
            this.setState({
                customer:customer, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.customer[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {customer,edit}=this.state;
        edit? this.putData(`/customers/${customer.id}`,this.state.customer):
        this.postData("/customers",this.state.customer);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/customers");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/customers");
    }
    render (){
        const { id,name,city,age,gender,payment}=this.state.customer;
        const {edit}=this.state

        const {payments,genders}=this.state;

        return( <div className="container">
              <div className="form-group">
                <label>Customer Id</label>
                <input type="text" className="form-control" id="id" name="id" placeholder="Enter  Id" disabled={edit}
                value={id} onChange={this.handleChange}    />
            </div>
             <div className="form-group">
                <label>Customer Name</label>
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
                <input type="text" className="form-control" id="city" name="city" placeholder="Enter  City"
                value={city} onChange={this.handleChange}    />
            </div>


            
            <div className="form-group">
                <label> Gender</label>
                <select  id="gender" name="gender" className="form-control" value={gender} onChange={this.handleChange}>
                    <option id="">Select Gender</option>
                    {genders.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
     
            <div className="form-group">
                <label> Payment Mode</label>
                <select  id="payment" name="payment" className="form-control" value={payment} onChange={this.handleChange}>
                    <option id="">Select payment mode</option>
                    {payments.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AddCust;