import React, { Component} from "react";
import Product from "./product";
import ProductTable from "./produccttable";
class ProductStore extends Component{
    state={
        products: [
            { id: 'C332', name: "Coca Cola", price: 20, quantity: 10 },
            { id: 'F168', name: "5 Star", price: 15, quantity: 0 },
            { id: 'M228', name: "Maggi 3", price: 28, quantity: 22 },
            { id: 'P288', name: "Pepsi", price: 20, quantity: 18 },
            { id: 'D311', name: "Dairy Milk", price: 40, quantity: 0 },
            { id: 'M301', name: "Mirinda", price: 25, quantity: 8 },
            { id: 'K477', name: "KitKat", price: 16, quantity: 11 },
            { id: 'R544', name: "Red Bull", price: 90, quantity: 3 },
          ],
          sortBy: "name", 
          isGridView: true,
        }
    handleIncreaseQuantity = (product) => {
        let s1={...this.state}
        let fndindex = s1.products.findIndex((item) => item.id === product.id);
        s1.products[fndindex].quantity +=1;
        this.setState(s1);
       
      };
      handleDecreaseQuantity = (product) => {
        let s1={...this.state}
        let fndindex = s1.products.findIndex((item) => item.id === product.id);
        s1.products[fndindex].quantity -=1;
        this.setState(s1);
       
      };
      sort = (type) => {
        this.setState({ sortBy: type });
      };
      view = () => {
        this.setState((ele) => ({
          isGridView: !ele.isGridView,
        }));
      };
    render(){
        const {products,sortBy,isGridView}=this.state;
        const sortedProducts = [...products];
         sortedProducts.sort((a, b) => {
            if (sortBy === "quantity") {
              return a.quantity - b.quantity;
            } else if (sortBy === "price") {
              return a.price - b.price;
            }
            return 0;
          });
        return (
            

            <div className="container  text-center">

                <div className="col">
                <button className="btn btn-primary m-2" onClick={() => this.sort("quantity")}>Order by Quantity</button>
                <button className="btn btn-primary m-2" onClick={() => this.sort("price")}>Order by Price</button>
                <button className="btn btn-primary m-2"onClick={this.view} >View: {isGridView ? "Table" : "Grid"}</button>
                </div>
                <h4>Product Store</h4>
                <div className="row">
          {isGridView ? (
            sortedProducts.map((product) => (
              <Product
                product={product}
                onIncrease={this.handleIncreaseQuantity}
                onDecrease={this.handleDecreaseQuantity}
              />
            ))
          ) : (
            <ProductTable products={sortedProducts} 
            onIncrease={this.handleIncreaseQuantity}
            onDecrease={this.handleDecreaseQuantity}
                />
          )}
        </div>
            </div>
        )
    }
}
export default ProductStore;