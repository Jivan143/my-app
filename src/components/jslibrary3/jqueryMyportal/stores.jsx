import React, { Component } from "react";
import NewStore from "./NewStore";
import queryString from "query-string";
import { Link } from "react-router-dom";
import ShowOptions from "./showOptions";
import ShowOptionsStore from "./showOptionStore";

class Stores1 extends Component {

  handleClick=(br)=>{
    this.props.history.push(`/location/${br}`);
}

handleOptionChange =(options)=>{
    this.callURL("/stores",options);
};
callURL =(url,options) =>{
    let searchStr=this.makeSearchString(options);
    this.props.history.push({
        pathname:url,
        search:searchStr,
    });
};

makeSearchString=(options)=>{
    let {location}=options;
    let searchStr="";
    searchStr=this.addToQueryString(searchStr, "location",location);
    return searchStr;
};
addToQueryString= (str,paramName,paramValue)=>
    paramValue 
    ?str
    ?`${str}&${paramName}=${paramValue}`
    :`${paramName}=${paramValue}`
    :str;

  render() {
    const { data, display } = this.props;
    const { value } = this.props.match.params;
    let locationss=data.map((ele)=>ele.location);
    const uniqueLocations = locationss.filter((location, index) => locationss.indexOf(location) === index);

    console.log(uniqueLocations)
    const queryParams=queryString.parse(this.props.location.search);
    let searchString=this.makeSearchString(queryParams);
    const page = parseInt(this.props.match.params.page) || 1;
    const size = 3;

    let data2 = display ? data.filter((pr) => pr[display] === value) : data;
    let data3 = data2.length > 4 ? data2.slice((page - 1) * size, page * size) : data2;
    let { location}=queryParams;
    data3=location? data2.filter(pr=>pr.location === location):data2;
    let data4 = data3.length > 4 ? data3.slice((page - 1) * size, page * size) : data3;

    return (
      <div className="row border">
        <h4>Stores</h4>
        <ShowOptionsStore 
                 options={queryParams} 
                 onOptionChange={this.handleOptionChange}
                 data={uniqueLocations}
                  />
        {data4.map((ele) => (
          <div className="col border bg-light" key={ele.id}>
            Id:<Link to={`/store/${ele.id}`}>{ele.id}</Link> <br />
            Location:
            <Link to={`/stores?location=${ele.location}`}>{ele.location}</Link> <br /> {/* Updated Link */}
            Email: {ele.email} <br />
            Mobile: {ele.mobile} <br />
          </div>
        ))}

        <div className="row">
          <div className="col-2">
            {page > 1 ? <Link to={`/stores/${page - 1}?${searchString}`}>Prev</Link> : ""}
          </div>
          <div className="col-8"></div>
          <div className="col-2">
            {data3.length > page * size ? (
              <Link to={`/stores/${page + 1}?${searchString}`}>Next</Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Stores1;
