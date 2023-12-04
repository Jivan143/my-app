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
let {mobileData}=require("./mobilesData.js");

app.get("/mobiles",function(req,res){
    let ram=req.query.ram;
    let rom=req.query.rom;
    let color=req.query.color;
    let brand=req.query.brand;
    let arr1=mobileData;
    if(brand)  { arr1=arr1.filter((s1)=>s1.brand === brand);
    }
    if(ram)  {arr1=arr1.filter((s1)=>s1.RAM.find((c1)=>c1===ram));
    }
    if(rom)  { arr1=arr1.filter((s1)=>s1.ROM.find((c1)=>c1===rom));
    }
    if(color)  {arr1=arr1.filter((s1)=>s1.colors.find((c1)=>c1===color));
    }
    res.send(arr1);
    
})
app.get("/mobiles/:name",function(req,res){
    let name=req.params.name;
    let arr1=mobileData.find((s1)=>s1.name===name);
    if(arr1) res.send(arr1);
    else res.status(404).send("Not found");
})
app.get("/mobiles/brand/:brandName",function(req,res){
    let brand=req.params.brandName;
    let arr1=mobileData.find((s1)=>s1.brand===brand);
    if(arr1) res.send(arr1);
    else res.status(404).send("Not found");
})
app.get("/mobiles/color/:color",function(req,res){
    let col=req.params.color;
    let arr1=mobileData.filter((s1)=>s1.colors.find((c1)=>c1===col));
    if(arr1) res.send(arr1);
    else res.status(404).send("Not found");
})
app.get("/mobiles/RAM/:ramSize",function(req,res){
    let ram=req.params.ramSize;
    let arr1=mobileData.filter((s1)=>s1.RAM.find((c1)=>c1===ram));
    if(arr1) res.send(arr1);
    else res.status(404).send("Not found");
})
app.get("/mobiles/ROM/:romSize",function(req,res){
    let rom=req.params.romSize;
    let arr1=mobileData.filter((s1)=>s1.ROM.find((c1)=>c1===rom));
    if(arr1) res.send(arr1);
    else res.status(404).send("Not found");
})
