import React, {Component} from "react";
class A74MainPizza extends Component{
    state={
         DataItems:[{"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
    {"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes"},
    {"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton Iced Tea","desc":"Lipton Iced Tea","veg":"Yes"},
    {"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes"},
    {"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo","veg":"No"},
    {"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato & capsicum in creamy mayo","veg":"Yes"},
    {"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes"},
    {"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"SideDish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed Garlic Bread for a Cheesy indulgence","veg":"Yes"},
    {"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"Side Dish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolute delight with your favourite Garlic Breadsticks","veg":"Yes"},
    {"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"Side Dish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastes best with dip","veg":"Yes"},
    {"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"Side Dish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamy harissa sauce","veg":"No"},
    {"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"Veg Parcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes"},
    {"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"Side Dish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecue chicken","veg":"No"},
    {"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"Side Dish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilled mushrooms","veg":"Yes"},
    {"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butt erscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes"},
    {"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes"},
    {"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"Deluxe Veggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes"},
    {"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes"},
    {"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes"},
    {"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno","veg":"Yes"},
    {"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"Peppy Paneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes"},
    {"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"Veg Extravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese","veg":"Yes"},
    {"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chi cken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese","veg":"No"},
    {"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No"},
    {"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepper barbeque chicken & onion","veg":"No"},
    {"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo","veg":"No"} ],
   Sizes :["Regular","Medium","Large"],
   Crusts : ["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic Hand Tossed"],
   Cart:[],
   dataitems1:[],
   activeCategory: 0,
   size:"",
   crust:""


    };

    showpizza=(index)=>{
        let s1={...this.state};
         let dataitems1=[...s1.DataItems];
         let arr=[];
        dataitems1= index===1?dataitems1.filter((ele)=>ele.veg=="Yes" && ele.type==="Pizza"):
         index==2?dataitems1.filter((ele)=>ele.veg=="No" && ele.type==="Pizza"):
         index==3?dataitems1.filter((ele)=> ele.type==="Side Dish"):
         index==4?dataitems1.filter((ele)=>ele.type!=="Side Dish" && ele.type!=="Pizza"):[]

         this.setState({
            dataitems1:dataitems1,
            activeCategory: index,

         })
    }
    addToCart = (item) => {
        const updatedCart = [...this.state.Cart];
        let dataitems = [...this.state.dataitems1];
    
        const existingCartItem = updatedCart.find((cartItem) => cartItem.id === item.id);
    
        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            if (item.type === "Pizza" && (!item.selectedSize || !item.selectedCrust)) {
                alert("Please select size and crust for the pizza.");
                return;
            }
            item.quantity = 1;
            updatedCart.push(item);
        }
    
        this.setState({
            Cart: updatedCart,
        });
    };
    
    increment = (name) => {
        const { Cart } = this.state;
        const { dataitems1 } = this.state;
        let index=Cart.findIndex((ele)=>ele.name===name)
        Cart[index].quantity++;
        this.setState({ Cart });
    };
    decrement = (name) => {
        const { Cart } = this.state;
        let index=Cart.findIndex((ele)=>ele.name===name)

        if (Cart[index].quantity > 1) {
            Cart[index].quantity--;
        } else {
            Cart[index].quantity--;
            Cart[index].selectedCrust="";
            Cart[index].selectedSize="";

            console.log("Cart",Cart[index].quantity);
            Cart.splice(index, 1);
        }
        this.setState({ Cart });
    };
    
  handleDropdownChange = (name, property, value) => {
    const { dataitems1 } = this.state;
    let s1={...this.state};
    


    let index=dataitems1.findIndex((ele)=>ele.name==name)
    const updatedDataItems = [...dataitems1];
    updatedDataItems[index][property] = value;
    //  let arr=updatedDataItems.map((ele)=>ele.name==name?{...ele,[property]:value}:{...ele})
    this.setState({
      dataitems1: updatedDataItems,
    });
  };


    render (){

        const { DataItems,dataitems1, Sizes, Crusts, Cart, size,crust,activeCategory } = this.state;
        



        return (
            <div>
                 <nav className="navbar navbar-expand navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">MyFavPizza</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" onClick={()=>this.showpizza(1)}>Veg Pizza</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" onClick={()=>this.showpizza(2)}>Non-Veg Pizza</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" onClick={()=>this.showpizza(3)}>Side Dishes </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" onClick={()=>this.showpizza(4)}>Other Items</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="row">
                    {dataitems1.map((ele,index)=>(
                    <div className="col-md-6 col-lg-6" key={index}>
                    <div className="card mb-4">
                    <img src={ele.image} className="card-img-top" alt={ele.name} width="80%" />
                    <div className="card-body ">
                        <h5 className="cart-title text-center">{ele.name}</h5>
                        <p className="card-title">{ele.desc}</p>
                        {ele.type==="Pizza"?
                        <div className="row">
                        <div className="col-6">
                    <select
                     id={ele.name}
                        name="size" value={ele.selectedSize||size}
                      onChange={(e) =>
                        this.handleDropdownChange(ele.name, "selectedSize", e.target.value)
                      }   disabled={ele.quantity ? true : false}
                    >
                      <option value="">Select Size</option>
                      {Sizes.map((size, sizeIndex) => (
                        <option key={sizeIndex} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select
                      id={ele.name}
                      name="crust"
                      value={ (crust || ele.selectedCrust) ? ele.selectedCrust:crust}
                      onChange={(e) =>
                        this.handleDropdownChange(ele.name, "selectedCrust", e.target.value) }   disabled={ele.quantity ? true : false}
                      
                    >
                      <option value="">Select Crust</option>
                      {Crusts.map((crust, crustIndex) => (
                        <option key={crustIndex} value={crust}>
                          {crust}
                        </option>
                      ))}
                    </select>
                  </div>
                  </div>:""}
                 
                        { !ele.quantity || ele.quantity===0?
                      <div className="text-center">  <button className="btn btn-primary" onClick={() => this.addToCart(ele)}>Add to Cart</button>
                       </div>: <div className="text-center">
                      <button className="  btn  bg-danger " onClick={()=>this.decrement(ele.name)}>-</button>
                        <button className="  btn  btn-secondary m-2" disabled>{ele.quantity}</button>
                       <button className="  btn  bg-primary " onClick={()=>this.increment(ele.name)}>+</button>
                        </div>}

                     
                      </div>
                        </div>
                        </div>

                ))}
                </div> 
            </div>
            <div className="col-4">
                <h3>Cart</h3>
                {Cart.length===0?
                <h>Cart is Empty</h>:""}
                {Cart.map((ele,index) => (
                <div key={index} className="row border">
                    <div className="col-5 ">
                        <img src={ele.image} alt={index} width="100%" height="50%" />
                    </div>
                    <div className="col-7 ">
                    <strong>{ele.name}</strong>
                    <div className="row">{ele.desc}</div>
                    <div className="row">
                    <div className="col">{ele.selectedCrust}</div>
                    <div className="col">{ele.selectedSize}</div>
                    </div>
               

                        <button className="  btn  bg-danger " onClick={()=>this.decrement(ele.name)}>-</button>
                        <button className="  btn  btn-secondary m-2" disabled>{ele.quantity}</button>
                       <button className="  btn  bg-primary " onClick={()=>this.increment(ele.name)}>+</button>
          

                    </div>

                   </div>

              ))}
            </div>
        </div>
        </div>


            </div>

            
            
        )
    }
}
export default A74MainPizza;