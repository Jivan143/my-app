import React, { Component } from "react";

class PhotoCamp extends Component {

    bgColor =(par)=>{
        return par === "like" ? "bg-success" : par === "dislike" ? "bg-warning" : "bg-light";
    }  
  render() {
    const { photo,onLike,onDislike,onDelete,index } = this.props;
    const { img, like, dislike, myOption} = photo;
    return (
      <div className={"col-4 border text-center " + this.bgColor(myOption)}>
        <img src={img}  ></img>
        <br />
        <i className={myOption === "like" ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
        onClick={() => onLike(index)} >{like}</i>
        <i className={myOption === "dislike" ? "fas fa-thumbs-down" : "far fa-thumbs-down"}
        onClick={() => onDislike(index)} > {dislike}
        </i>
        <br />
        <i className="fas fa-trash " onClick={() => onDelete(index)}>  </i >    
         </div>
    );
  }
}

export default PhotoCamp;
