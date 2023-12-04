import React, { Component} from "react";
import MainQuestionComp from "./mainQuestionComp";
import MarkingSheetCom from "./MarkingSheeetComp";
class JSLR19B extends Component {
    state={
       data: [
            {
              subject: "General Knowledge",name: "4A",
              questions: [
                {text: "What is the capital of India",options: ["New Delhi", "London", "Paris", "Tokyo"],answer: "A"},
                {text: "What is the capital of Italy",options: ["Berlin", "London", "Rome", "Paris"],answer: "C"},
                {text: "What is the capital of China",options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],answer: "D"},
                {text: "What is the capital of Nepal",options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],answer: "B"},
                {text: "What is the capital of Iraq",options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],answer: "A"},
                {text: "What is the capital of Bangladesh",options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],answer: "D"},
                {text: "What is the capital of Sri Lanka",options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],answer: "B"},
                {text: "What is the capital of Saudi Arabia",options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],answer: "A"},
                {text: "What is the capital of France",options: ["London", "New York", "Paris", "Rome"],answer: "C"},
                {text: "What is the capital of Germany",options: ["Frankfurt", "Budapest", "Prague", "Berlin"],answer: "D"},
                {text: "What is the capital of Sweden",options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],answer: "B"},
                {text: "What is the currency of UK",options: ["Dollar", "Mark", "Yen", "Pound"],answer: "D"},
                {text: "What is the height of Mount Everest",options: ["9231 m", "8848 m", "8027 m", "8912 m"],answer: "B"},
                {text: "What is the capital of Japan",options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],answer: "D"},
                {text: "What is the capital of Egypt",options: ["Cairo", "Teheran", "Baghdad", "Dubai"],answer: "A"}
              ],
              isDone: false,
            },
            {subject: "Maths",name: "10C",
            questions: [
                {text: "What is 8 * 9",options: ["72", "76", "64", "81"],answer: "A"},
                {text: "What is 2*3+4*5",options: ["70", "50", "26", "60"],answer: "C"}
              ],
              isDone: false,
            },
            {subject: "Chemistry",name: "7A(i)",
              questions: [
                {text: "What is the melting point of ice",options: ["0F", "0C", "100C", "100F"],answer: "B"},
                {text: "What is the atomic number of Oxygen",options: ["6", "7", "8", "9"],answer: "C"},
                {text: "What is the atomic number of Carbon",options: ["6", "7", "8", "9"],answer: "A"},
                {text: "Which of these is an inert element",options: ["Flourine", "Suphur", "Nitrogen", "Argon"],answer: "D"},
                {text: "What is 0 Celsius in Fahrenheit",options: ["0", "32", "20", "48"],answer: "B"}
              ],
              isDone: false,
            },
            {
              subject: "Computers",name: "3B",
              questions: [
                {text: "How many bytes are there in 1 kilobyte",options: ["16", "256", "1024", "4096"],answer: "C"},
                {text: "Who developed ReactJS",options: ["Facebook", "Google", "Microsoft", "Apple"],answer: "A"},
                {text: "Angular is supported by ",options: ["Facebook", "Google", "Microsoft", "Twitter"],answer: "B"},
                {text: "C# was developed by ",options: ["Amazon", "Google", "Microsoft", "Twitter"],answer: "C"},
                {text: "Bootstrap was developed by ",options: ["Apple", "Google", "Facebook", "Twitter"],answer: "D"},    
                {text: "AWS is provided by ",options: ["Apple", "Amazon", "Microsoft", "Google"],answer: "B"},    
                {text: "Azure is provided by ",options: ["Microsoft", "Amazon", "IBM", "Google"],answer: "A"},
                {text: "Angular is a framework that uses ",options: ["Java", "Python", "C#", "Typescript"],answer: "D"}
              ],
              isDone: false,
            }
          ],
          corrected:"",
        
          tableshow:1,
          assignmentindex:'', 
          submittedAssignments: Array(4).fill(false),
          answers: Array(15).fill(null), 
          allans:[],
          count:[0,0,0,0],
          showmask:0,

    }

    checkmarksheet = (index) => {
      const updatedData = [...this.state.data];
      updatedData[index].isDone = true;
      let s1={...this.state};
      s1.assignmentindex=index;
      s1.tableshow=0;
      s1.showmask=1;
      this.setState({ data: updatedData  });
      this.setState(s1);
    }

    handlequestions=(index)=>{
        let s1={...this.state};
        s1.assignmentindex=index;
        s1.showmask=0;
        s1.tableshow=0;
        this.setState(s1);
    }
    handleAssignmentSubmitted = () => {
      let s1 = { ...this.state };
      let ab = s1.allans.filter((ele) => ele !== null);
      let isDone = ab.length > 0 ? true : false;
      s1.data[s1.assignmentindex].isDone = isDone;
      s1.showmask = 0;
      s1.tableshow = 1;
      this.setState(s1);
  };
  
  handlecalculatePerformance = () => {
    let s1 = { ...this.state };
    s1.showmask=0;
    const currentAssignment = s1.data[s1.assignmentindex];
    const correctAnswers = currentAssignment.questions.filter(
      (q) => q.selectedOption === q.answer
    ).length;
    const totalQuestions = currentAssignment.questions.length;
    s1.corrected = correctAnswers + "/" + totalQuestions;
    this.setState(s1);
  };
  handleAnswersChange = (answers) => {
    let s1={...this.state}
    let index=s1.assignmentindex;
   let answer1= answers.filter((ele)=>ele!==null);
    s1.count[index]=answer1.length;
    s1.allans[index]=answers;
    this.setState({ answers: answers });
    this.setState(s1);
  };

    render(){
        const {data,tableshow,assignmentindex,corrected,answers,count,allans,showmask}=this.state;
        return (
            tableshow==1?(
                <div className="container">
                    <div className="row bg-dark text-light">
                    <div className="col-3">Subject</div>
                    <div className="col-3">Assignment</div>
                    <div className="col-3">Performance</div>
                    <div className="col-3"></div>
                    </div>
                    {data.map((ele,index)=>(
                    <div className="row border">
                    <div className="col-3">{ele.subject}</div>
                    <div className="col-3">{ele.name}</div>
                    <div className="col-3">{ele.isDone ? (count[index] + 1+'/' + ele.questions.length) : "Not done"}</div>
                    <div className="col-3">
                    <button className="btn btn-primary btn-sm" onClick={() => this.handlequestions(index)}>Do</button>
                    {ele.isDone  ?  (<button className="btn btn-success btn-sm m-2" onClick={() => this.checkmarksheet(index)}>Check</button>):("" )}
                    </div>
                    </div>
                     ))}
                </div>

            ):(        

            <MainQuestionComp
            questions={data[assignmentindex].questions}
            name={data[assignmentindex].name} 
            subject={data[assignmentindex].subject} 
            tableshow={tableshow}
            onAssignmentSubmitted={this.handleAssignmentSubmitted}
            calculatePerformance={this.handlecalculatePerformance}
            onAnswersChange={this.handleAnswersChange}
            allans={allans[assignmentindex]}
            showmask={showmask}


            />
            
            

            
            )

        )
    }
}
export default JSLR19B;