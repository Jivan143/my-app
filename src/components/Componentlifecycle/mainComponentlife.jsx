import React,{Component} from "react";
import{Route,Switch} from "react-router-dom"
import NavBarlife from "./navbarlife";
import CompA from "./compA";
import CompB from "./compB";

class MainComponentlife extends Component{
    render(){

        return (
        <div className="container">
            <NavBarlife />
            <Switch>
            <Route path="/compA" component={CompA} />
            <Route path="/compB/:name" component={CompB} />
            </Switch>
        </div>
        )
    }
}
export default MainComponentlife;