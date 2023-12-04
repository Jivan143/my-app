import React, { Component} from "react";
import { Link } from "react-router-dom";
import queryString from "query-string"
import LeftPanelOptions from "./leftPanelOptions";
import LeftPanelOptionsCB from "./leftPanelOptionsCB";
class Laptops extends Component{

    filterParams =(arr,queryParams)=>{
        let {brand,ram,processor,hardDisk,rating}=queryParams;
        arr=this.filterParam(arr,"brand",brand);
        arr=this.filterParam(arr,"ram",ram);
        arr=this.filterParam(arr,"processor",processor);
        arr=this.filterParam(arr,"hardDisk",hardDisk);
        arr=this.filterParam(arr,"rating",rating);
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
        let {brand,ram,processor,hardDisk,rating}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr,"brand",brand);
        searchStr=this.addToQueryString(searchStr,"ram",ram);
        searchStr=this.addToQueryString(searchStr,"processor",processor);
        searchStr=this.addToQueryString(searchStr,"hardDisk",hardDisk);
        searchStr=this.addToQueryString(searchStr,"rating",rating);
      return searchStr;
    }


    makeAllOptions=(arr)=>{
        let json={};
        json.brand=this.getDifferenValues(arr,"brand");
        json.ram=this.getDifferenValues(arr,"ram");
        json.processor=this.getDifferenValues(arr,"processor");
        json.hardDisk=this.getDifferenValues(arr,"hardDisk");
        json.rating=this.getDifferenValues(arr,"rating");
        return json;

    }
    handleOptionChange=(options)=>{
        this.callURL("/all/1",options);
    };
    
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString,
        });
    };



    getDifferenValues=(arr,name)=>
    arr.reduce(
        (acc,curr)=>
        acc.find((val)=> val===curr[name])?acc:[...acc,curr[name]],[]);
    
    render() {
        const {laptops}=this.props;
        const {page }=this.props.match.params;
        let queryParams=queryString.parse(this.props.location.search);
        let searchString=this.makeSearchString(queryParams);
        let pageNum=+page;
        let size=3;
        let laptops1=this.filterParams(laptops,queryParams); 
        let laptops2=laptops1.length>3 ?laptops1.filter((lt,index)=>index<3):laptops1
        let startIndex=(pageNum-1) * size;
        let endIndex=laptops1.length> startIndex+size-1 ? startIndex+size-1 : laptops1.length - 1;
        let allOptions=this.makeAllOptions(laptops);

        return <div className="conrainer">
            <div className="row">
                <div className="col-3">
                    <LeftPanelOptionsCB allOptions={allOptions} options={queryParams} 
                    onOptionChange={this.handleOptionChange}
                     />
                </div>
                <div className="col-8">
            <h6> Showing {startIndex+1} to {endIndex+1} of {laptops1.length}</h6>
            <h6>Filter :{}</h6>
            <div className="row">
            {laptops2.map((lt)=><div className="col-4 border bg-light" key={lt.model}>
            Model :<Link to={`/laptop/${lt.model}`}>{lt.model}</Link> <br />
            Brand :<Link to={`/all/1?brand=${lt.brand}`}>{lt.brand}</Link><br />
            RAM :<Link to={`/all/1?ram=${lt.ram}`}>{lt.ram}</Link><br />
            Processor :<Link to={`/all/1?processor=${lt.processor}`}>{lt.processor}</Link><br />
            Hard Disk :<Link to={`/all/1?hardDisk=${lt.hardDisk}`}>{lt.hardDisk}</Link><br />
            Rating :<Link to={`/all/1?rating=${lt.rating}`}>{lt.rating}</Link><br />
        
            </div>
            )}
            </div>
            <div className="row">
                <div className="col-2">{startIndex>0 ?<Link to={`/all/${pageNum-1}?${searchString}`}>Prev</Link> :""}</div>
                <div className="col-8"></div>
                <div className="col-2">{endIndex<laptops1.length-1 ?<Link to={`/all/${pageNum+1}?${searchString}`}>Next</Link> :""}</div>

            </div>
            </div>
            </div>
            </div>
        

        

    }

}
export default Laptops;