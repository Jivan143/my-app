import React, { Component } from "react";

class MarkingSheetCom extends Component {
  state={
    questionsindex:1,
  }
  handlesubmit = () => {
    this.props.onAssignmentSubmitted();
  }
  showquestion =(index)=>{
    let s1
    

  }

  calculatePerformance = () => {
  
    const { questions, answers } = this.props;
    const totalQuestions = questions.length;
    const answeredQuestions = answers.filter(answer => answer !== null).length;
    const unansweredQuestions = totalQuestions - answeredQuestions;
    return { answeredQuestions, unansweredQuestions };
  }

  render() {
    const { questions, answers, updatedArr,showmask } = this.props;

    return (
      <div className="row marking-sheet">
        {questions.map((question, index) => {
          const questionNumber = index + 1;
          const isAnswered = answers[index] !== null;
          const selectedOption = isAnswered ? answers[index] : null;
          let color=showmask===1 ?( question.answer===answers[index] ?"bg-success":"bg-danger"):"bg-dark text-light"


          return (
            <div className="col-2" key={index}>
              <button className={"question col-12 m-2 " + (isAnswered ? "answered bg-dark text-light" : "unanswered bg-warning")}>
                {isAnswered ? (
                  <div className={"answered-option " +(color)}>
                    {questionNumber + ". " + selectedOption}
                  </div>
                ) : (
                  <div className={"unanswered-option "}>
                    {questionNumber + "."}
                  </div>
                )}
              </button>
            </div>
          );
        })}
        <div className="text-center">
          <button className="btn btn-secondary text-light" onClick={this.handlesubmit}>Submit the Assignment</button>
        </div>
      </div>
    );
  }
}

export default MarkingSheetCom;
