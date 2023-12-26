const { json } = require("express");
let fs=require("fs");
const { fn } = require("jquery");
let readline=require("readline-sync");
let fname="data.json";
let courseData={
    course:"Node.js",
    students:[
        {name: "Jack", age: 25},
        {name: "Steve", age: 26},
        {name: "Anna", age: 27},
        {name: "Jhon", age: 23},
        
    ],
};
function writeJson(){
    let str=JSON.stringify(courseData);
    fs.writeFile(fname,str,function(err){
        if(err) console.log(err);
    });
}
function enrolNewStudent(){
    let name=readline.question("Enter Name of student:");
    let age=readline.question("Enter age of student:");
    let newStudent={name:name, age:age};
    fs.readFile(fname,"utf8",function(err,data){
        if(err) console.log(err);
        else {
            let obj=JSON.parse(data);
            obj.students.push(newStudent);
            let data1=JSON.stringify(obj);
            fs.writeFile(fname,data1,function(err){
                if(err) console.log(err);
                else{
                    console.log("Data updated");
                }
            });
        }
    });
}

function readJson(){
    fs.readFile(fname,"utf8",function(err,data){
        if(err) console.log(err);
        else {
            let obj=JSON.parse(data);
            console.log(obj);
        }
    })
}
let option=readline.question("enter Option 1 :Write 2:Enroll New Student 3:Read-");
switch(option){
    case "1":
        writeJson();
        break;
    case "2":
        enrolNewStudent();
        break;
    case "3":
        readJson();
}