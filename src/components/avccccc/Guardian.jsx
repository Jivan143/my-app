import React, { Component } from "react";
import http from "./httpServices";
import { Link } from "react-router-dom";

class Guardians extends Component {
  state = {
    datas: [],
    query: "",
    page: "",
    currentPage: "",
    alldata: {},
    sections: ["business", "technology", "politics", "lifeandstyle"],
    Orderbys: ["none", "newest", "oldest", "relevance"],
    section: "",
    orderBy: "",
    navdata:"",
  };

  async componentDidMount() {
    const { section1, query } = this.props.match.params;
    await this.fetchData(query || "", 1, this.state.section || "", "none", section1);

    console.log("query", query);
    console.log("section1", section1);
  }

  fetchData = async (query, page, section, orderBy, navitem) => {
    const { section1 } = this.props.match.params;

    console.log(section1);
    const apiKey = "test";
    let apiUrl = `/search?q=${query}&api-key=${apiKey}`;

    if (section) {
      console.log("section", section);
      apiUrl += `&section=${section}`;
    }
    if (page) {
      apiUrl += `&page=${page}`;
    }
    if (orderBy !== "none" && orderBy) {
      apiUrl += `&order-by=${orderBy}`;
    }
    if (section) {
      console.log("navitem", navitem);
      apiUrl += `&q=${section}`;
    }

    const response1 = await http.get(apiUrl);

    const { data } = response1;
    console.log("data", data);
    this.setState({
      datas: data.response.results,
      alldata: data.response,
    });
  };

  handleQuery = () => {
    const { query, section } = this.state;
    this.setState({
        navdata: query,

    })
    this.updateUrl();

    console.log(query);
    this.fetchData(query, 1, section, "none");
  };
  handleQuery2 = (ele) => {
    this.setState({ navdata: ele,
        section:"",query:ele }, () => {
            this.updateUrl();
      this.fetchData(this.state.navdata, this.state.currentPage, this.state.section, "none");
    });
  };
  

  handleSectionChange = (e) => {
    const section = e.target.value;
    this.setState({ section: section }, () => {
        this.updateUrl();
      this.fetchData(this.state.query, this.state.currentPage, this.state.section, this.state.orderBy);
    }); 
};

  handlePageChange = (page) => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + page }));
    this.updateUrl();
    this.fetchData(this.state.query, page + 1, this.state.section, this.state.orderBy);
  };

  handleOrderByChange = (selectedOrder) => {
    this.setState({ orderBy: selectedOrder, currentPage: 1 }, () => {
        this.updateUrl();
      this.fetchData(this.state.query, this.state.currentPage, this.state.section, this.state.orderBy);
    });
     };

updateUrl = () => {
    const { query, section, orderBy, currentPage, navdata ,alldata} = this.state;
    const { history } = this.props;
    let page=alldata.currentPage

    console.log("currentPage",page);
      let url = `/Guardian/${navdata}?`;
    if (query) {
      url += `q=${query}&`;
    }
  
    if (section) {
      url += `section=${section}&`;
    }
  
    if (orderBy) {
      url += `order-by=${orderBy}&`;
    }
  
    url += `page=${page || 1}&api-key=test`;
  
    history.push(url);
  };
  

  render() {
    const { datas, query, alldata, sections, section, Orderbys } = this.state;
    let { prev } = -alldata.currentPage;
    let arr = ["sports", "cricket", "movies", "education"];

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar bg-danger p-2 row col-12">
          <Link className="navbar-brand col h3" to="/">
            NewsSite
          </Link>
          <div className="" id="navbarSupportedContent ">
            <ul className="navbar-nav mr-auto">
              {arr.map((ele) => (
                <Link
                  className="nav-link text-light"
                  to={`/Guardian/${ele}`}
                  key={ele}
                  onClick={() => this.handleQuery2(ele)}
                >
                  {ele}
                </Link>
              ))}
            </ul>
          </div>
        </nav>
        <div className="row m-2">
          <div className="col-3">
            <div className="container border">
              <div className="">
                <div className="row h3">Order By</div>
                <div className="row">
                  <select
                    value={this.state.orderBy}
                    onChange={(e) => this.handleOrderByChange(e.target.value)}
                  >
                    {Orderbys.map((order) => (
                      <option key={order} value={order}>
                        {order}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="container border">
              <div className="row h3 ">Sections</div>
              {sections.map((ele) => (
                <div className="row border p-1" key={ele}>
                  <input
                    type="radio"
                    name="section"
                    value={ele}
                    checked={section === ele}
                    onChange={this.handleSectionChange}
                  />
                  {ele}
                </div>
              ))}
            </div>
          </div>
          <div className="col-9">
            <div className="container">
              <input
                type="text"
                id="query"
                name="query"
                value={query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <button className="btn" onClick={this.handleQuery}>
                Submit
              </button>
            </div>
            <div className="row">
              {alldata.startIndex}-{alldata.startIndex + alldata.pageSize - 1} of {alldata.pages}
            </div>
            <div className="row">
              {datas.map((ele, index) => (
                <div className="col-3 text-center bg-info m-1 text-center" key={index}>
                  <div className="row">{ele.webTitle}</div>
                  <div className="row h6 ">Source: {ele.sectionName}</div>
                  <div className="row h6">{ele.webPublicationDate}</div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-2">
                {alldata.currentPage > 1 ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => this.handlePageChange(prev)}
                  >
                    Prev
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="col-8"></div>
              <div className="col-2">
                {alldata.currentPage < alldata.pageSize ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => this.handlePageChange(alldata.currentPage)}
                  >
                    Next
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guardians;
