import React, {Component} from "react";
class A17task3 extends Component{

state= {

    person: this.props.person,
    errors:{},
    catagories:['Food','Electronics','Apparels', 'Grocery'],
    discounts:['5%','10%','20%'],

};

handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = {...this.state };
    s1.person [input.name] = input.value;
    this.handleValidate(e);
    this.setState(s1);

    };
handleSubmit = (e) => {
    e.preventDefault();
    let errors= this.validateAll();
    if (this.isValid(errors)){
     this.props.onSubmit (this.state.person);
    alert("Successfully Submited");
    }
    else {
        let s1 = {...this.state };
        s1.errors=errors;
        this.setState(s1);
    }
    };
isFormValid=()=>{
    let errors=this.validateAll();
    return this.isValid(errors);
}


isValid =(errors)=>{
    let keys= Object.keys(errors);
    let count=keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
    return count===0;
    };
validateAll= ()=>{
    let {name ,description,productcode,catagory,price,discount}=this.state.person;
    let errors={};
    errors.name=this.vallidateName(name);
    errors.description=this.vallidatedesp(description);
    errors.productcode=this.vallibdateProd(productcode);
    errors.catagory=this.vallibdateCatgry(catagory);
    errors.price=this.vallidatePrice(price);
    errors.discount=this.vallidateDiscount(discount);

    return errors;
}

handleValidate=(e)=>{
    let {currentTarget:input}=e;
    let s1={ ...this.state};
switch(input.name){
    case "name":s1.errors.name=this.vallidateName(input.value);
     break;
    case "description":s1.errors.description=this.vallidatedesp(input.value);
     break;
    case "productcode":s1.errors.productcode=this.vallibdateProd(input.value);
     break;
    case "catagory":s1.errors.catagory=this.vallibdateCatgry(input.value);
     break;
    case "price":s1.errors.price=this.vallidatePrice(input.value);
     break;
    case "discount":s1.errors.discount=this.vallidateDiscount(input.value);
     break;
    default:
     break;
}
this.setState(s1);
};
    
vallidateName = (name) =>
  !name ? "Name must be entered": name.length < 5
    ? "Name should have a minimum of 5 characters": /^[a-zA-Z\s]+$/.test(name)
    ? "": "Name should contain only alphabetic characters (a-z or A-Z)";
    
vallidatedesp =(description)=>
   !description ? "Description must be entered": description.length < 10
     ? "Description should be a minimum of 10 characters": /[^a-zA-Z0-9\s]/.test(description)
     ? "Description should not have any special characters": "";

vallibdateProd =(productcode)=>
    !productcode ? "Description must be entered" : productcode.length !== 6
    ? "Product should be 6 characters" : /^[A-Z]{2}\d{4}$/.test(productcode)
    ? "": "Product First 2 characters should be uppercase alphabets and last 4 characters should be digits";

vallibdateCatgry =(catagory)=>
    !catagory?"Catagory must be Selected":"";

vallidatePrice =(price)=>
      !price ? "Price must be entered" :  price <=0 ? "Should be greater than 0." : "";
   
vallidateDiscount=(discount)=>
    !discount?"Discount must be Choose":"";

    
    render() {
        let { name, description,productcode,catagory,price,discount}= this.state.person;
        let { errors,catagories,discounts,isEditMode} = this.state;
        isEditMode= name !==""?true:false;
    return (
    <div className="container">
         <h5>Enter New Details</h5>
    <div className="form-group"> 
    <label>Name</label>
    
    <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"
    value={name} onChange={this.handleChange} onBlur={this.handleValidate} readOnly={isEditMode}
    />
    {errors.name ? ( <span className="text-danger">{errors.name}</span>):("")}
    </div>
    <div className="form-group">
    <label>Description</label>
    
    <input type="text" value={description}
    className="form-control" id="description" name="description"placeholder="Enter Description"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.description ? ( <span className="text-danger">{errors.description}</span>):("")}

    </div> 
    <div className="form-group">
    <label>Product Code </label>
    
    <input type="text" value={productcode}
    className="form-control" id="productcode" name="productcode"placeholder="Enter Productcode"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.productcode ? ( <span className="text-danger">{errors.productcode}</span>):("")}

    </div> 

    <div className="form-group"> 
    <label>Catagory</label>
    <select className="form-control"
    
    name="catagory" value={catagory} onChange={this.handleChange} onBlur={this.handleValidate}
    >
    <option  value=""> Select the Catagory</option>
    {catagories.map((c1) => (
        <option>{c1}</option>
    ))}
    </select>
    {errors.catagory ? ( <span className="text-danger">{errors.catagory}</span>):("")}

    </div>

    <div className="form-group">
    <label>Price</label>
    
    <input type="number" value={price}
    className="form-control" id="price" name="price"placeholder="Enter Price"
    onChange={this.handleChange} onBlur={this.handleValidate}
    />
        {errors.price ? ( <span className="text-danger">{errors.price}</span>):("")}

    </div>  


    <div className="form-group">
  <label>Discount</label>
  <div className="row">
    {discounts.map((c1) => (
      <label key={c1}>
        <input type="radio"value={c1} name="discount"
        onChange={this.handleChange} onBlur={this.handleValidate} 
        checked={c1 === discount}
        />{c1}
      </label>
    ))}
  </div>
  {errors.discount ? <span className="text-danger">{errors.discount}</span> : null}
   </div>
    
   <button className="btn btn-primary btn-sm" onClick={this.handleSubmit} disabled={!this.isFormValid()}  >Submit</button>
    </div>
    );
    }
}
export default A17task3;