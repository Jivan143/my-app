import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../httpService";
class Star extends Component {
  state = {
    star: {},
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    let response = await http.get(`/n${id}`);
    let { data } = response;
    console.log(data);

    this.setState({
      star: data,
    });
  }

  render() {
    const { star } = this.state;
    return (
      <div className="container">
        <h4>{star.name}</h4>
        <h5>Date of Birth: {star.details?.dob || "N/A"}</h5>
        <h6>Sport:{star.sport}</h6>
        <h6>Country: {star.country}</h6>
        <p>{star.details?.info || "Additional information not available."}</p>
        <Link to={`/stars/?category=${star.sport}`}>{star.sport} Star</Link>


        

      
      </div>
    );
  }
}

export default Star;
