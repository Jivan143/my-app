import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MobileTable from "./mobileDBtable";
import MobileNav from "./mobilDBNav";
import NewMobileDB from "./newMobiles";
import MobileDltDb from "./mobileDlt";

class MobileDBMain extends Component{


render(){ 
     return (
    <div className="container">
            <MobileNav />

      <Switch>
      <Route path="/mobiles/add" component={NewMobileDB} />
      <Route path="/mobiles/:id/edit" component={NewMobileDB} />
      <Route path="/mobiles/:id/delete" component={MobileDltDb} />
      <Route path="/mobiles" component={MobileTable} />


        <Redirect from="/" to="/mobiles" />
      </Switch>
    </div>
    );
  }
}
export default MobileDBMain;