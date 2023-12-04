import React, { Component} from "react";
import LeftPanelForm from "./leftpanelForm";
class LaptopComponent extends Component{
    state={
        laptops: [{model:"AX4581",brand:"Acer",ram:"4GB", hardDisk:"500GB",rating:"3",processor:"i3",},
        {model:"HB2881",brand:"HP",ram:"4GB", hardDisk:"250GB",rating:"4",processor:"i3",},
        {model:"DM811",brand:"Dell",ram:"4GB", hardDisk:"1TB",rating:"3",processor:"i3",}, 
        {model:"AP629",brand:"Acer",ram:"6GB", hardDisk:"1TB",rating:"2",processor:"i3",}, 
        {model:"AT820",brand:"Acer",ram:"8GB", hardDisk:"1TB",rating:"4",processor:"i5",}, 
        {model:"DM811",brand:"Dell",ram:"4GB", hardDisk:"1TB",rating:"3",processor:"i3",}, 
        {model:"HK008",brand:"HP",ram:"6GB", hardDisk:"250GB",rating:"3",processor:"i5",}, 
        {model:"MAir11",brand:"Apple",ram:"4GB", hardDisk:"128GB",rating:"4",processor:"i5",}, 
        {model:"MPro24X",brand:"Apple",ram:"8GB", hardDisk:"256GB",rating:"4",processor:"i7",}, 
        {model:"DL390",brand:"Dell",ram:"6GB", hardDisk:"500GB",rating:"3",processor:"i3",}, 
        {model:"AM954",brand:"Acer",ram:"8GB", hardDisk:"1TB",rating:"3",processor:"i7",}, 
        {model:"AB234",brand:"Acer",ram:"4GB", hardDisk:"1TB",rating:"3",processor:"i7",}, 
        {model:"HC874",brand:"HP",ram:"8GB", hardDisk:"1TB",rating:"1",processor:"i7",}, 
    ],
    optionsArray:{
        brand:["Acer","HP","Dell","Apple"],
        ram: ["4GB","6GB","8GB"],
        rating: ["1","2","3","4"],
        processor: ["i3","i5","i7"],
        hardDisk:["128GB","250GB","256GB","500GB","1TB"],
    },
    optionsSel:{
        brand:[],
        ram: [],
        processor:"",
        rating: "",
        hardDisk:"",
    },
    };
 
    showLaptops=()=>{
        const{laptops,optionsSel}= this.state;
        const {brand ,ram,processor,rating ,hardDisk}=optionsSel;
        const laptops1= brand.length>0 
        ? laptops.filter((p1) =>brand.findIndex(br =>br===p1.brand) >=0):laptops;
        const laptops2= ram.length>0
        ? laptops1.filter((lt) => ram.findIndex((r)=>r===lt.ram)>=0):laptops1

        const laptops3= processor 
        ? laptops2.filter((lt) => lt.processor ===processor):laptops2;

        const laptops4= rating 
        ? laptops3.filter((lt) => lt.rating ===rating):laptops3;
        const laptops5 = hardDisk
        ? laptops4.filter((lt) => lt.hardDisk === hardDisk)
        : laptops4;

        return <div className="container">
            <h3 className=" text-center">Seleted Table</h3>
                <div className=" row border bg-dark text-light">
            <div className="col-2 border">Model</div>
            <div className="col-2 border">Brand</div>
            <div className="col-2 border">Ram</div>
            <div className="col-2 border">HardDisk</div>
            <div className="col-2 border">Rating</div>
            <div className="col-2 border">Processor</div>

                </div>
            {laptops5.map((p1)=>(
                <div className=" row border">
            <div className="col-2 border">{p1.model}</div>
            <div className="col-2 border">{p1.brand}</div>
            <div className="col-2 border">{p1.ram}</div>
            <div className="col-2 border">{p1.hardDisk}</div>
            <div className="col-2 border">{p1.rating}</div>
            <div className="col-2 border">{p1.processor}</div>

                </div>

            ))}
        </div>

    }

    handleClear =() =>{
        let s1={...this.state};
        s1.optionsSel={
            brand:[],
            ram: [],
            processor:"",
            rating: "",
        };
        this.setState(s1);
    };

    handleChangeOption =(optionsSel) =>{
        let s1={...this.state};
        s1.optionsSel= optionsSel
        this.setState(s1);
    }
    render(){
        const {optionsArray,optionsSel}=this.state;
        return (
        <div className="container">
            <div className="row">
                <div className=" col-3 border bg-light">
                    <LeftPanelForm optionsSel={optionsSel} 
                    optionsArray={optionsArray} 
                    onChangeOption={this.handleChangeOption}
                    onClear={this.handleClear}

                    />
                </div>
                <div className="col-9">
                    {this.showLaptops()}
                </div>
            </div>
        </div>
        )

    }
}
export default LaptopComponent;