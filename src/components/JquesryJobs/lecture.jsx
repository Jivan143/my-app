import React, { Component} from "react";
class Lecture extends Component {
    
    
    render() {
            const {lectures}=this.props
            const {courseName,lecId}=this.props.match.params;
            let lecture=lectures.find((lect)=>lect.id==+lecId);

        return<React.Fragment>
            <h4>Lecture</h4>
            <h6>Id:{lecture.id}</h6>
            <h6>Course:{lecture.course}</h6>
            <h6>Topic:{lecture.topic}</h6>

        </React.Fragment>
    }
}
export default Lecture;