import React,{Component} from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

class MainMobileTable extends Component{
    state={
        RAM: "",
        ROM: "",
        Price:"",
    }



    componentDidUpdate(prevProps) {
        if (this.props.match.params.brand !== prevProps.match.params.brand) {
            this.setState({
                RAM: "",
                ROM: "",
                Price:"",
            });
        }
    }
    handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "RAM") {
            if (checked) {
                this.setState((prevState) => ({
                    RAM: [...prevState.RAM, value],
                }));
            } else {
                this.setState((prevState) => ({
                    RAM: prevState.RAM.filter((ra) => ra !== value),
                }));
            }
        }  
        else if (name === "ROM") {
            if (checked) {
                this.setState((prevState) => ({
                    ROM: [...prevState.ROM, value],
                }));
            } else {
                this.setState((prevState) => ({
                    ROM: prevState.ROM.filter((ra) => ra !== value),
                }));
            }
        }
        else if(name ==="Price"){
            this.setState({
                Price: checked ? value : "",
            });

        }
        else {
            this.setState({
                [name]: value,
            });
        }
    };

    filterParams =(arr,queryParams)=>{
        let {RAM,ROM,Price,brand}=queryParams;
        arr=this.filterParam(arr,"RAM",RAM);
        arr=this.filterParam(arr,"ROM",ROM);
        arr=this.filterParam(arr,"brand",brand);

        arr=this.filterParam(arr,"Price",Price);
        return arr;
       
    };
    filterParam=(arr,name,values)=>{
        if(!values) return arr;
        let valuesArr=values.split(",");
       let arr1= arr.filter((a1)=>valuesArr.find((val)=>val===a1[name]));
        return arr1;

    }
    addToQueryString=(str,paramName,paramValue)=>{
       return paramValue?
        str ? `${str}&${paramName}=${paramValue}`
        :`${paramName}=${paramValue}`
        :str;
    }

    makeSearchString= (options)=>{
        let {RAM,ROM,Price,brand}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"RAM",RAM);
        searchStr=this.addToQueryString(searchStr,"ROM",ROM);
        searchStr=this.addToQueryString(searchStr,"Price",Price);
        searchStr=this.addToQueryString(searchStr,"brand",brand);
      return searchStr;
    }



    handleOptionChange=(options)=>{
        this.callURL("/all",options);
    };
    
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString,
        });
    };
    render (){
        const {mobiles}=this.props;
        const{RAM,ROM,Price}=this.state
        let {brand}=this.props.match.params;
        let queryParams=queryString.parse(this.props.location.search);

        let searchString=this.makeSearchString(queryParams);
        let uniqueprice=[ "Below 10,000","10,000 or More"];
        let brand1=brand==="All"?"":brand;

        
        let rams=mobiles.map((ele)=>ele.RAM);
        let uniquerams = rams.filter((ele, index) => rams.indexOf(ele) === index);

        let roms=mobiles.map((ele)=>ele.ROM);
        let uniqueroms = roms.filter((ele, index) => roms.indexOf(ele) === index);
        const filteredData = mobiles.filter((ele) => {
            if (RAM.length === 0 && Price==="" && ROM.length===0 && brand==="All") {
                return true;
            }
            return (
                (RAM.includes(ele.RAM)||RAM.length===0)&&
                (ROM.includes(ele.ROM)||ROM.length===0)&&
                (Price === "" || (Price === "Below 10,000" && ele.price < 10000) || (Price === "10,000 or More" && ele.price >= 10000))&&
                (brand1==="" || ele.brand===brand1)
            );
        });
        let mobiles2=this.filterParams(filteredData,queryParams); 

        return (
            <div className="container">
            <div className="row">
            <div className="col-3">
            <div className="row">
                <h5>Choose RAM</h5>
                {uniquerams.map((ele,index)=>(
                    <div key={index}>
                     <input type="checkbox"id={ele}name="RAM"value={ele}checked={RAM.includes(ele)}
                onChange={this.handleChange} /> 

               <label htmlFor={`${ele}`}> {ele}</label>
               </div>
                ))}
            </div>
            <div className="row">
                <h5>Choose ROM</h5>
                {uniqueroms.map((ele,index)=>(
                    <div key={index}>

                     <input type="checkbox"id={ele}name="ROM"value={ele}checked={ROM.includes(ele)}
                onChange={this.handleChange} /> 
               <label htmlFor={`${ele}`}> {ele}</label>
               </div>
                ))}
             </div>
             <div className="row">
                <h5>Desired Price</h5>
                {uniqueprice.map((ele,index)=>(
                    <div key={index}>

                     <input type="radio"id={ele}name="Price"value={ele}checked={Price.includes(ele)}
                onChange={this.handleChange} /> 

                             <label htmlFor={`${ele}`}> {ele}</label>
               </div>
                ))}
            </div>

            </div>
            <div className="col-8">
            {filteredData.length!==0?(<div>
                 {mobiles2.map((ele)=>(
                    <div className="row border ">
                        <div className="col-3 ">{ele.name}</div>
                        <div className="col-3 ">{ele.brand}</div>
                        <div className="col-2 ">{ele.RAM}</div>
                        <div className="col-2 ">{ele.ROM}</div>
                        <div className="col-2 ">{ele.price}</div>
                    </div>
                 ))}</div>
                 ):(
                 <div className="row m-3">
                    <h5 className="text-info">No Filterd Data</h5>
                 </div>)
    }
            </div>


            </div>
            </div>
        )
    }
}
export default MainMobileTable;