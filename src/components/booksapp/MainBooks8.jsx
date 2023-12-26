import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar8 from "./Navbar8";
import Books8 from "./Books8";
import Homepage from "./homePage";

class MainBooks8 extends Component{


render(){ 
     return (
    <div className="container">
            <NavBar8 />

      <Switch>
      <Route path="/books/:q" component={Books8} />
      <Route path="/books" component={Books8} />
      <Route path="/Homepage" component={Homepage} />


        <Redirect from="/" to="/books" />
      </Switch>
    </div>
    );
  }
}
export default MainBooks8;