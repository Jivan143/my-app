import React,{Component} from "react";
import PicViewer from "./picViewerjs";
import Favorites from "./favoritesjs";
class MainCompjs extends Component{
state = {
pics: ["https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ],
favorites: [],
currentIndex: 0,
isImageInFavorites: false,
};
addToFavorites = (currentIndex) => {
    const { pics, favorites } = this.state;
    const selectedPic = pics[currentIndex];

    if (!favorites.includes(selectedPic)) {
      this.setState((ele) => ({
        favorites: [...ele.favorites, selectedPic],
        isImageInFavorites: true,
      }));
    }
  };
  removeFromFavorites = (indexToRemove) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.filter((_, index) => index !== indexToRemove),
      isImageInFavorites: false,
    }));
  };
  previousPicture = () => {
    this.setState((ele) => ({
      currentIndex:
        ele.currentIndex === 0
          ? ele.pics.length - 1
          : ele.currentIndex - 1,
    }));
  };

  nextPicture = () => {
    this.setState((ele) => ({
      currentIndex:
        ele.currentIndex === ele.pics.length - 1
          ? 0
          : ele.currentIndex + 1,
    }));
  };
render (){
    let {pics,favorites,currentIndex,isImageInFavorites}=this.state;
    
    return (
      <div className="container p-5">
        <div className="container">
          <div className="box p-2">
            <div  className="row ">
            <PicViewer
              imageUrl={pics[currentIndex]}
              addToFavorites={() => this.addToFavorites(currentIndex)}

            />
          </div>
       </div>
       <div  className="row">
         <div className="col-6">
            <button className="btn btn-primary" onClick={this.previousPicture}>Previous</button>
            </div><div className="col-6">
            <button  className="btn btn-primary" onClick={this.nextPicture}>Next</button>
            </div>
            </div>
            <div className="container">

          <Favorites favorites={favorites}
         removeFromFavorites={this.removeFromFavorites}
          />
        </div>
      </div>
    </div>
      );
     
    }



}
export default MainCompjs;