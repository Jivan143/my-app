import React,{Component} from "react";
import http from "./mobilehttpservive";

class NewMobileDB extends Component{

    state={
        mobiles:{ id:"",name:"",price:"",brand:"",rsm:"",rom:"",os:""},
        rams:["3GB", "4GB", "6GB", "8GB"],
        roms:["32GB","64GB","128GB","256GB"],
        oss:["Android","iOS"],
        brands:["Samsung", "Xiaomi", "Realme", "Apple"],
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
        console.log('ww',id);
        if(id){
            let response=await http.get(`/svr/mobiles/${id}`);
            let {data}=response;
            // console.log("ab",data[0]);
            this.setState({mobiles:data[0],edit:true });
        }
        else {
            let mobiles={ id:"",name:"",price:"",brand:"",rsm:"",rom:"",os:""};
            this.setState({
                mobiles:mobiles, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.mobiles[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {mobiles,edit}=this.state;
        console.log("handeSubmit",mobiles,edit);
        edit? this.putData(`/svr/mobiles/${mobiles.id}`,this.state.mobiles):
        this.postData("/svr/mobiles",this.state.mobiles);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/mobiles");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/mobiles");
    }
    render (){
        let { id,name,price,brand,ram,rom,os}=this.state.mobiles;
        let {edit}=this.state
   let {mobiles}=this.state;
   console.log("edist", mobiles);
        const {brands,rams,roms,oss}=this.state;

        return( <div className="container">
              <div className="form-group">
                <label>Mobile Id</label>
                <input type="number" className="form-control" id="id" name="id" placeholder="Enter  Id" disabled={edit}
                value={id} onChange={this.handleChange}    />
            </div>
             <div className="form-group">
                <label>Mobile Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter  Name"
                value={name} onChange={this.handleChange}/>
            </div>
            
            <div className="form-group">
                <label>Mobile Price</label>
                <input type="number" className="form-control" id="gender" name="price" placeholder="Enter  Price"
                value={price} onChange={this.handleChange}    />
            </div>

            <div className="form-group">
                <label> Brand</label>
                <select  id="brand" name="brand" className="form-control" value={brand} onChange={this.handleChange}>
                    <option id="">Select Brand</option>
                    {brands.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
     
            <div className="form-group">
                <label>RAM</label>
                <select  id="ram" name="ram" className="form-control" value={ram} onChange={this.handleChange}>
                    <option id="">Select  RAM</option>
                    {rams.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>

            <div className="form-group">
                <label>ROM</label>
                <select  id="rom" name="rom" className="form-control" value={rom} onChange={this.handleChange}>
                    <option id="">Select  ROM</option>
                    {roms.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>

            <div className="form-group">
                <label>Operating System </label>
                <select  id="os" name="os" className="form-control" value={os} onChange={this.handleChange}>
                    <option id="">Select  Operating System</option>
                    {oss.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default NewMobileDB;