import React, { Component} from "react";
import MainQuestionComp from "./mainQuestionComp";
import MarkingSheetCom from "./MarkingSheeetComp";
import QuestionComp from "./QuestionComp";
class NewExp extends Component {
    state={
       data: [
            {
              subject: "General Knowledge",name: "4A",
              questions: [
                {text: "What is the capital of India",options: ["New Delhi", "London", "Paris", "Tokyo"],answer: 1},
                {text: "What is the capital of Italy",options: ["Berlin", "London", "Rome", "Paris"],answer: 3},
                {text: "What is the capital of China",options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],answer: 4},
                {text: "What is the capital of Nepal",options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],answer: 2},
                {text: "What is the capital of Iraq",options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],answer: 1},
                {text: "What is the capital of Bangladesh",options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],answer: 4},
                {text: "What is the capital of Sri Lanka",options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],answer: 2},
                {text: "What is the capital of Saudi Arabia",options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],answer: 1},
                {text: "What is the capital of France",options: ["London", "New York", "Paris", "Rome"],answer: 3},
                {text: "What is the capital of Germany",options: ["Frankfurt", "Budapest", "Prague", "Berlin"],answer: 4},
                {text: "What is the capital of Sweden",options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],answer: 2},
                {text: "What is the currency of UK",options: ["Dollar", "Mark", "Yen", "Pound"],answer: 4},
                {text: "What is the height of Mount Everest",options: ["9231 m", "8848 m", "8027 m", "8912 m"],answer: 2},
                {text: "What is the capital of Japan",options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],answer: 4},
                {text: "What is the capital of Egypt",options: ["Cairo", "Teheran", "Baghdad", "Dubai"],answer: 1}
              ],
              isDone: false,
            },
            {subject: "Maths",name: "10C",
            questions: [
                {text: "What is 8 * 9",options: ["72", "76", "64", "81"],answer: 1},
                {text: "What is 2*3+4*5",options: ["70", "50", "26", "60"],answer: 3}
              ],
              isDone: false,
            },
            {subject: "Chemistry",name: "7A(i)",
              questions: [
                {text: "What is the melting point of ice",options: ["0F", "0C", "100C", "100F"],answer: 2},
                {text: "What is the atomic number of Oxygen",options: ["6", "7", "8", "9"],answer: 3},
                {text: "What is the atomic number of Carbon",options: ["6", "7", "8", "9"],answer: 1},
                {text: "Which of these is an inert element",options: ["Flourine", "Suphur", "Nitrogen", "Argon"],answer: 4},
                {text: "What is 0 Celsius in Fahrenheit",options: ["0", "32", "20", "48"],answer: 2}
              ],
              isDone: false,
            },
            {
              subject: "Computers",name: "3B",
              questions: [
                {text: "How many bytes are there in 1 kilobyte",options: ["16", "256", "1024", "4096"],answer: 3},
                {text: "Who developed ReactJS",options: ["Facebook", "Google", "Microsoft", "Apple"],answer: 1},
                {text: "Angular is supported by ",options: ["Facebook", "Google", "Microsoft", "Twitter"],answer: 2},
                {text: "C# was developed by ",options: ["Amazon", "Google", "Microsoft", "Twitter"],answer: 3},
                {text: "Bootstrap was developed by ",options: ["Apple", "Google", "Facebook", "Twitter"],answer: 4},    
                {text: "AWS is provided by ",options: ["Apple", "Amazon", "Microsoft", "Google"],answer: 2},    
                {text: "Azure is provided by ",options: ["Microsoft", "Amazon", "IBM", "Google"],answer: 1},
                {text: "Angular is a framework that uses ",options: ["Java", "Python", "C#", "Typescript"],answer: 4}
              ],
              isDone: false,
            },
          ],
          corrected:"",
        
          tableshow:1,
          assignmentindex:'', 
          submittedAssignments: Array(4).fill(false),


          currentQuestionIndex: 0,
          answers: Array(15).fill(null), 
          showMarkingSheet: false,
          selectedOption: "",
          
    }

    markAsDone = (index) => {
      const updatedData = [...this.state.data];
      updatedData[index].isDone = true;
      this.setState({ data: updatedData, tableshow: 1, assignmentindex: "" });
    };
  
    handlequestions = (index) => {
      this.setState({ tableshow: index, assignmentindex: index });
    };
  
    handleAssignmentSubmitted = () => {
      const updatedData = [...this.state.data];
      updatedData[this.state.assignmentindex].isDone = true;
      this.setState({ tableshow: 1, data: updatedData });
    };
  
    handlecalculatePerformance = () => {
      const currentAssignment = this.state.data[this.state.assignmentindex];
      const correctAnswers = currentAssignment.questions.filter(
        (q, index) => q.selectedOption === q.answer
      ).length;
      const totalQuestions = currentAssignment.questions.length;
      this.setState({
        corrected: correctAnswers + "/" + totalQuestions,
      });
    };
  
    handleOptionClick = (selectedOptionIndex) => {
      const updatedAnswers = [...this.state.answers];
      updatedAnswers[this.state.currentQuestionIndex] = selectedOptionIndex;
      this.setState({
        answers: updatedAnswers,
        selectedOption: selectedOptionIndex,
      });
    };
  
    handlePrevQuestion = () => {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex - 1,
        selectedOption: "",
      }));
    };
  
    handleNextQuestion = () => {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        selectedOption: "",
      }));
    };
  
    marksheet = () => {
      this.setState((prevState) => ({
        showMarkingSheet: !prevState.showMarkingSheet,
      }));
    };
  
    handleTableShow = (value) => {
      this.setState({ tableshow: value });
    };
  
    render() {
      const { data, tableshow, assignmentindex, corrected } = this.state;
      const {
        currentQuestionIndex,
        answers,
        showMarkingSheet,
        selectedOption,
      } = this.state;
      const questions = data[assignmentindex].questions ||[];
      const name = data[assignmentindex].name ||'';
      const subject = data[assignmentindex].subject;
  
      return (
        <div>
          {tableshow === 1 ? (
            <div className="container">
              {corrected}
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
                    {ele.isDone ? (
                      ele.questions.filter(
                        (q) => q.selectedOption === q.answer
                      ).length +
                      "/" +
                      ele.questions.length
                    ) : (
                      "Not done"
                    )}
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => this.handlequestions(index)}
                    >
                      Do
                    </button>
                    {ele.isDone ? (
                      <button
                        className="btn btn-success btn-sm m-2"
                        onClick={() => this.markAsDone(index)}
                      >
                        Check
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : tableshow === 2 ? (
            <>
              <div className="row ">
                <div className="text-center mt-3">
                  <button className="btn btn-primary" onClick={this.marksheet}>
                    View Marking Sheet
                  </button>
                </div>
              </div>
              <QuestionComp
                question={questions[currentQuestionIndex]}
                questinnumber={currentQuestionIndex}
                selectedOption={selectedOption}
                onOptionClick={this.handleOptionClick}
              />
              <div className=" row">
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
          ) : tableshow === 3 ? (
            <MarkingSheetCom
              questions={questions}
              answers={answers}
              selectedOption={answers[currentQuestionIndex]}
              updatedArr={this.state.answers}
              handleTableShow={this.handleTableShow}
              onAssignmentSubmitted={this.handleAssignmentSubmitted}
              calculatePerformance={this.handlecalculatePerformance}
            />
          ) : (
            ""
          )}
        </div>
         );
    }
  }
  
  export default NewExp;