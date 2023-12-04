import React, { Component } from "react";
class QuestionComp extends Component {
  state = {
  selectedOptionIndex: -1,
  arr:[],
  alphabet:['A','B','C','D'],


};
handleOptionClick = (selectedOptionIndex) => {
  const { onOptionClick,  questionNumber} = this.props;
  const selectedOptionText = this.props.question.options[selectedOptionIndex];
  let s1={...this.state};
  this.setState(
    (ele) => ({
      arr: [...ele.arr, s1.alphabet[selectedOptionIndex]],
      selectedOption: s1.alphabet[selectedOptionIndex],
    }),
 
  );

  onOptionClick(selectedOptionIndex);
};


  render() {
    const { question } = this.props;
    const { selectedOption ,questinnumber} = this.props;
    const {alphabet}=this.state;

    return (
      <div>
        <div className="row">Question Number:{questinnumber+1}</div>
        <div className="row">{question.text}</div>
        <div className="row">
          {question.options.map((option, index) => {
            return (
              <div key={index} className="radio-option" onClick={() => this.handleOptionClick(index)}>
                <p>{alphabet[index]}.{option} </p>
               
              </div>
            );
          })}
        </div>
        <div className="row">
          {selectedOption ? (
            <p>Your Answer: {selectedOption}</p>
          ) : (
            <p> Your Answer: Not answered</p>
          )}
        </div>
        
      </div>
    );
  }
}

export default QuestionComp;

