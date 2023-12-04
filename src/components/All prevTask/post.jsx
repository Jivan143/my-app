import React, { Component } from 'react';

class Post extends Component {


  handleLikeClick = () => {
    this.setState((ele) => ({
      numOfLikes: ele.numOfLikes + 1,
    }));
  };

  handleShareClick = () => {
    this.setState((ele) => ({
      numOfShares: ele.numOfShares + 1,
    }));
  };

  render() {
    const { heading, postedBy, txt, numOfLikes, numOfShares } = this.props.post;

    return (
      <div className='container '>
        <h2>{heading}</h2>
        <h4>Shared by: {postedBy}</h4>
        <p>{txt}</p>
        <p>
          Likes: {numOfLikes} <button className='btn btn-primary btn-sm' onClick={this.props.onLikeClick}>Like</button>
           Shared: {numOfShares} <button className='btn btn-primary btn-sm' onClick={this.props.onShareClick}>Share</button>
        </p>
        <hr />
      </div>
    );
  }
}


export default Post;
