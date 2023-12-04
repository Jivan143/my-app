
import React,{Component} from "react";
import Post from "./post";
class SocialMeadiPost extends Component{
    state = 
    {posts: [{postId: 255,heading: "World Cup Semi-final",postedBy: "Vishal",numOfLikes: 45,numOfShares: 10,txt: "India lost to New Zealand in the world cup. Very Bad."},
    {postId: 377,heading: "What a final",postedBy: "Mohit",numOfLikes: 18,numOfShares: 4,txt: "Was anyone awake to see the final. England won by boundary count."},
    {postId: 391,heading: "Was it 5 runs on 6 six runs",postedBy: "Preeti",numOfLikes: 29,numOfShares: 7,txt:"I feed sorry for New Zealand. If the ball had not hit the bat and no overthrows, New Zealand would have won."},
    {postId: 417,heading: "Will Dhoni retire",postedBy: "Hemant",numOfLikes: 66,numOfShares: 24,txt:"Is this Dhoni's final match. Will be ever see Dhoni playing for India."},
],
};

handleLikeClick = (postId) => {
    this.setState((prevState) => {
      const updatedPosts = prevState.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            numOfLikes: post.numOfLikes + 1
          };
        }
        return post;
      });
      return {
        posts: updatedPosts
      };
    });
  };

  handleShareClick = (postId) => {
    this.setState((prevState) => {
      const updatedPosts = prevState.posts.map((post) => {
        if (post.postId === postId) {
          return {
            ...post,
            numOfShares: post.numOfShares + 1
          };
        }
        return post;
      });
      return {
        posts: updatedPosts
      };
    });
  };
render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <Post key={post.postId} post={post}
          onLikeClick={() => this.handleLikeClick(post.postId)}
          onShareClick={() => this.handleShareClick(post.postId)}


          />
        ))}
      </div>
    );
  }
}

export default SocialMeadiPost;






