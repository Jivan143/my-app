import React,{Component} from "react";
import http from "./AssignmentHttpservices";

class AssignmentAddPurch extends Component{

    state={
        purchase:{ purchaseid:"",shopid:"",productid:"", quantity:"", price:"" },
        edit:false,
        products:[],
        shops:[],    };
    
    async componentDidMount(){
        this.fetchdata();
        this.fetchData1();
        this.fetchData2();
    }
    async componentDidUpdate( prevProps,prevState){
        if(prevProps!==this.props) this.fetchdata();
    }
    async fetchdata(){
        const{purchaseid}=this.props.match.params;
        console.log('ww',purchaseid);
        if(purchaseid){
            let response=await http.get(`/purchases/${purchaseid}`);
            let {data}=response;
            this.setState({purchase:data,edit:true });
        }
        else {
           let purchase={ purchaseid:"",shopid:"",productid:"", quantity:"", price:"" };
            this.setState({
                purchase:purchase, edit:false,
            })

        }
    }
    async fetchData1() {
        let resposne =await http.get(`/shops`);
        let {data}=resposne;
        console.log("empl",data.shops);

        this.setState({
            shops:data,
        })
    }
    async fetchData2() {
        let resposne =await http.get(`/products`);
        let {data}=resposne;
        console.log("empl",data);

        this.setState({
            products:data,
        })
    }


    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.purchase[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {purchase,edit}=this.state;
        console.log("handeSubmit",purchase,edit);
        edit? this.putData(`/purchases/${purchase.purchaseid}`,this.state.purchase):
        this.postData("/purchases",this.state.purchase);

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/purchases");
    }
    async putData(url,obj){
        let response=await http.put(url,obj);
        console.log("pds",response);
        this.props.history.push("/purchases");
    }
    render (){
        let { purchaseid,shopid,productid, quantity, price }=this.state.purchase
        let {edit}=this.state
   let {purchase,shops,products}=this.state;

   let prodarr=products.map((ele)=>ele.productid);
    let shoarr=shops.map((ele)=>ele.shopid);
   console.log("edist", purchase);

        return( <div className="container">
          
            <div className="form-group">
                <label> Product Id</label>
                <select  id="productid" name="productid" className="form-control" value={productid} onChange={this.handleChange}>
                    <option id="">Select productId</option>
                    {prodarr.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            <div className="form-group">
                <label> Shop Id</label>
                <select  id="shopid" name="shopid" className="form-control" value={shopid} onChange={this.handleChange}>
                    <option id="">Select ShopId</option>
                    {shoarr.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
          
            </div>
            
             <div className="form-group">
                <label>Quantity</label>
                <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Enter quantity"
                value={quantity} onChange={this.handleChange}/>
            </div>
            
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" id="price" name="price" placeholder="Enter price"
                value={price} onChange={this.handleChange}    />
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Submit</button>

            </div>
            )
    }
}
export default AssignmentAddPurch;