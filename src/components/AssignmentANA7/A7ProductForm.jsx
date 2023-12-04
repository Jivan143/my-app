import React, { Component } from "react";

class A7ProductForm extends Component {
  state = {
    code: "",
    price: "",
    category: "",
    specialOffer: false,
    limitedStock: false,
    quantity:1,
    brand:"",
  };

  componentDidMount() {
    if (this.props.editProduct) {
      this.setState({ ...this.props.editProduct });
    }
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    if (name === "category") {
      this.setState({ [name]: inputValue, brand: "" });
    } else {
      this.setState({ [name]: inputValue });
    }  };

  handleSubmit = () => {
    const { code, price, category, specialOffer, limitedStock,quantity,brand } = this.state;
    
    const editedProduct = {
      code,
      price:parseInt(price), 
      category,
      quantity,
      brand,
      specialOffer,
      limitedStock,
    
    };

     if (this.validatefunction(editedProduct)){

     
   
        this.props.addProduct(editedProduct);
      
  
      this.setState({
        code: "",
        price: "",
        category: "",
        quantity: 1,
        brand: "",
        specialOffer: false,
        limitedStock: false,
        errorMessage: "",
      });
    
  
      this.props.onCancel();
    }
    };

    // validatefunction = (editedProduct) => {
    //   const { code, price, category, brand } = editedProduct;
      
    //   if (!code) {alert("Please fill  Product code");return false;}
    //   if (!price) {alert("Please fill  price");return false;}
    //   if (!category) {alert("Please Choose  category");return false;}
    //   if (!brand) {alert("Please Select in brand");return false;}
    
    //   if (isNaN(price) || price <= 0) {
    //     alert("Please enter a valid positive price");
    //     return false;
    //   }
    
    
    //   return true; 
    // };
    
  validatefunction = (editedProduct) => {
    const { code, price, category, brand } = editedProduct;

    if (!code) {
      this.setErrorMessage("Please fill Product code");
      return false;
    }
    if (!price) {
      this.setErrorMessage("Please fill price");
      return false;
    }
    if (!category) {
      alert("Please Choose category");
      this.setErrorMessage("");
      return false;
    }
    if (!brand) {
      this.setErrorMessage("");
      alert("Please Select in brand");
      return false;
    }

    if (isNaN(price) || price <= 0) {
      this.setErrorMessage("Please enter a valid positive price");
      return false;
    }

    this.setErrorMessage("");
    return true;
  };

  setErrorMessage = (message) => {
    this.setState({ errorMessage: message });
  };

  

  render() {
    const { code, price, category, specialOffer, limitedStock,brand,errorMessage } = this.state;
    const categories = ["Food", "Personal Care", "Apparel"];
    const {Products,editProduct}=this.props;
    let foodss=["Nestle","Haldiram","Pepsi","Coca Cola","Britannia","Cadburys"];
    let Personalss=["P&G","Colgate","Parachute","Gillete","Dove"];
    let Apparelss=["Levis","Van Heusen","Manyavaar","Zara"];

    let newarr=category===categories[0]?foodss:category===categories[1]?Personalss:category===categories[2]?Apparelss:[];

    return (
      <div className="form-group m-2">
        <h6>Product Code</h6>
        <div className="row m-1">
          <input type="text"name="code"value={code}onChange={this.handleInputChange}  disabled={editProduct.code ? true : false} />
          {errorMessage && errorMessage.includes("Product code") && (
            <div className="text-danger small">{errorMessage}</div>
          )}
        </div>
        <h6>Price</h6>
        <div className="row m-1 ">
          <input type="number" name="price"value={price}onChange={this.handleInputChange}/>
          {errorMessage && errorMessage.includes("price") && (
            <div className="text-danger small">{errorMessage}</div>
          )}
        </div>

        <div className="row ">
        <h6>Category</h6>
          <div className="">
          {categories.map((cat) => (
            <label className="form-check-label h6 m-1"> 
            <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={this.handleInputChange}
              />
               {cat}</label>
          ))}
           {errorMessage && errorMessage.includes("category") && (
              <div className="text-danger small">{errorMessage}</div>
            )}
          </div>
        </div>
        <div className="row m-1">

             <select
             name="brand"
             value={brand}
             onChange={this.handleInputChange}
           >
         <option value="">Select Brand</option>
         {newarr.map((ele)=>(
        <option value={ele}>{ele}</option>
        ))}

         </select>
         {errorMessage && errorMessage.includes("brand") && (
            <div className="text-danger small">{errorMessage}</div>
          )}
        </div>


   
        <div className="col m-2 ">
          <h6>Choose other info about the product</h6>
          <input
            type="checkbox"name="specialOffer"checked={specialOffer}onChange={this.handleInputChange}
          />  Special Offer <br />

       
     
          <input
            type="checkbox"
            name="limitedStock"
            checked={limitedStock}
            onChange={this.handleInputChange}
          />     Limited Stock
        </div>

        <div className="col m-2">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Add Product
          </button>
        </div>

        <div className="col  m-2">
          <button className="btn btn-primary" onClick={this.props.onCancel}>
            Go Back Home Page
          </button>
        </div>
      </div>
    );
  }
}

export default A7ProductForm;
