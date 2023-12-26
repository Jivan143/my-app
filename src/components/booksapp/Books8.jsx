import React, { Component } from "react";
import http from "./httpservice8";
import OptionCBook from "./optionCBook";
import queryString from "query-string";

class Books8 extends Component {
  state = {
    datas: {},
    myBooks: [],
    languages: ["english", "french", "hindi", "spanish", "chinese"],
    filters: ["partial", "full", "free-ebooks", "paid-ebooks"],
    Printtypes: ["all", "books","magazines"],
    orderBys: ["relevance", "newest"],
    searchTerm: "",
    name:'',
    currentPage: 1,
    settings: {
      printType: true,
      languages: true,
      filter: true,
      orderBy: true,
      maxResults: 8,
    },
  };

  async fetchData() {
    let queryParams = queryString.parse(this.props.location.search);
    let { q } = this.props.match.params;
    let { currentPage,name } = this.state;
    let {maxResults}=this.state.settings
    let startIndex = (currentPage - 1) * maxResults;
    let key = `AIzaSyAyf0sU6Be3SaJ2am0lHQgh-xyEG8zAH2s`;
    let searchStr = this.makeSearchString(queryParams, startIndex);
    console.log("searchStr", queryParams, searchStr);
    q=q?q:name;
    try {
      let response = await http.get(`/books/v1/volumes?q=${q}&${searchStr}&maxResults=${maxResults}`);
      console.log("booksresponse", response);

      let { data } = response;
      console.log("books", data);

      this.setState({
        datas: data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.match.params.q !== this.props.match.params.q ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchData();
    }
  }

  callURL = (url, options) => {
    let searchString = this.makeSearchString(options);
    console.log("23", url, options, searchString);

    this.props.history.push({
      pathname: url,
      search: searchString,
    });
  };

  makeSearchString = (options, startIndex = 1) => {
    let { langRestrict,filter, printType, author, orderBy } = options;
    let searchStr = "";
    searchStr = this.addToQueryString(searchStr, "langRestrict",langRestrict);
    searchStr = this.addToQueryString(searchStr, "filter",filter);
    searchStr = this.addToQueryString(searchStr, "printType", printType);
    searchStr = this.addToQueryString(searchStr, "orderBy", orderBy);
    searchStr = this.addToQueryString(searchStr, "author", author);
    searchStr += `&startIndex=${startIndex}`;

    return searchStr;
  };

  addToQueryString = (str, paramName, paramValue) => {
    return paramValue ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`) : str;
  };

  // handleOptionChange = (options) => {
  //   this.callURL("/books", options);
  //   this.setState({
  //     currentPage: 1,
  //   });
  // };
  handleOptionChange = (options) => {
    const { q } = this.props.match.params;
    this.callURL("/books", { ...options, q });
    let s1={...this.state};
    s1.name=q?q:s1.name;
    s1.currentPage=1;
    this.setState(s1);
    console.log("optionsoptions",options);
   
  };
  addToMyBooks = (book) => {
    const { myBooks } = this.state;
    if (!myBooks.some((b) => b.id === book.id)) {
      this.setState((prevState) => ({
        myBooks: [...prevState.myBooks, book],
      }));
    }
  };

  removeFromMyBooks = (book) => {
    this.setState((prevState) => ({
      myBooks: prevState.myBooks.filter((b) => b.id !== book.id),
    }));
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCheckboxChange = (setting) => {
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        [setting]: !prevState.settings[setting],
      },
    }));
  };

  handleInputChange = (setting, value) => {
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        [setting]: value,
      },
    }));
  };

  renderSettingsForm = () => {
    const { settings } = this.state;
    return (
      <div className="container">
        <div className="row text-danger h5">Select Options For Filtering on Left Panel</div>
        <div className="row">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={settings.printType}
              onChange={() => this.handleCheckboxChange("printType")}
            />
            printType--(Restrict to books or magazines)
          </label>
        </div>
        <div className="row">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={settings.languages}
              onChange={() => this.handleCheckboxChange("languages")}
            />
            languages--(Restricts the volumes returned to those that are tagged with the specified language.)
          </label>
        </div>
        <div className="row">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={settings.filter}
              onChange={() => this.handleCheckboxChange("filter")}
            />
            filter--(Filter search results by volume type and availability.)
          </label>
        </div>
        <div className="row">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={settings.orderBy}
              onChange={() => this.handleCheckboxChange("orderBy")}
            />
            orderBy--(Order of the volume search results.)
          </label>
        </div>
        <div className="row">
           <h6 className="text-success"> No of entries on a page</h6> 
            <label>
            <input
              type="number"
              className="number"
              value={settings.maxResults}
              onChange={(e) => this.handleInputChange("maxResults", e.target.value)}
            />
          </label>
        </div>
      </div>
    );
  };


  render() {
    const { items = [] } = this.state.datas;
    const { languages, filters, Printtypes, orderBys, myBooks, currentPage,name,settings } = this.state;
    let {maxResults}=this.state.settings;

    let queryParams = queryString.parse(this.props.location.search);
    let items1 = [...items];
    let arr2 = items1.filter((ele) => myBooks.find((b1) => b1.id === ele.id));
    let { q } = this.props.match.params;
    q=q?q:name;
    let startIndex = +((currentPage - 1) * maxResults);
    let endIndex = +startIndex+ (+maxResults);

    console.log("qqqq", q);
    return q !== "myBooks"&& q!=="Settings" ? (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <OptionCBook
              options={queryParams}
              onOptionChange={this.handleOptionChange}
              languages={languages}
              filters={filters}
              Printtypes={Printtypes}
              orderBys={orderBys}
              settings={settings}
            />
          </div>
          <div className="col-9">
            <div className="row">
              <h3 className="text-info text-center">{q}</h3>
            </div>
            <div className="row text-danger">
              {startIndex+1}-{endIndex} entries
            </div>
            <div className="row">
              {items.map((book, index) => (
                <div className="col-3 bg-success border text-center" key={index}>
                  <div className="row">
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail || "placeholder_image_url"}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                  <h6 className="">{book.volumeInfo.title}</h6>
                  <p className="">{book.volumeInfo.authors?.join(", ")}</p>
                  {myBooks.some((b) => b.id === book.id) ? (
                    <button
                      className="bg-secondary btn-sm"
                      onClick={() => this.removeFromMyBooks(book)}
                    >
                      Remove from My Books
                    </button>
                  ) : (
                    <button
                      className="bg-secondary btn-sm"
                      onClick={() => this.addToMyBooks(book)}
                    >
                      Add to My Books
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-2">
                <button
                  className="btn btn-warning btn-sm"
                  disabled={currentPage === 1}
                  onClick={() => this.handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </div>
              <div className="col-8"></div>
              <div className="col-2">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => this.handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) :q==="myBooks"?( myBooks.length > 0 ? (
      <div className="row">
        {myBooks.map((book, index) => (
          <div className="col-3 bg-success border" key={index}>
            <div className="row">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || "placeholder_image_url"}
                alt={book.volumeInfo.title}
              />
            </div>
            <h6 className="">{book.volumeInfo.title}</h6>
            <p className="">{book.volumeInfo.authors?.join(", ")}</p>
            <button
              className="bg-secondary"
              onClick={() => this.removeFromMyBooks(book)}
            >
              Remove from My Books
            </button>
          </div>
        ))}
      </div>
    ) : (
      <div className="row bg-info ">
        <h3 className="text-warning text-center">No book added to MyBooks</h3>
      </div>
    )
    ):(
      this.renderSettingsForm()


      // <div className="container">

      //   <div className="row">
      //     <input type="checkbox" className="checkbox" />printType--(Restrict to books or magazines)
      //   </div>
      //   <div className="row">
      //     <input type="checkbox" className="checkbox" />languages--(Restricts the volumes returned to those that are tagged with the specified language.)
      //   </div>
      //   <div className="row">
      //     <input type="checkbox" className="checkbox" />filter--(Filter search results by volume type and availability.)
      //   </div>
      //   <div className="row">
      //     <input type="checkbox" className="checkbox" />orderBy--(Order of the volume search results.)
      //   </div>
      //   <div className="row">
      //     <input type="text" className="text" />No of entries on a page
      //   </div>
      // </div>
    );
  }
}

export default Books8;
