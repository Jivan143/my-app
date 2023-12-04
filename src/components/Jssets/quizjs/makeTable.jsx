import React, { Component } from "react";

class MakeTable extends Component {



     markAsDone = (index) => {
        const updatedData = [...this.state.data];
        updatedData[index].isDone = true;
        this.setState({ data: updatedData });
    }

    handlequestions = (index) => {
        let s1 = { ...this.state };
        s1.assignmentindex = index;
        s1.tableshow = 0;
        this.setState(s1);
    }

    render() {
        const { data, onquestion } = this.props;


        return (
            <div className="container">
                <div className="row bg-dark text-light">
                    <div className="col-3">Subject</div>
                    <div className="col-3">Assignment</div>
                    <div className="col-3">Performance</div>
                    <div className="col-3"></div>
                </div>
                {data.map((ele, index) => (
                    <div className="row border" key={index}>
                        <div className="col-3">{ele.subject}</div>
                        <div className="col-3">{ele.name}</div>
                        <div className="col-3">
                            {ele.isDone ? (1 + '/' + ele.questions.length) : "Not done"}
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary btn-sm" onClick={() => onquestion(index)}>Do</button>
                            {ele.isDone ? <button className="btn btn-success btn-sm m-2" onClick={() => this.markAsDone(index)}>Check</button> : ""}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MakeTable;
