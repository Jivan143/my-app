import React, {Component} from "react";
class AddProduct extends Component{
    state={
        productInfo:this.props.productInfo,
    };

    handleChange=(e)=>{
        const{currentTarget:input}=e;
        let s1={...this.state};
        input.name==="inStock"?
        (s1.productInfo[input.name]=input.checked)
        :(s1.productInfo[input.name]=input.value);
    this.setState(s1);        
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.productInfo);
        this.props.history.push("/products");
    };

    render () {
         let {id,brand,catagory,product,price,inStock,}=this.state.productInfo;
         return (
            <div className="container">
                <div className="form-group">
                    <label>Product Id</label>
                    <input type="text" className="form-control" id="id" name="id" placeholder="Enter Product Id"
                    value={id} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Product Brand</label>
                    <input type="text" className="form-control" id="brand" name="brand" placeholder="Enter Brand"
                    value={brand} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" className="form-control" id="catagory" name="catagory" placeholder="Enter Category"
                    value={catagory} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" id="product" name="product" placeholder="Enter Product"
                    value={product} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input type="number" className="form-control" id="price" name="price" placeholder="Enter Price"
                    value={price} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="inStock" name="inStock" value={inStock} 
                    onChange={this.handleChange} />
                     <label>In Stock</label>

                </div>
                <div className="col text-center">
                <button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
         )


    }
}

export default AddProduct;