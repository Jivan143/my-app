import React, { Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import CoursePage2 from "./coursePage";
import NavBar2 from "./navbar2";
import Welcome from "./welcome";
import Lecture from "./lecture";
import LecturesPage from "./LecturesPage";

class MainComponent2 extends Component{
    state={
        courses:["React","Angular","Javascript"],
        lectures:[
            {course:"React", id: 45, topic:"State"},
            {course:"React", id: 48, topic:"Props"},
            {course:"React", id: 54, topic:"Routing"},
            {course:"Angular", id: 46, topic:"Indroduction to Angular"},
            {course:"Angular", id: 47, topic:"Typescript"},
            {course:"Angular", id: 51, topic:"Angular Components"},
            {course:"Angular", id: 52, topic:"Routing"},
            {course:"Javascript", id: 40, topic:"Map"},
            {course:"Javascript", id: 41, topic:"Reduce"},
            {course:"Javascript", id: 42, topic:"Ternary"},
            {course:"Javascript", id: 43, topic:"Spread"},
            {course:"Javascript", id: 44, topic:"Object Destructing"},
            {course:"Javascript", id: 45, topic:"Literal Experssion"},
        ],
    };
    render() {
        const {lectures}=this.state;

        return(
            <div className="container">
                <NavBar2 />
                <Switch>
                <Route path="/course/:courseName" render={(props)=><CoursePage2 {...props} lectures={lectures} />} />
                <Route path="/lecture/:courseName/:lecId" render={(props)=><Lecture {...props} lectures={lectures} />} />
                <Route path="/stores" render={() => <LecturesPage lectures={lectures} />} />
                <Route path="/welcome" component={Welcome} />
                <Redirect from ="/" to ="/welcome" />
                
                </Switch> 

            </div>
        )
    }
}
export default MainComponent2;