import React, { Component } from 'react';

class Cell extends Component {
  render() {
    const { cellNo, value, onClickHandle } = this.props;

    return (
      <div
        className={"cell " + (value === -1 ? 'empty' : value === 0 ? '0' : 'x')}
        onClick={() => {
          if (value === -1) {
            onClickHandle(cellNo);
          }
        }}
      >
        {value === 0 ? '0' : value === 1 ? 'X' : ''}
      </div>
    );
  }
}

export default Cell;
