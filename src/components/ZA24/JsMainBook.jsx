import React,{Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import NavBarbook from "./NavBarbook";
import BooksApp from "./BooksApp";
import NewArrive from "./NewArrive";
import BookDetails from "./Bookdetails";
class JsMainBooks extends Component{



    render (){
        return (
            <div className="container">
            <NavBarbook />
        <Switch>
        <Route path="/books/:genre" component={BooksApp} />
        <Route path="/book/new" component={NewArrive} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/books" component={BooksApp} />

            <Redirect from="/" to="/books" />
            </Switch>


</div>
        )
    }
}
export default JsMainBooks;