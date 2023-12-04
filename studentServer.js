let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
const port = 2410;

app.listen( port,()=> console.log(`Node app listening on port ${port}!`));
 let {studentsData}=require("./studentData.js");

// app.get("/svr/text",function(req,res){
//     res.send("Test Response")
// })
app.get("/svr/students/:id",function(req,res){
    let id=+req.params.id;
    let student=studentsData.find(st=>st.id===id);
   if (student) res.send(student);
   else res.status(404).send("No student found");
})
app.get("/svr/students/course/:name",function(req,res){
    let name=req.params.name;
    const arr1=studentsData.filter((st)=>st.course===name);
   if (arr1.length>0) res.send(arr1);
   else res.status(404).send("No student found");
})

app.get("/svr/students",function(req,res){
    let courseStr=req.query.course;
    let grade=req.query.grade;
    let sort=req.query.sort;
    let arr1=studentsData;
    if (courseStr){
    let courseArr=courseStr.split(",");
    arr1=arr1.filter((st)=>courseArr.find((p1)=>p1===st.course));
    }
    if(grade) {
        arr1=arr1.filter((st)=>st.grade===grade);
    }
    if(sort==="name")
    arr1.sort((s1,s2)=>s1.name.localeCompare(s2.name));
    if(sort==="course")
    arr1.sort((s1,s2)=>s1.course.localeCompare(s2.course));
    if(sort==="city")
    arr1.sort((s1,s2)=>s1.city.localeCompare(s2.city));
    res.send(arr1);
})
app.post("/svr/students",function(req,res){
    let body=req.body;
    let maxid=studentsData.reduce((acc,curr)=>(curr.id>=acc?curr.id:acc),0);
    let newid=maxid+1;
    let newStudent={id:newid,...body}
    studentsData.push(newStudent)
    res.send(newStudent);
})
app.put("/svr/students/:id",function(req,res){
    let id=+req.params.id;
    let body=req.body;
    let index=studentsData.findIndex((s1)=>s1.id===id);
    if(index>=0){
    let updatestudent={id:id,...body};

    studentsData[index]=updatestudent
    res.send(updatestudent);
    }
    else{
        res.status(404).send("No student found");
    }
})
app.delete("/svr/students/:id",function(req,res){
    let id =+req.params.id;
    let index=studentsData.findIndex((s1)=>s1.id===id);
    if(index>=0){

    let deletedstudent=studentsData.splice(index,1);
    res.send(deletedstudent);
    }
    else{
        res.status(404).send("No student found");
    }


})