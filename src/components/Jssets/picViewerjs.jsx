import React, { Component } from "react";

class PicViewer extends Component {
  render() {
    return (
      <div className="col-6">
        <div>
        <img src={this.props.imageUrl} alt="Current Pic" />
        </div>
        <div className=" text-center">
        <button className="btn btn-primary" onClick={this.props.addToFavorites}>Add to Favorites</button>
        </div>
        </div>
    );
  }
}

export default PicViewer;
