import React, {Component} from "react";
import A7ProductForm from "./A7ProductForm";
import A7StocksForm from "./A7StocksForm";

class A7MainProduct extends Component{
    state={

        Brands:["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys", "P&G", "Colgate", "Parachute","Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"],
        Products:[
            {
            code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",
            specialOffer: false, limitedStock: false, quantity: 25
            },
            {
            code: "MAGG021", price: 25, brand: "Nestle", category: "Food",
            specialOffer: true, limitedStock: true, quantity: 10
            },
            {
            code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",
            specialOffer: true, limitedStock: true, quantity: 3
            },
            {
            code: "CLG281", price: 60, brand: "Colgate", category: "Personal Care",
            specialOffer: true, limitedStock: true, quantity: 5
            },
            {
            code: "MAGG451", price: 25, brand: "Nestle", category: "Food",
            specialOffer: true, limitedStock: true, quantity: 0
            },
            {
            code: "PAR250", price: 40, brand: "Parachute", category: "Personal Care",
            specialOffer: true, limitedStock: true, quantity: 5
            }
            ],
         
            view:0,
    }

    handleEditDetails = (code) => {
        const productToEdit = this.state.Products.find((product) => product.code === code);
        this.setState({ editProduct: productToEdit, view: 1 });
      };
    
    ShowProductform=()=>{
        this.setState({
          view:1,
          editProduct:[],
        });
    }
    ShowStockForm=()=>{
        let s1={...this.state};
        s1.view=2;
        this.setState(s1);
    }
    addProduct = (newProduct) => {
        this.setState((prevState) => {
          const { Products, editProduct } = prevState;
          const productIndex = Products.findIndex((product) => product.code === newProduct.code);
      
          if (productIndex !== -1) {
            Products[productIndex] = newProduct;
          } else {
            Products.push(newProduct);
          }
      
          return {
            Products,
            view: 0,
            editProduct: null, 
          };
        });
      };
      
      Addquantity=(newstock)=>{
        let s1={...this.state};
        const productIndex = s1.Products.findIndex((product) => product.code === newstock.code);
        if (productIndex !== -1) {
            s1.Products[productIndex].quantity+=newstock.quantity;
        }



        

      }
      
    onCancel=()=>{
        let s1={...this.state};
        s1.view=0;
        this.setState(s1);

    }

    render (){
        const {Brands,Products,view,editProduct}=this.state;
        let totalquatity=Products.reduce((acc,curr)=>curr.quantity+acc,0)
        let totalValue=Products.reduce((acc,curr)=>curr.quantity*curr.price+acc,0)
        return (
            <div className="container p-2">
            <nav className="Navbar bg-dark text-light">
              <div className="row p-2">
                <div className="col-3">ProdStoreSys</div>
                <div className="col">
                Product <label className="text-primary">{Products.length}</label>
                Quantity <label className="text-primary">{totalquatity}</label>
                Value <label className="text-primary">{totalValue}</label></div>
              </div>
            </nav>
            {view===0?(
                    <div className="col m-2 ">
                        <div className="row">


                        {Products.map((ele)=>(
                             <div className="col-3  border bg-light  text-center p-2 ">

                            <h5 className=" ">Code: {ele.code}</h5>
                            <h6>Brand: {ele.brand}</h6>
                            <h6>Category: {ele.category}</h6>
                            <h6>Price: {ele.price}</h6>
                            <h6>Quantity: {ele.quantity}</h6>
                            <h6>Special Offers: {ele.specialOffer?"Yes":"No"}</h6>
                            <h6>Limited Stocks: {ele.limitedStock?"Yes":"No"}</h6>
                            <button className="btn btn-warning " onClick={()=>this.handleEditDetails(ele.code)}>Edit Details</button>
                             </div>

                            ))}

                </div>
                <div className="row">
                  <div className="col m-2">
                    <button className="btn btn-primary m-2" onClick={this.ShowProductform}>Add New Product</button>
                    <button className="btn btn-primary m-2" onClick={this.ShowStockForm}>Receive Stock</button>
                  </div>
                </div>
                </div>
            ):view===1?(
                <A7ProductForm 
                Products={Products}
                addProduct={this.addProduct}
                 onCancel={this.onCancel}
                 editProduct={editProduct} 
                 

                />
            ):view===2?(
                <A7StocksForm 
                Products={Products}
                onCancel={this.onCancel}
                Addquantity={this.Addquantity}

                />
            ):("")
            }

              

            </div>

        )
    }
}
export default A7MainProduct;