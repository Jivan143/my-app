import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CarNav from "./carNav";
import AddCar from "./Addcar";
import Carss from "./cars";
import CarsDlt from "./carsdlt";

class MainComponentCar extends Component{


render(){ 
     return (
    <div className="container">
            <CarNav />

      <Switch>
      <Route path="/cars/add" component={AddCar} />
      <Route path="/cars/:id/edit" component={AddCar} />
      <Route path="/cars/:id/delete" component={CarsDlt} />
      <Route path="/cars" component={Carss} />


        <Redirect from="/" to="/cars" />
      </Switch>
    </div>
    );
  }
}
export default MainComponentCar;