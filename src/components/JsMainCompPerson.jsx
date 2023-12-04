import React,{Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import JsPersons from "./Jsperson";
import Js1NavBar from "./Js1NavBar";
import Person from "./person";
import AddPerson from "./addPerson";
import DeletePerson from "./JsdeletePerson";
class JsMainCompPerson extends Component{


    render (){
        return (
            <div className="container">
                <Js1NavBar />
                <Switch>
                <Route path="/persons/add" component={AddPerson} />
                <Route path="/persons/:id/delete" component={DeletePerson} />
                <Route path="/persons/:id/edit" component={AddPerson} />
                <Route path="/persons/:id" component={Person} />
                <Route path="/persons" component={JsPersons} />

                <Redirect from="/" to="/persons"  />

                </Switch>
            </div>

        )
    }
}
export default JsMainCompPerson;