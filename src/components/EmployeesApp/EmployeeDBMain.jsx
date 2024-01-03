import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EmpDBNav from "./EmpDBNav";
import NewEmpDB from "./NewEmpDB";
import EmployeeeDB from "./EmployeesDB";
import EmpDltDb from "./EmpdltDB";

class EmployeeMain extends Component{


render(){ 
     return (
    <div className="container">
            <EmpDBNav />

      <Switch>
      <Route path="/employees/add" component={NewEmpDB} />
      <Route path="/employees/:empCode/edit" component={NewEmpDB} />
      <Route path="/employees/:empCode/delete" component={EmpDltDb} />
      <Route path="/employees" component={EmployeeeDB} />


        <Redirect from="/" to="/employees" />
      </Switch>
    </div>
    );
  }
}
export default EmployeeMain;