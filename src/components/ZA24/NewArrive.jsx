import React,{Component} from "react";
import http from "../httpService";

class NewArrive extends Component{

    state={
        book:{name:"",author:"",description:"",blurb:"",review:"",price:"",year:"",publisher:"",avgrating:"",genre:"",language:"",newarrival:"",bestseller:""},
        Genere:["Fiction","Children","Mystery","Management"],
        languages:["Latin","English","French","OthersTask"],

    };
    handleChange =(e)=>{
        const {currentTarget:input }=e;
        let s1={...this.state};
        s1.book[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.postData("/booksapp/book",this.state.book)

    };
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log("pds",response);
        this.props.history.push("/books");
    }
    render (){
        const {name,author,description,blurb,review,price,year,publisher,avgrating,genre,language,newarrival,bestseller}=this.state.book;
        const {Genere,languages}=this.state
        const {countries,sports}=this.state;

        return( <div className="container">
             <div className="row m-2">
                <div className="col-3  text-center "> Name</div>
                <div className="col-9">

                <input type="text" className="form-control" id="name" name="name" placeholder=""
                value={name} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Author</div>
            <div className="col-9">

                <input type="text" className="form-control" id="author" name="author" placeholder=""
                value={author} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> description</div>
            <div className="col-9">

                <input type="text" className="form-control" id="description" name="description" placeholder=""
                value={description} onChange={this.handleChange}    />
            </div>
            </div>
    
            <div className="row m-2">
            <div className="col-3  text-center"> Blurb</div>
            <div className="col-9">

                <input type="text" className="form-control" id="blurb" name="blurb" placeholder=""
                value={blurb} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Review</div>
            <div className="col-9">

                <input type="text" className="form-control" id="review" name="review" placeholder=""
                value={review} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Price</div>
            <div className="col-9">

                <input type="number" className="form-control" id="price" name="price" placeholder=""
                value={price} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Year</div>
            <div className="col-9">

                <input type="number" className="form-control" id="year" name="year" placeholder=""
                value={year} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Publisher</div>
            <div className="col-9">

                <input type="text" className="form-control" id="publisher" name="publisher" placeholder=""
                value={publisher} onChange={this.handleChange}    />
            </div>
            </div>
            <div className="row m-2">
            <div className="col-3  text-center"> Rating</div>
            <div className="col-9">

                <input type="text" className="form-control" id="avgrating" name="avgrating" placeholder=""
                value={avgrating} onChange={this.handleChange}    />
            </div>
            </div>



            <div className="row m-2">
            <div className="col-3  text-center"> Genre</div>
            <div className="col-9">

                <select  id="genre" name="genre" className="form-control bg-light" value={genre} onChange={this.handleChange}>
                    <option id="">Select Genre</option>
                    {Genere.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
                </div>

            </div>
            
            <div className="row m-2">
            <div className="col-3 text-center"> Language</div>
            <div className="col-9">
                <select  id="language" name="language" className="form-control bg-light" value={language} onChange={this.handleChange}>
                    <option id="">Select Languages</option>
                    {languages.map((ele,index)=>(
                        <option value={ele}>{ele}</option>

                    ))}

                </select>
                </div>
            </div>
           
            <div className="row m-2">
          <div className="col-3 text-center"> BestSeller</div>
          <div className="col-9">
            <label>
              <input
                type="radio"
                name="bestseller"
                value="Yes"
                checked={bestseller === "Yes"}
                onChange={this.handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="bestseller"
                value="No"
                checked={bestseller === "No"}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-3 text-center"> New Arrival</div>
          <div className="col-9">
            <label>
              <input
                type="radio"
                name="newarrival"
                value="Yes"
                checked={newarrival === "Yes"}
                onChange={this.handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="newarrival"
                value="No"
                checked={newarrival === "No"}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
        </div>
           <div className="col text-center">
            <button className="btn btn-primary m-2" onClick={this.handleSubmit} >Create</button>
            </div>
            </div>
            )
    }
}
export default NewArrive;