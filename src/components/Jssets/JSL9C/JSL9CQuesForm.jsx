 import React,{Component} from "react";
 class JSL9CQuesForm extends Component{
  state = {
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    ans: "",
  };
 
  handleSubmit = () => {
    const { question, optionA, optionB, optionC, optionD, ans } = this.state;
    const newQuestion = {
      id: this.props.questionId,
      qnText: question,
      A: optionA,
      B: optionB,
      C: optionC,
      D: optionD,
      ans: ans,
    };
    this.props.onSubmit(newQuestion);
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  handlemainquestion=()=>{
    this.props.handlemainquestion();
  }
  componentDidUpdate(prevProps) {
    if (this.props.editedQuestion !== prevProps.editedQuestion) {
      const { question, A, B, C, D, ans } = this.props.editedQuestion || {};
      this.setState({
        question: question || "",
        optionA: A || "",
        optionB: B || "",
        optionC: C || "",
        optionD: D || "",
        ans: ans || "",
      });
    }
  }

 render (){
    const { question, optionA, optionB, optionC, optionD, ans } = this.props;

    return(
      <div>
      <div className="container">
            <button className=" btn btn-primary text-center m-2" onClick={this.handlemainquestion}>Home</button>
            </div>
        <div className="container">
            
            <label>Question:</label>
             <div className="row">
             <input type="text" name="question" value={question}   onChange={this.handleInputChange}
 
              />
             </div>
     
             <label>Option A: </label>
              <div className="row">
              <input type="text"name="optionA"value={optionA} onChange={this.handleInputChange}/>
             </div>
             <label>Option B: </label>
              <div className="row">
              <input type="text"name="optionB"value={optionB}onChange={this.handleInputChange} />
             </div>
             <label>Option C: </label>
              <div className="row">
              <input type="text"name="optionC"value={optionC}onChange={this.handleInputChange}/>
             </div>
             <label>Option D: </label>
              <div className="row">
              <input type="text"name="optionD"value={optionD} onChange={this.handleInputChange}/>
             </div>
           
            <label>Correct Option:</label>
            <div className="row">
            <input type="text" name="ans" value={ans} onChange={this.handleInputChange}/>
            </div>
            <div className="container text-center">
            <button className=" btn btn-primary text-center m-2" type="submit"onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>

        </div>
    )
 } 
}
export default JSL9CQuesForm;