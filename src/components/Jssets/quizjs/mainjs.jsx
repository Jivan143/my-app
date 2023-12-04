import React, { Component} from "react";
import MakeTable from "./makeTable";
class MainJS extends Component {
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
            }
          ],
        }

        markAsDone = (index) => {
            const updatedData = [...this.state.data];
            updatedData[index].isDone = true;
            this.setState({ data: updatedData });
        }
    
        handlequestions = (index) => {
            let s1 = { ...this.state };
            s1.assignmentindex = index;
            s1.tableshow = 0;
            this.setState(s1);
        }
        render(){
            const{data}=this.state;
            return<div className="container">
                <MakeTable  data={data}
                 onquestion= {handlequestions}

                />
            </div>
        }
    }
    export default MainJS;


