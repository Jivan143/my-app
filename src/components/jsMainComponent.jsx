import React,{Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import JsNavBar from "./JsNavBar";
import JsAddProduct from "./JsaddProduct";
import JsProduct from "./JsProduct";
import JsProducts from "./JsProducts";
class JsMainComponent extends Component{


    render (){
        return (
            <div className="container">
                <JsNavBar />
                <Switch>
                <Route path="/Jsproducts/add" component={JsAddProduct} />
                <Route path="/Jsproducts/:id" component={JsProduct} />
                <Route path="/Jsproducts" component={JsProducts} />
                <Redirect from="/" to="/Jsproducts"  />

                </Switch>
            </div>

        )
    }
}
export default JsMainComponent;