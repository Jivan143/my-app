import React,{Component} from "react";
import http from "../httpService";
import queryString from "query-string";
import { Link } from "react-router-dom";
import OptionsCBbook from "./OptionCBbook";
class BooksApp extends Component{
    state={
        data:{},
        refineOptions:{},
        books:[],
        pageInfo:[],
        langList:['French','English','Latin','Other'],
        bestList:['Yes','No'],

    }
    async fetchData (){
        let queryParams=queryString.parse(this.props.location.search);
        let searchStr=this.makeSearchString(queryParams);

        let response=await http.get(`/booksApp/books/?${searchStr}`);
  let {pageInfo,books,refineOptions}=response.data;
  console.log(refineOptions);

    this.setState({
        pageInfo:pageInfo,
        refineOptions:refineOptions,
       books:books,
    })
    }
   
     componentDidMount (){
        this.fetchData();
        
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps !==this.props)  this.fetchData();
    }


    handlePage=(v1)=>{
        let queryParams=queryString.parse(this.props.location.search);
        let { page= "1"}=queryParams;
        let newPage= +page + v1;
        queryParams.page=newPage;
        this.callURL("/books",queryParams);
    }
    callURL=(url,options)=>{
        let searchString=this.makeSearchString(options);
        this.props.history.push({
            pathname:url,
            search:searchString,
        });
    };
    makeSearchString=(options)=>{
        let {page,bestseller,language}=options;
        let searchStr = "";
        searchStr = this.addToQueryString(searchStr,"page",page);
        searchStr = this.addToQueryString(searchStr,"language",language);
        searchStr = this.addToQueryString(searchStr,"bestseller",bestseller);
        return searchStr;
    };
    addToQueryString=(str, paramName, paramValue)=>{
        return paramValue
            ? (str ? `${str}&${paramName}=${paramValue}` : `${paramName}=${paramValue}`)
            : str;
    }
    handleOptionChange=(options)=>{
        options.page="1";
        this.callURL("/books",options);
    }

render (){
      const {books,pageInfo,langList,bestList,refineOptions}=this.state;
      let {pageNumber,numberOfPages,numOfItems,totalItemCount}=pageInfo;
      let quesryParams=queryString.parse(this.props.location.search);
      let languages=refineOptions.language||[];
      let bestsellers=refineOptions.bestseller||[];

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h4 className="m-2">Options</h4>
            <OptionsCBbook
            options={quesryParams}
            languages={languages}
            bestsellers={bestsellers}
            onOptionChange={this.handleOptionChange}

            />
                </div>
            <div className="col-9">
          <h4> {pageInfo.pageNumber} to {pageInfo.numberOfPages} of {pageInfo.totalItemCount}</h4> 
            <div className="row bg-primary  text-dark">
            <div className="col-3">Title</div>
            <div className="col-3">Author</div>
            <div className="col-2">Language</div>
            <div className="col-2">Genre</div>
            <div className="col-1">Price</div>
            <div className="col-1">Bes.</div>
            </div>
                {books.map((ele)=>(
                        <div className="row " key={ele}>
                          <div className="col-3 border">  <Link to={`/book/${ele.bookid}`}>{ele.name}</Link></div>
                          <div className="col-3 border">{ele.author}</div>
                          <div className="col-2 border">{ele.language}</div>
                          <div className="col-2 border">{ele.genre}</div>
                          <div className="col-1 border">{ele.price}</div>
                          <div className="col-1  border">{ele.bestseller}</div>
                        </div>

                ))}
                  <div className="row">
                <div className="col-2">{pageNumber>1 ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(-1)}>Prev</button>):("") }</div>
                <div className="col-8"></div>
                <div className="col-2">{pageNumber < numberOfPages ?(<button className="btn btn-primary btn-sm" onClick={()=>this.handlePage(1)}>Next</button>):("") }</div>
                </div>
                </div>


        </div>
        </div>
    )
}
}
export default BooksApp;