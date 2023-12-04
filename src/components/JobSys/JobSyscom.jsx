import React,{Component} from "react";
import NavBarJob from "./NavBarjob";
import { Route,Switch,Redirect } from "react-router-dom";
import MainJobTable from "./MainJobtable";
class JobSysCom extends Component{
    state={
        data:[{name: "Amit",course: "BTech",year: 2019,status: "Studying",tech: "React"},{name: "Praveen",course: "BSc",year: 2020,status: "Studying",tech: "Angular"},{name: "Namita",course: "MCA",year: 2021,status: "Studying",tech: "Android"},{name: "Anuradha",course: "MTech",year: 2019,status: "Studying",tech: "Android"},{name: "Kavita",course: "BCA",year: 2020,status: "Studying",tech: "React"},{name: "Manish",course: "BTech",year: 2016,status: "Working",tech: "React"},{name: "Gautam",course: "BTech",year: 2017,status: "Working",

        tech: "Angular"},{name: "Radhika",course: "MCA",year: 2016,status: "Working",tech: "React"},{name: "Charu",course: "MTech",year: 2018,status: "Searching",tech: "Android"},{name: "Divya",course: "BCA",year: 2019,status: "Preparing",tech: "Angular"},{name: "Pradeep",course: "BTech",year: 2016,status: "Working",tech: "React"},{name: "Siddhartha",course: "MCA",year: 2016,status: "Working",tech: "Angular"},{name: "Prachi",course: "MCA",year: 2016,status: "Searching",tech: "Android"},{name: "Charu",course: "MTech",year: 2018,status: "Preparing",
        tech: "React"},{name: "Harsh",course: "BSc",year: 2019,status: "Preparing",tech: "Angular"}]

    }

    render (){
         const {data}=this.state
        return (<div className="container">
            <NavBarJob/>
            <Switch>
                <Route path="/course/:courseName/:no" render={(props)=><MainJobTable {...props} data={data} />} />
                <Route path="/course" render={() => <MainJobTable data={data} />} />
                <Redirect from ="/" to ="/all" />
                

            </Switch> 
            </div>
        )
    }

}
export default JobSysCom;