import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CustNav from "./custNav";
import Customerss from "./Customerss";
import AddCust from "./AddCust";
import customerDlt from "./customerDlt";

class CustomerMain extends Component{


render(){ 
     return (
    <div className="container">
            <CustNav />

      <Switch>
      <Route path="/customers/add" component={AddCust} />
      <Route path="/customers/:id/edit" component={AddCust} />
      <Route path="/customers/:id/delete" component={customerDlt} />
      <Route path="/customers" component={Customerss} />


        <Redirect from="/" to="/customers" />
      </Switch>
    </div>
    );
  }
}
export default CustomerMain;