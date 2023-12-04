import React, {Component} from "react";
import JSL9CQuesForm from "./JSL9CQuesForm";
import QuestionPaper from "./QuestionPaper";
class JSL9CMain extends Component{
    state={
        questions:[{id: 1, qnText: "What is the square of 9",A: "90", B: "72", C: "81", D:"99", ans: "C"},
        {id: 2, qnText: "What is the 11*16", A: "160", B: "176", C: "204", D: "166", ans: "B"},
        {id: 3, qnText: "Which of the following is not a power of 2",A: "0",    B: "1",    C: "2",    D: "8",    ans: "A"},
        {id: 4, qnText: "log 1 is equal to",A: "1", B: "10", C: "-1", D: "0", ans: "D"},
        {id: 5, qnText: "log(ab) is equal to",A: "(loga) + (logb)", B: "b(loga)", C: "a(logb)", D: "(loga)(logb)", ans: "A"},
        {id: 6, qnText: "The square root is equal to",A: "1.0", B: "1.25", C: "1.414", D: "1.462", ans: "B"},
        {id: 7, qnText: "The binary representation of 10 is",A: "0110", B: "1001", C: "1010", D: "1100", ans: "C"},
        {id: 8, qnText: "11111 in binary represents ",A: "27", B: "15", C: "41", D: "31", ans: "D"},
        {id: 9, qnText: "The absolute value of -10.5 is equal to ",A: "-10.5", B: "10.5",C: "10", D: "11", ans: "B"},
        {id: 10, qnText: "The roots of the equation of (x-2)(x+3) = 0 are",A: "2, -3",B: "2, 3", C: "-2, 3", D: "-2, -3", ans: "A"},
    ],
    view:0,
    editedQuestion: null,
    questionPapers: [],
    newarr:"",


    }
    addQuestionPaper = (papername, questions) => {
      const newQuestionPaper = {
        papername: papername,
        questions: questions,
      };
      console.log(newQuestionPaper);

      this.setState((prevState) => ({
        view:0,
        questionPapers: [...prevState.questionPapers, newQuestionPaper],
      }));
    };

    handleAddquestion=()=>{
        let s1={...this.state };
        s1.view=1;
        this.setState(s1);
    }
    handleQuestionbank=()=>{
        let s1={...this.state };
        s1.view=-1;
        this.setState(s1);
    }
    handleQuestionSubmission = (newQuestion) => {
        this.setState((ele) => ({
          questions: [...ele.questions, newQuestion],
          view: 0, 
        }));
      }
    handlemainquestion =()=>{
        let s1={...this.state}
        s1.view=0;
        s1.newarr="";
        this.setState(s1);
    };
    handlequestionpaper=()=>{
      let s1={...this.state}
      s1.view=2;
      this.setState(s1);
    }
    deleteQuestion = (id) => {
        const updatedQuestions = this.state.questions.filter((q) => q.id !== id);
        this.setState({
          questions: updatedQuestions,
        });
      };

    editQuestion = (id) => {
        const questionToEdit = this.state.questions.find((q) => q.id === id);
        this.setState({
          view: 1, 
          editedQuestion: questionToEdit,
        });
      };
      handlePaperSelect = (e) => {
        this.setState({
          newarr: e.target.value,
        });
      };
    
    
    render (){
        const {questions,view,editedQuestion,questionPapers,newarr}=this.state;
        const filteredQuestions = questionPapers.filter(
          (question) => question.papername === newarr
        );
        let filterpaper=questionPapers.map((ele)=>ele.papername);
        return  view==0?(
            <div className="container ">
                <div className="row">
                <button className="btn btn-primary  btn-sm m-1 col-3" onClick={this.handleQuestionbank}>Question Bank</button>
               <button className="btn btn-primary btn-sm m-1 col-4" onClick={this.handleAddquestion}>Create Question Paper</button>
                <button className="btn btn-primary btn-sm  m-1  col-4" onClick={this.handlequestionpaper}> View Question Paper</button></div>
                </div>
        ):view==1?(
  //     <JSL9CQuesForm
  //   onSubmit={this.handleQuestionSubmission}
  //   handlemainquestion={this.handlemainquestion}
  //   questionId={questions.length + 1}
  //   editedQuestion={editedQuestion}
          // />
        <div className="container">
        <button className="btn btn-primary m-2" onClick={this.handlemainquestion}>Home</button>
          <QuestionPaper
          questions={questions}
            onQuestionPaperAdd={this.addQuestionPaper} />

        </div>
            ):view==-1?( 
            <div className="container">
            <button className="btn btn-primary m-2" onClick={this.handlemainquestion}>Home</button>
            <h5>Question Bank</h5>

                {questions.map((ele,index)=>(
                <div>
                    <div className="row">Q{ele.id}. {ele.qnText} ?   
              
                    </div>
                    <ul>
                    <li>A.{ele.A}</li>
                    <li>B.{ele.B}</li>
                    <li>C.{ele.C}</li>
                    <li>D.{ele.D}</li>
                    <li>Answer.{ele.ans}</li>
                    </ul>
                    
                </div>

                ))}

            </div>
            ):(
               questionPapers.length>0?(
                <div className="container" >
                <button className="btn btn-primary m-2" onClick={this.handlemainquestion}>Home</button>
                     <div className="row">
                          <select id="papername" value={newarr} onChange={this.handlePaperSelect}>
                          <option value="">Choose Paper</option>
                          {filterpaper.map((question) => (
                            <option key={question.id} value={question}>
                              {question}
                            </option>
                          ))}
                        </select>
                        </div>
    
                <div className="container">
                <div className="row"></div>
                {filteredQuestions.map((paper, paperIndex) => (
                <div key={paperIndex} className="question-paper">
                 <h4>Question Paper</h4>
                <div className="h4">Name:{paper.papername}</div>
                {paper.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="question">
                <li className="h6">Q {questionIndex+1}. {question}</li>
                </div>
                ))}
                </div>
              ))}

              </div>
              </div>
              ):(
                <div className="container" >
                <button className="btn btn-primary m-2" onClick={this.handlemainquestion}>Home</button>

                <p> No question paper</p>
                
                </div>              )
            )
    }
}
export default JSL9CMain;