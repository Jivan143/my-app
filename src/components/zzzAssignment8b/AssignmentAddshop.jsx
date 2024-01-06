import React,{Component} from "react";
import http from "./AssignmentHttpservices";

class AssignmentAddShop extends Component{

    state={
        shop:{ shopid:"",name:"",rent:""},
        edit:false,
    };
    
    async componentDidMount(){
        this.fetchdata();
    }
    async componentDidUpdate( prevProps,prevState){
        if(prevProps!==this.props) this.fetchdata();
    }
    async fetchdata(){
        const{shopid}=this.props.match.params;
        console.log('ww',shopid);
        if(shopid){
            let response=await http.get(`/shops/${shopid}`);
            let {data}=response;
            this.setState({shop:data,edit:true });
        }
        else {
            let shop={ shopid:"",name:"",rent:""};
            this.setState({
                shop:shop, edit:false,
            })

        }
    }

    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.shop[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {shop,edit}=this.state;
        console.log("handeSubmit",shop,edit);
        edit? this.putData(`/shop/${shop.shopid}`,this.state.shop):
        this.postData("/shops",this.state.shop);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/shops");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/shops");
    }
    render (){
        let { shopid,name,rent}=this.state.shop;
        let {edit}=this.state
   let {shop}=this.state;
   console.log("edist", shop);

        return( <div className="container">
             <div className="form-group">
                <label>Shop Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter Shop Name" disabled={edit}
                value={name} onChange={this.handleChange}/>
            </div>
            
            <div className="form-group">
                <label>Shop Rent</label>
                <input type="number" className="form-control" id="rent" name="rent" placeholder="Enter Shop rent"
                value={rent} onChange={this.handleChange}    />
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AssignmentAddShop;