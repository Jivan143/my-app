import React, { Component } from "react";
import { Link } from "react-router-dom";
class NewStore extends Component {
    state = {
        storeInfo:this.props.storeInfo,

      };
      handleChange=(e)=>{
        const{currentTarget:input}=e;
        let s1={...this.state};
        s1.storeInfo[input.name]=input.value;
    this.setState(s1);        
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.storeInfo);

     
  
        this.props.history.push("/stores");

    };
  
  render() {
     const {id,mobile,location,email}=this.state.storeInfo;

    return (
       <div className="container">
                <div className="form-group">
                    <label>Store Id</label>
                    <input type="text" className="form-control" id="id" name="id" placeholder="Enter Store Id"
                    value={id} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Location </label>
                    <input type="text" className="form-control" id="location" name="location" placeholder="Enter location"
                    value={location} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label> Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter email"
                    value={email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Mobile Number </label>
                    <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Enter mobiile number"
                    value={mobile} onChange={this.handleChange} />
                </div>
              

                <div className="col text-center">
                <button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>Submit</button>
                </div>
    </div>
    );
  }
}

export default NewStore;

   