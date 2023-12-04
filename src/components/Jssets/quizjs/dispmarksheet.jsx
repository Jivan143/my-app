import React from 'react';

const MarkingSheetComp1 = ({ questions, answers }) => (
  <div>
    <div className="marking-sheet-header">Marking Sheet</div>
    <ul>
      {questions.map((question, index) => (
        <li
          key={index}
          style={{ color: answers[index] === null ? 'red' : 'green' }}
        >
          Question {index + 1}: {answers[index] === null ? 'Not Answered' : `Chosen Option: ${question.options[answers[index]]}`}
        </li>
      ))}
    </ul>
  </div>
);

export default MarkingSheetComp1;
