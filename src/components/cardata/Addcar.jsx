import React,{Component} from "react";
import http from "../httpService";

class AddCar extends Component{

    state={
         car:{ id:"",price:"",kms:"",year:"",model:"",color:""},
        models:["Swift Dzire VXi","Etios SMi","City AXi","Swift DXi","Etios VXi","City ZXi"],
        colors:["Red","White","Steel Grey","Metallic Blue","Black","Silver Grey"],
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
            let response=await http.get(`/cars/${id}`);
            let {data}=response;
            this.setState({car:data,edit:true });
        }
        else {
            let car={ id:"",price:"",kms:"",year:"",model:"",color:""};
            this.setState({
                car:car, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.car[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {car,edit}=this.state;
        edit? this.putData(`/cars/${car.id}`,this.state.car):
        this.postData("/cars",this.state.car);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/cars");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/cars");
    }
    render (){
        const { id,price,kms,year,model,color}=this.state.car;

        const {edit}=this.state

        const {models,colors}=this.state;

        return( <div className="container">
              <div className="form-group">
                <label>Car Id</label>
                <input type="text" className="form-control" id="id" name="id" placeholder="Enter  Id" disabled={edit}
                value={id} onChange={this.handleChange}    />
            </div>
             <div className="form-group">
                <label>Price</label>
                <input type="text" className="form-control" id="price" name="price" placeholder="Enter  Price"
                value={price} onChange={this.handleChange}    />
            </div>
            <div className="form-group">
                <label>Mileage in kms</label>
                <input type="kms" className="form-control" id="kms" name="kms" placeholder="Enter  Kms"
                value={kms} onChange={this.handleChange}    />
            </div>

            <div className="form-group">
                <label> Year of  Manufacture</label>
                <input type="text" className="form-control" id="year" name="year" placeholder="Enter  Year"
                value={year} onChange={this.handleChange}    />
            </div>


            
            <div className="form-group">
                <div className="row">
                <div className="col-6">
                <label> Model</label>
                <select  id="gender" name="model" className="form-control" value={model} onChange={this.handleChange}>
                    <option id="">Select Model</option>
                    {models.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
                </div>
                <div className="col-6">
                <label> Color</label>
                <select  id="payment" name="color" className="form-control" value={color} onChange={this.handleChange}>
                    <option id="">Select Color</option>
                    {colors.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          </div>
          </div>
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AddCar;