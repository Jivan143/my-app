import React,{Component} from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import Products1 from "./products";
import Home1 from "./home";
import NavBar from "./navBar";
import Contact1 from "./contact";
import Product from "./product";
import Stores1 from "./stores";
import Store from "./store";
import AddProduct from "./addProduct";
import NewStore from "./NewStore";
class MyPortal extends Component{
    state={

        products:[
            {id:"A101", brand:"Pepsi", catagory:"Beverages", product:"Pepsi 300ml",price:20,inStock:true},
            {id:"A232", brand:"Coca Cola", catagory:"Beverages", product:"Diet Coke 300ml",price:25,inStock:false},
            {id:"A102", brand:"Pepsi", catagory:"Beverages", product:"Pepsi 500ml",price:40,inStock:true},
            {id:"A237", brand:"Coca Cola", catagory:"Beverages", product:"Coke 1l",price:75,inStock:true},
            {id:"B034", brand:"Dairy Milk", catagory:"Chocolates", product:"Fruit and Nuts-40g",price:15,inStock:false},
            {id:"B035", brand:"Dairy Milk", catagory:"Chocolates", product:"Crackles-100g",price:45,inStock:true},
            {id:"B036", brand:"Dairy Milk", catagory:"Chocolates", product:"Nutties - 20g",price:10,inStock:true},
            {id:"B173", brand:"Snickers", catagory:"Chocolates", product:"25gm bar",price:35,inStock:false},
        ],
        contact:{
            email:"mail2myportal.com",
            address: "402, 4th Floor, Tower D1",

        },

        data:[{id:"101", location:"Delhi", email: "store101@email.com", mobile:"2734672371"},
        {id:"102", location:"Mumbai", email: "store102@email.com", mobile:"4645757441"},
        {id:"103", location:"Delhi", email: "store103@email.com", mobile:"983452887"},
        {id:"104", location:"Bengaluru", email: "store104@email.com", mobile:"782234663"},
        {id:"108", location:"Delhi", email: "store108@email.com", mobile:"850003461"},
        {id:"114", location:"Bengaluru", email: "store114@email.com", mobile:"900346731"},
        {id:"125", location:"Delhi", email: "store125@email.com", mobile:"95134274005"},
        {id:"129", location:"Mumbai", email: "store129@email.com", mobile:"9823574623"},
        {id:"141", location:"Mumbai", email: "store141@email.com", mobile:"89239472385"},
        {id:"156", location:"Bengaluru", email: "store157@email.com", mobile:"965746731"},
        {id:"21", location:"Delhi", email: "store021@email.com", mobile:"959530041"},
        {id:"277", location:"Mumbai", email: "store277@email.com", mobile:"8900673411"},
        {id:"89", location:"Bengaluru", email: "store89@email.com", mobile:"782234663"},
        {id:"120", location:"Delhi", email: "store120@email.com", mobile:"850003461"},
        {id:"255", location:"Bengaluru", email: "store255@email.com", mobile:"900346731"},
        {id:"17", location:"Delhi", email: "store17@email.com", mobile:"95134274005"},
        {id:"27", location:"Mumbai", email: "store27@email.com", mobile:"9823574623"},],

    };


    handleAddProduct =(pr)=>{
        let s1={...this.state};
        s1.products.push(pr);
        this.setState(s1);
    }

    handleNewStore=(pr)=>{
        let s1={...this.state};
        s1.data.push(pr);
        this.setState(s1);
    }
    render(){
        const {products,contact,data}=this.state
        return(
            <div className="container">
                <NavBar />
                <Switch>
                <Route path="/product/:id" render={(props)=><Product {...props} products={products} />} />
                <Route path="/brand/:value" render={(props)=>(<Products1 {...props} products={products} display="brand"  />)} />
                <Route path="/catagory/:value" render={(props)=>(<Products1 {...props} products={products} display="catagory"  />)} />
                <Route path="/store/:id" render={(props)=><Store {...props} data={data} />} />

                <Route path="/location/:value" render={(props)=>(<Stores1 {...props} data={data} display="location"  />)} />
                <Route path="/:all/:page" render={(props)=><Stores1 {...props} data={data} />} />

                <Route path="/home" component={Home1} />
                <Route path="/contact" render={(props)=><Contact1 {...props}  contact={contact} />} />
                <Route path="/products" render={(props)=><Products1 {...props}  products={products} />} />
                <Route path="/NewStore" render={(props)=><NewStore {...props}  storeInfo={{}} onSubmit={this.handleNewStore} />} />
                <Route path="/addProduct" render={(props)=><AddProduct {...props}  productInfo={{}} onSubmit={this.handleAddProduct} />} />
                <Route path="/:stores" render={(props)=><Stores1 {...props} data={data} />} />


                <Route path="/" component={Home1} />
                <Redirect from="/" to="/home" />

                </Switch>
            </div>
        );
    }
}
export default MyPortal;