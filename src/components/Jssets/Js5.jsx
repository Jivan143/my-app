import React, { Component } from "react";
import Keyboard from "./keyboard";
import TextField from "./textfield";

class Js5 extends Component {
  state = {
    keywords: [
      { name: "UpperCase", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
      { name: "LowerCase", characters: "abcdefghijklmnopqrstuvwxyz" },
      { name: "Digits", characters: "0123456789" },
      { name: "Special", characters: "!@#$%^&*()-_+=[]{}|\\;:'\"<>,.?/`~" },
    ],
    selectedCharacters: "",
    currentKeyword: null,
  };

  handleKeywordClick = (keywordName) => {
    const keyword = this.state.keywords.find((item) => item.name === keywordName);
    if (keyword) {
      this.setState({
        currentKeyword: keyword,
        selectedCharacters: "",
      });
    }
  };

  handleKeyClick = (key) => {
    if (this.state.currentKeyword) {
      this.setState((ele) => ({
        selectedCharacters: ele.selectedCharacters + key,
      }));
    }
  };

  render() {
    const { selectedCharacters, keywords, currentKeyword } = this.state;

    return (
      <div className="container">
        <div className="row col-8">
          {keywords.map((keyword) => (
            <div className="col-3" >
              <button
                className="btn btn-primary btn-sm"
                onClick={() => this.handleKeywordClick(keyword.name)} >
                {keyword.name}
              </button>
            </div>
          ))}
        </div>
        <Keyboard
          selectedCharacters={selectedCharacters}
          currentKeyword={currentKeyword}
          onKeyClick={this.handleKeyClick}
        />
        <TextField selectedCharacters={selectedCharacters} />
      </div>
    );
  }
}

export default Js5;
