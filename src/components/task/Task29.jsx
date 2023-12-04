import React,{Component} from "react";
class Task29 extends Component{
    state={
        moviesdata: [
            { title: 'Terminator', genre: 'Action', stock: 6, rate: 2.5 },
            { title: 'Die Hard', genre: 'Action', stock: 5, rate: 2.5 },
            { title: 'Get Out', genre: 'Thriller', stock: 8, rate: 3.5 },
            { title: 'Trip to Italy', genre: 'Comedy', stock: 7, rate: 3.5 },
            { title: 'Airplane', genre: 'Comedy', stock: 7, rate: 3.5 },
            { title: 'Wedding Crashers', genre: 'Comedy', stock: 7, rate: 3.5 },
            { title: 'Gone Girl', genre: 'Thriller', stock: 7, rate: 4.5 },
            { title: 'The Sixth Sense', genre: 'Thriller', stock: 4, rate: 3.5 },
            { title: 'The Avengers', genre: 'Action', stock: 7, rate: 3.5 }
          ],
        };

    deletemovie=(index)=>{
        let {moviesdata}=this.state;
        let updatemov=[...moviesdata];
        updatemov.splice(index,1);
        this.setState({moviesdata:updatemov});
    };
    sort = (column) => {
        const { moviesdata } = this.state;
        let sortedmovie = [...moviesdata];
    
        sortedmovie.sort((a, b) => {
          if (column === "Title") {
            return a.title.localeCompare(b.title);
        } else if (column === "Genre") {
            return a.genre.localeCompare(b.genre);
          } else if (column === "Stock") {
            return a.stock - b.stock;
          } else if (column === "Rate") {
            return a.rate - b.rate;
          }
          return 0;
        });
    
        this.setState({
          moviesdata: sortedmovie,
        });
      };
      
    showmovie=()=>{
        let{moviesdata}=this.state;
let count=moviesdata.length>0?'Showing '+moviesdata.length +' movies':'No movies in the list';
        return(
            <div>
                <div className="row"><h3>{count}</h3></div>
                <div className="row border text-center">
                <div className="col-3 " onClick={() => this.sort("Title")}>Title</div>
                <div className="col-2 " onClick={() => this.sort("Genre")}>Genre</div>
                <div className="col-2 " onClick={() => this.sort("Stock")}>Stock</div>
                <div className="col-2 " onClick={() => this.sort("Rate")}>Rate</div>
                <div className="col-3"></div>
                </div>
        {moviesdata.map((ele,index)=>{
            let {title,genre,stock,rate}=ele;
            return(
                <div className="row  border text-center ">
                <div className="col-3 ">{title}</div>
                <div className="col-2 ">{genre}</div>
                <div className="col-2 ">{stock}</div>
                <div className="col-2 ">{rate}</div>
                <div className="col-3 "><button className="btn btn-danger  sm-2" onClick={() => this.deletemovie(index)}>delete</button></div>

              </div>
            )
        })}

            
            
            </div>
        )
    }

    render() {
        return (
          <React.Fragment>
            {this.showmovie()}
          </React.Fragment>
        );
      }
    }
    
    export default Task29;