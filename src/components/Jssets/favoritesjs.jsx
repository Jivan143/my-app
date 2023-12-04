import React, { Component } from "react";

class Favorites extends Component {
  render() {
    const imgStyle = {
      width: "100px", 
      padding:1,
    };

    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <div className="row">
          {this.props.favorites.map((favorite, index) => (
            <div className="col-2" key={index}>
              <img src={favorite} alt={"Favorite " + (index + 1)} style={imgStyle} onClick={() => this.props.removeFromFavorites(index)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
