import React, {Component} from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import ShowOptions from "./showOptions";
class Products1 extends Component {
    
    handleClick=(br)=>{
        this.props.history.push(`/brand/${br}`);
    }

    handleOptionChange =(options)=>{
        this.callURL("/products",options);
    };
    callURL =(url,options) =>{
        let searchStr=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchStr,
        });
    };

    makeSearchString=(options)=>{
        let {minPrice,maxPrice,inStock}=options;
        let searchStr="";
        searchStr=this.addToQueryString(searchStr, "minPrice",minPrice);
        searchStr=this.addToQueryString(searchStr, "maxPrice",maxPrice);
        searchStr=this.addToQueryString(searchStr, "inStock",inStock);
        return searchStr;
    };
    addToQueryString= (str,paramName,paramValue)=>
        paramValue 
        ?str
        ?`${str}&${paramName}=${paramValue}`
        :`${paramName}=${paramValue}`
        :str;
    


    render (){
        const {products,display}=this.props;
        const {value}=this.props.match.params;
        const queryParams=queryString.parse(this.props.location.search);
        console.log(queryParams);
       let products1= display ? products.filter(pr=>pr[display]===value) : products;
     
       let brands=products.reduce((acc,curr)=>acc.find(a1=>a1===curr.brand)?
         acc:[...acc,curr.brand],[]);

         let {minPrice,maxPrice, inStock}=queryParams;
         products1=minPrice? products1.filter(pr=>pr.price >= +minPrice):products1;
         products1=maxPrice? products1.filter(pr=>pr.price <= +maxPrice):products1;
         products1=inStock? products1.filter((pr)=> inStock==="yes" ? pr.inStock :inStock==="no" ? !pr.inStock:false ):products1;

        return(
            <div className="container">
                 <h4>Welcome to the Product page</h4>
                 <h6>
                 <ShowOptions 
                 options={queryParams} 
                 onOptionChange={this.handleOptionChange}
                  />
                 </h6>
                <div className="row border bg-success text-danger">
                <div className="col-2 border">Id</div>
                <div className="col-2 border">Brand</div>
                <div className="col-3 border">Catagory</div>
                <div className="col-3 border">Product</div>
                <div className="col-1 border">Price</div>
                <div className="col-1 border">stock</div>
                </div>
                {products1.map((ele)=>(<div className="row border"key={ele.id}>
                <div className="col-2 border" >
                    <Link to={`/product/${ele.id}`}>{ele.id}</Link></div>
                <div className="col-2 border">
                <Link to={`/brand/${ele.brand}`}>{ele.brand}</Link>
                </div>
                <div className="col-3 border">
                <Link to={`/catagory/${ele.catagory}`}>{ele.catagory}</Link>
                </div>
                <div className="col-3 border">{ele.product}</div>
                <div className="col-1 border">{ele.price}</div>
                <div className="col-1 border">{ele.inStock?"true":"false"}</div>
                </div>
                
                ))}

            </div>
        )
    }
}
export default Products1;