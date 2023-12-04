
import React,{ Component} from "react";
import QuestionComp from "./QuestionComp";
import MarkingSheetCom from "./MarkingSheeetComp";

class MainQuestionComp extends Component {
  state = {
    currentQuestionIndex: 0,
    answers: Array(15).fill(null),
    showMarkingSheet: false,
    selectedOption: "",
  };

  handleOptionClick = (selectedOptionIndex) => {
    const updatedAnswers = [...this.state.answers];
    this.props.onAnswersChange(updatedAnswers);
    let s1 = { ...this.state };

    let option = ["A", "B", "C", "D"];

    updatedAnswers[s1.currentQuestionIndex] = option[selectedOptionIndex];
    console.log("abc", selectedOptionIndex);
    this.setState({ answers: updatedAnswers, selectedOption: option[selectedOptionIndex] });
  };

  handlePrevQuestion = () => {
    this.setState((ele) => ({
      currentQuestionIndex: ele.currentQuestionIndex - 1,
      selectedOption: "",
    }));
  };

  handleNextQuestion = () => {
    this.setState((ele) => ({
      currentQuestionIndex: ele.currentQuestionIndex + 1,
      selectedOption: "",
    }));
  };

  handleTableShow = (index) => {
    this.setState({ showMarkingSheet: true, currentQuestionIndex: index });
  };

  handleAssignmentSubmitted = () => {
    this.props.onAssignmentSubmitted();
  };

  calculatePerformance = () => {
    this.props.calculatePerformance();
  };

  render() {
    const { currentQuestionIndex, answers, showMarkingSheet, selectedOption } = this.state;
    const { questions, subject, name, allans,showmask} = this.props;
    const currentQuestion = questions[currentQuestionIndex];
    let mask=showmask==1?showmask:0;
    let ans=showmask==1?allans:answers
console.log("answer",answers);
console.log("allans",allans);

    return (
      <div className="container">
        <div className="header bg-light">
          <div className="h3 text-center">
            {subject}:{name}
          </div>
          <div className="row">
            <div className="col-8 m-2">Time: 5 mins</div>
            <div className="col-3 m-2">
              Max Score: {questions.length}
            </div>
          </div>
        </div>
        <div className="container">
          {!showMarkingSheet &&showmask==0 ? (
            <>
              <div className="row">
                <div className="text-center mt-3">
                  <button className="btn btn-primary" onClick={this.handleTableShow}>View Marking Sheet</button>
                </div>
              </div>
              <QuestionComp
                question={currentQuestion}
                questionNumber={currentQuestionIndex}
                selectedOption={selectedOption}
                onOptionClick={this.handleOptionClick}
              />
              <div className="row">
                <div className="col-6">
                  <button
                    className="btn btn-primary mr-2"
                    onClick={this.handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </button>
                </div>
                <div className="col-6 text-center">
                  <button
                    className="btn btn-primary"
                    onClick={this.handleNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <MarkingSheetCom
              questions={questions}
              answers={ans}
              showmask={showmask}
              updatedArr={this.state.answers}
              index={this.state.currentQuestionIndex}
              handleTableShow={this.handleTableShow}
              onAssignmentSubmitted={this.handleAssignmentSubmitted}
              calculatePerformance={this.calculatePerformance}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MainQuestionComp;
