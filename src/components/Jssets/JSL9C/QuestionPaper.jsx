import React, { Component } from "react";

class QuestionPaper extends Component {
  state = {
    papername: "",
    selectedQuestions: [], 
  };

  handleInputChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "papername") {
      this.setState({
        [name]: value,
      });
    } else if (name === "question") {
      let selectedQuestions = [...this.state.selectedQuestions];

      if (checked) {
        selectedQuestions.push(value);
      } else {
        selectedQuestions = selectedQuestions.filter((question) => question !== value);
      }

      this.setState({ selectedQuestions });
    }
  };

  handlePaperSubmit = () => {
    const { papername, selectedQuestions } = this.state;
    if (papername === "") {
      return;
    }
    this.props.onQuestionPaperAdd(papername, selectedQuestions);

    this.setState({
      papername: "",
      selectedQuestions: [], 
    });
  };

  render() {
    const { questions } = this.props;
    const { papername, selectedQuestions } = this.state;

    return (
      <div className="container">
        <div className="row">
          Name of Question Paper <br />
          <input type="text"value={papername}name="papername"id="papername"placeholder="Enter Paper Name"
            onChange={this.handleInputChange}
          />
        </div>
        {questions.map((ele, index) => (
          <div className="row" key={index}>
            <label>
              <input type="checkbox"value={ele.qnText}id={`question${index}`}name="question"
                checked={selectedQuestions.includes(ele.qnText)}onChange={this.handleInputChange}
              />{" "}
              {index+1} {ele.qnText} ?
            </label>
          </div>
        ))}
        <div className="col m-2">
          <button
            className="btn btn-primary text-center m-2"
            type="submit"
            onClick={this.handlePaperSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionPaper;
