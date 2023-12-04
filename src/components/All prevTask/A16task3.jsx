import React, { Component } from "react";

class A16Task3 extends Component {
  state = {
    locs: [
      { country: "India", cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"] },
      { country: "USA", cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"] },
      { country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"] },
      { country: "Japan", cities: ["Tokyo", "Kyoto"] },
      { country: "China", cities: ["Shanghai", "Beijing", "Shenzen"] },
    ],
    country: "",
    city: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const { country, city } = this.state;
    if (country && city) {
      alert("Country: " + country + ",City: " + city);
    } else {
      alert("Please select both a country and a city.");
    }
  };
  
  render() {
    const { locs, city, country } = this.state;
    const selectedCountry = locs.find((loc) => loc.country === country);

    return (
      <div className="container">
        <div className="form-group">
          <label>Country</label>
          <select className="form-control" name="country" value={country} onChange={this.handleChange}>
            <option disabled value=""> Choose Country</option>
            {locs.map((c1) => (
              <option key={c1.country}>{c1.country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>City</label>
          <select className="form-control" name="city" value={city} onChange={this.handleChange}>
            <option disabled value=""> Choose City</option>
            {selectedCountry && selectedCountry.cities.map((c1) => (
              <option key={c1}>{c1}</option>
            ))}
          </select>
        </div>
        <div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default A16Task3;
