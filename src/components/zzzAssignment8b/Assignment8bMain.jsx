import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AssignmentNavbar from "./AssignmentNavBar";
import AssignmentPurchases from "./AssignmentPurchases";
import AssignmentShops from "./AssignmentShops";
import AssignmentProducts from "./AssignmentProductus";
import AssignmentAddProd from "./AssignmentAddProduct";
import AssignmentAddShop from "./AssignmentAddshop";
import TotalPurchases from "./ToatalPurchase";
import AssignmentAddPurch from "./AssignmentAddPurch";

class AssignmentMain extends Component{


render(){ 
     return (
    <div className="container">
            <AssignmentNavbar />

      <Switch>
      <Route path="/shops/add" component={AssignmentAddShop} />
      <Route path="/shops/:shopid/edit" component={AssignmentAddShop} />
      <Route path="/products/add" component={AssignmentAddProd} />
      <Route path="/purchases/add" component={AssignmentAddPurch} />
      <Route path="/products/:productid/edit" component={AssignmentAddProd} />
      <Route path="/purchases/:purchaseid/edit" component={AssignmentAddPurch} />
      <Route path="/purchases/shops/:shopid" component={AssignmentPurchases} />
      <Route path="/totalPurchase/shop/:shopid" component={TotalPurchases} />
      <Route path="/purchases/products/:productid" component={AssignmentPurchases} />
      <Route path="/totalPurchase/product/:productid" component={TotalPurchases} />
      <Route path="/purchases" component={AssignmentPurchases} />
      <Route path="/products" component={AssignmentProducts} />
      <Route path="/shops" component={AssignmentShops} />


        <Redirect from="/" to="/" />
      </Switch>
    </div>
    );
  }
}
export default AssignmentMain;