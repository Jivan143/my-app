import React, {Component} from "react";
import PhotoCamp from "./photoComp";
class PhotPage extends Component{
    state={
        photos:[
            { img:"https://picsum.photos/id/1032/240/160", like:23, dislike:2, myOption:''},
            { img:"https://picsum.photos/id/1051/240/160", like:8, dislike:0, myOption:''},
            { img:"https://picsum.photos/id/1079/240/160", like:83, dislike:37, myOption:'dislike'},
            { img:"https://picsum.photos/id/1084/240/160", like:19, dislike:1, myOption:'like'},
            { img:"https://picsum.photos/id/122/240/160", like:77, dislike:16, myOption:'like'},
            { img:"https://picsum.photos/id/164/240/160", like:6, dislike:3 , myOption:''},
        ],
    };

    handleDelete = (index) => {
        let s1={...this.state};
        let photo=s1.photos;
        photo.splice(index,1);
        this.setState(s1);
      
      };
    handleLike =(index) =>{
        let s1={...this.state};
        let photo=s1.photos[index];
        let {like,dislike,myOption}=photo;
        if(myOption==="like"){
            like--;
            myOption = "";
        }
        else if(myOption==="dislike"){
            like++;
            dislike--;
            myOption = "like";

        }
        else{
            like++;
            myOption = "like";
        }
    photo.like=like;
    photo.dislike=dislike;
    photo.myOption=myOption;
    this.setState(s1);
    };
    handleDislike =(index) =>{
        let s1={...this.state};
        let photo=s1.photos[index];
        let {like,dislike,myOption}=photo;
        if(myOption==="dislike"){
            dislike--;
            myOption = "";
        }
        else if(myOption==="like"){
            like--;
            dislike++;
            myOption = "dislike";

        }
        else{
            dislike++;
            myOption = "dislike";
        }
    photo.like=like;
    photo.dislike=dislike;
    photo.myOption=myOption;
    this.setState(s1);
    };

    render() {
        const {photos}=this.state;
        return <div className="container">
            <div className="row">
                {photos.map((p1, index) => (
                <PhotoCamp 
                    photo={p1} 
                    index={index} 
                    onLike={this.handleLike}
                    onDislike={this.handleDislike}
                    onDelete={this.handleDelete}

                    />
                ))}
            </div>
        </div>

    }
}
export default PhotPage;