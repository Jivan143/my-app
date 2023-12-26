// Homepage.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {
    searchQuery: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = () => {
    this.props.history.push(`/books/${encodeURIComponent(this.state.searchQuery)}`);
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="text-warning">Welcome to the Homepage</h1>
        <div className="col">
            {/* <div className="col-5"></div> */}
        <div className="m-1 text-center">
            <img
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="book"
            className="img-fluid"
            style={{
              borderRadius: "50%",
              width: "30%", 
              height: "30%", 
            }}
          />

          </div>
        </div>
        <div className="row m-2">
          <div className="col-9  text-center">
            <div className="row">
              <input
                type="text"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        
          <div className="col-2">
            <button className="btn btn-primary btn-sm" onClick={this.handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
