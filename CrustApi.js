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
let {CrustData}=require("./crustData.js");
let fs=require("fs");
let fname='crust.json';
app.get("/crust/resetData",function(req,res){
    let data=JSON.stringify(CrustData);
    fs.writeFile(fname,data,function(err){
      if(err) res.status(404).send(err);
      else res.send("Data in file is reset");
    });
  })
  app.get("/crust/customers",function(req,res){
    fs.readFile(fname,"utf8",function(err,data){
      if(err) res.status(404).send(err);
      else{
        let crustArray=JSON.parse(data);
        res.send(crustArray);
      }
    });
  });
  app.post("/crust/customers",function(req,res){
    let body=req.body;
    fs.readFile(fname,"utf8",function(err,data){
      if(err) res.status(404).send(err);
      else{
        let crustArray=JSON.parse(data);
   
        let newCustomer={...body};
        crustArray.push(newCustomer);
        let data1=JSON.stringify(crustArray);
        fs.writeFile(fname,data1,function(err){
          if(err) res.status(404).send(err);
          else res.send(newCustomer);
        });
      }
    });
  });
  app.put("/crust/customer/:id",function(req,res){
    let body=req.body;
    let id=req.params.id;
    fs.readFile(fname,"utf8",function(err,data){
      if(err) res.status(404).send(err);
      else{
        let crustArray=JSON.parse(data);
        let index=crustArray.findIndex(st=>st.id===id);
        if(index>0){
          let updatecustomer={...crustArray[index],...body};
          crustArray[index]=updatecustomer;
          let data1=JSON.stringify(crustArray);
          fs.writeFile(fname,data1,function(err){
            if(err) res.status(404).send(err);
            else res.send(updatecustomer);
  
        
       
        });
      }
      else res.status(404).send("No Customer found");
    }
    });
  });

  
app.delete("/crust/customer/:id",function(req,res){
  let id=req.params.id;
  fs.readFile(fname,"utf8",function(err,data){
    if(err) res.status(404).send(err);
    else{
      let crustArray=JSON.parse(data);
      let index=crustArray.findIndex(st=>st.id===id);
      if(index>=0){
      let deletedata=crustArray.splice(index,1);
        let data1=JSON.stringify(crustArray);
        fs.writeFile(fname,data1,function(err){
          if(err) res.status(404).send(err);
          else res.send(deletedata);

      
     
      });
    }
    else res.status(404).send("No Customer found");
  }
  });
});