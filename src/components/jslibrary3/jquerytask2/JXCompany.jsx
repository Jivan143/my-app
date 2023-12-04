import React, {Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import NavBar4 from "./Navbar4";
import About from "./About";
import Offices from "./Offices";
import Employee from "./Employee";
import Location from "./location";
import Emp from "./emp";
import NewEmp from "./NewEmp";
class JXCompany extends Component{

state={
    emps: [{id: "JX103",name: "Jack Wilson",dept: "Technology",designation: "Manager",},
            {id: "JX125",name: "Mary Gomes",dept: "Operations",designation: "Vice President",},
            {id: "JX086",name: "George Mason",dept: "Finance",designation: "Trainee",},
            {id: "JX259",name: "Jim Smith",dept: "HR",designation: "Executive",},
            {id: "JX009",name: "Tim Watson",dept: "Marketing",designation: "Manager",},
            {id: "JX188",name: "Anna Gates",dept: "Technology",designation: "Trainee",},
            {id: "JX423",name: "Bob Andrews",dept: "Technology",designation: "Trainee",},
            {id: "JX525",name: "Ted Cotton",dept: "Technology",designation: "Vice President",},
            {id: "JX636",name: "William Smith",dept: "Finance",designation: "Executive",},
            {id: "JX749",name: "Billy Norton",dept: "Finance",designation: "Executive",},
            {id: "JX859",name: "Julia Smith",dept: "Marketing",designation: "Executive",},
            {id: "JX968",name: "Meg Conte",dept: "Technology",designation: "Trainee",},
            {id: "JX156",name: "Corey Andrews",dept: "Technology",designation: "Manager",},
            {id: "JX157",name: "Larry King",dept:"Operations",designation: "Manager",},
            {id: "JX058",name: "Michael Mason",dept: "Finance",designation: "Manager",},
            {id: "JX269",name: "Wally Smith",dept: "HR",designation: "Executive",},
            {id: "JX080",name: "Tara Reid",dept: "Marketing",designation: "Manager",},
            {id: "JX191",name: "Alfred Myers",dept: "Technology",designation: "Trainee",},],
    offices: [{id: 1,city: "SanFrancisco",address: "1600 Amphitheatre Pkwy, Mountain View, CA 94043",},
              {id: 2,city: "Bengaluru",address:"Swami Vivekananda Rd, Sadanandanagar, Bennigana Halli, Bengaluru",},
              {id: 3,city: "London",address: "Belgrave House, 76 Buckingham Palace Rd, Belgravia, London",},]
}



handleAddEmployee =(pr)=>{
  let s1={...this.state};
  console.log(pr);
  s1.emps.push(pr);
  this.setState(s1);
}
    render (){
        const {emps,offices}=this.state;

        return(
            <div className="container">
                  <NavBar4 />
              <Switch>
          <Route path="/company/NewEmp" render={(props)=><NewEmp {...props} emps={emps}  EmpInfo={{}} onSubmit={this.handleAddEmployee} />} />
          <Route path="/company/employee" render={(props) => <Employee {...props} emps={emps} />} />
          <Route path="/company/offices" render={(props) => <Offices {...props} offices={offices} />} />

          <Route path="/location/:city" render={(props) => <Location {...props} offices={offices} />} />
          <Route path="/emp/:id" render={(props) => <Emp {...props} emps={emps} />} />
          <Route path="/employee/:dept/:page" render={(props)=><Employee {...props} emps={emps} />} />
          
          <Route path="/company/about" component={About} />


          <Redirect from="/" to="/company/about" />
        </Switch>
      </div>
    );
  }
}
export default JXCompany;