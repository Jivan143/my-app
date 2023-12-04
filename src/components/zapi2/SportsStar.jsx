import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import http from "../httpService";
import OptionsCB2 from "./OptionCB2";
import OptionsCB3 from "./OptiionCB3";

class SportsStar extends Component {
    state = {
      pageInfo: {
        pageNumber: 1,
        numberOfPages: 1,
        numOfItems: 0,
        totalItemCount: 0,
      },
      stars: [],
      sportName: "All",
      countries:["India", "Australia", "Portugal", "Argentina", "Brazil", "France",],
      selectedCountry: [],
    };
  
    async fetchData() {
      let queryParams = queryString.parse(this.props.location.search);
      let searchStr = this.makeSearchString(queryParams);
      let { sportName } = this.props.match.params; 
  
      let response = await http.get(`/sporticons/stars?${searchStr}`);
      let response1 = await http.get(`/sporticons/All`);
      const { data } = response1;
      let { pageInfo,stars  } = response.data;
   console.log(stars);
      let filterdata =
      this.state.selectedCountry.length === 0
        ? stars
        : stars.filter((ele) => this.state.selectedCountry.includes(ele.country));
  
      this.setState({
        pageInfo,
        stars:filterdata,
        sportName: sportName || "All",
      });
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.location.search !== this.props.location.search) this.fetchData();
    }
  
    handlePage = (v1) => {
      let queryParams = queryString.parse(this.props.location.search);
      let { page = "1" } = queryParams;
      let newPage = +page + v1;
      queryParams.page = newPage;
      this.callURL("/stars", queryParams);
    };
  
    callURL = (url, options) => {
      let searchString = this.makeSearchString(options);
      this.props.history.push({
        pathname: url,
        search: searchString,
      });
    };
  
    makeSearchString = (options) => {
      let { page, country } = options;
      let searchStr = "";
      searchStr = this.addToQueryString(searchStr, "page", page);
     searchStr = this.addToQueryString(searchStr, "country", country);
      return searchStr;
    };
  
    addToQueryString = (str, paramName, paramValue) => {
      return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
    };
    handleOptionChange = (options) => {
        options.page = "1";
        console.log("country",options.country)
        this.setState({ selectedCountry: options.country });
        this.callURL("/stars", options);
      };
      

  render() {
    const { pageInfo, stars=[],sportName,countries,selectedCountry } = this.state;
    let quesryParams=queryString.parse(this.props.location.search);

    let filterdata =
    selectedCountry === "All"
      ? stars
      : stars.filter((star) => star.country === selectedCountry && (sportName === "All" || star.sport === sportName));
    console.log("quesryParams",quesryParams)
    return (
      <div className="container">
        <div className="row m-1">
            <div className="col-3">
            <OptionsCB2  
                    options={quesryParams}
                    onOptionChange={this.handleOptionChange}
                    countries={countries}
                    />
            </div>
        <div className="col-9 ">
        <div className="row bg-primary text-dark">
          <div className="col">Name</div>
          <div className="col">Country</div>
          <div className="col">Sport</div>
        </div>
        {stars.map((star) => (
          <div className="row" key={star.id}>
            <div className="col border">
              <Link to={`/stars/${star.id}`}>{star.name}</Link>
            </div>
            <div className="col border">{star.country}</div>
            <div className="col border">{star.sport}</div>
          </div>
        ))}
                  <div className="row">
                <div className="col-2">{pageInfo.pageNumber>1 ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(-1)}>Prev</button>):("") }</div>
                <div className="col-8"></div>
                <div className="col-2">{pageInfo.pageNumber < pageInfo.numberOfPages ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(1)}>Next</button>):("") }</div>
                </div>
                </div>
                </div>
      </div>
    );
  }
}

export default SportsStar;



