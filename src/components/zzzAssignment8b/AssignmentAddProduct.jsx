import React,{Component} from "react";
import http from "./AssignmentHttpservices";

class AssignmentAddProd extends Component{

    state={
        product:{ productid:"",productname:"",category:"",description:""},
        edit:false,
    };
    
    async componentDidMount(){
        this.fetchdata();
    }
    async componentDidUpdate( prevProps,prevState){
        if(prevProps!==this.props) this.fetchdata();
    }
    async fetchdata(){
        const{productid}=this.props.match.params;
        console.log('ww',productid);
        if(productid){
            let response=await http.get(`/products/${productid}`);
            let {data}=response;
            this.setState({product:data,edit:true });
        }
        else {
            let product={ productid:"",productname:"",category:"",description:""};
            this.setState({
                product:product, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.product[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {product,edit}=this.state;
        console.log("handeSubmit",product,edit);
        edit? this.putData(`/products/${product.productid}`,this.state.product):
        this.postData("/products",this.state.product);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/products");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/products");
    }
    render (){
        let { productid,productname,category,description}=this.state.product;
        let {edit}=this.state
   let {product}=this.state;
   console.log("edist", product);

        return( <div className="container">
             
             <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" id="productname" name="productname" placeholder="Enter  Name" disabled={edit}
                value={productname} onChange={this.handleChange}/>
            </div>
            
            <div className="form-group">
                <label> Category</label>
                <input type="text" className="form-control" id="category" name="category" placeholder="Enter  category"
                value={category} onChange={this.handleChange}    />
            </div>

            <div className="form-group">
            <label> Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Enter  description"
                value={description} onChange={this.handleChange}    />
            </div>

            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AssignmentAddProd;