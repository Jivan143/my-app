import React,{Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import NavBarSports from "./NavBarSports";
import SportsStar from "./SportsStar";
import Star from "./Star";
import AddSport from "./AddSport";
class JsMainSports extends Component{


    render (){
        return (
            <div className="container">
                <NavBarSports />
            <Switch>
                <Route path="/stars/sportName/:sportName" component={SportsStar} />
                <Route path="/stars/add" component={AddSport} />
                <Route path="/stars/:id" component={Star} />
                <Route path="/stars/:page" component={SportsStar} />
                <Route path="/stars" component={SportsStar} />
                <Redirect from="/" to="/stars" />
            </Switch>


            </div>

        )
    }
}
export default JsMainSports;