import React, { Component } from 'react';

class QuestionComp1 extends Component {
  handleOptionClick = (option) => {
    this.props.onAnswer(option);
  };

  render() {
    const { question, answer } = this.props;

    return (
      <div>
        <div>{question}</div>
        <ul>
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => this.handleOptionClick(index)}
              style={{ cursor: 'pointer', color: answer === index ? 'green' : 'red' }}
            >
              {answer === null ? 'Not Answered' : 'Chosen Option: '}
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionComp1;
