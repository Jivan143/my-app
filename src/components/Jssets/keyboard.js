import React, { Component } from "react";

class Keyboard extends Component {
  render() {
    const { currentKeyword, onKeyClick } = this.props;

    if (!currentKeyword) {
      return null;
    }

    const characters = currentKeyword.characters;

    return (
      <div className="container mt-3">
        <div className="row col-8 bg-info">
          {characters.split('').map((ele) => (
            <div className="col-1 p-2" >
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onKeyClick(ele)}
              >
                {ele}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Keyboard;
