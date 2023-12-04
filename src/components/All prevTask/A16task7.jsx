import React, {Component} from "react";
import LeftStoreRadioForm from "./leftstoreradioform";
class A16Task7 extends Component{
    state={
        products : [{ id: "PEP110", name: "Pepsi", category: "Food", stock: true },
        { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
        { id: "PEA531", name: "Pears", category: "Soap", stock: true },
        { id: "LU7264", name: "Lux", category: "Soap", stock: false },
        { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
        { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
        { id: "LI130", name: "Liril", category: "Soap", stock: true },
        { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
        { id: "MAG441", name: "Maggi", category: "Food", stock: true },
    ],
    optionsArray:{
    name1:["Pepsi","Close Up","Pears","Lux","Colgate","Dairy Milk","Liril","Pepsodent","Maggi"],
    name:["Food","Toothpaste","Soap"],
},  
optionsSel:{
    name:[],
},
    }
    showstore =()=>{
        const{products,optionsSel}= this.state;
        const {name }=optionsSel;
        const products1 = name.length > 0 
        ? products.filter((p1) => name === p1.category)
        : [];
      
       

        return <div className="container border">
            <h6 className="row"> Selected Products: {name}</h6>
            {products1.length > 0 ? (
        <div className="row border bg-dark text-light">
          <div className="col-3 border">Id</div>
          <div className="col-3 border">Name</div>
          <div className="col-3 border">Category</div>
          <div className="col-3 border">Stock</div>
        </div>
      ) : null}
                {products1.map((p1) => (
                <div className="row border" key={p1.id}>
                    <div className="col-3 border">{p1.id}</div>
                    <div className="col-3 border">{p1.name}</div>
                    <div className="col-3 border">{p1.category}</div>
                    <div className="col-3 border">{p1.stock.toString()}</div>
                </div>
                ))}

        </div>

    };
    handleChangeOption =(optionsSel) =>{
        let s1={...this.state};
        s1.optionsSel= optionsSel
        this.setState(s1);
    };

    
    render(){
        const {optionsArray,optionsSel}=this.state;
        return (
        <div className="container border">
            <div className="row">
                <div className=" col-3 border bg-light">
                    <LeftStoreRadioForm optionsSel={optionsSel} 
                    optionsArray={optionsArray} 
                    onChangeOption={this.handleChangeOption}

                    />
                </div>
                <div className="col-9">
                    {this.showstore()}
                </div>
            </div>
        </div>
        )

    }
}
export default A16Task7;