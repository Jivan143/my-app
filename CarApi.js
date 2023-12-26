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
let {CarData}=require("./Car.js");
let {CarDetails}=require("./Car.js");

app.get("/carmaster",function(req,res){
    res.send(CarDetails);
})
app.get("/cars", function (req, res) {
    let { maxprice, minprice, sort, fuel,type,city="" } = req.query;
    // let cityarr=city.split(",")
    let arr1 = CarData;
    let arr2 = CarDetails;

    if (type) {
        let arr3=arr2.filter((s1)=>s1.type===type);
                console.log(arr3,"abc");

        arr1 = arr1.filter((st) =>(arr3.find((s1)=>s1.model==st.model)));
    }
    if (fuel) {
        let arr3=arr2.filter((s1)=>s1.fuel===fuel);
                console.log(arr3,"abc");

        arr1 = arr1.filter((st) =>(arr3.find((s1)=>s1.model==st.model)));
    }
    if(minprice){
         arr1=arr1.filter((s1)=>s1.price>=+(minprice));

    }
    if(maxprice){
        arr1=arr1.filter((s1)=>s1.price<=+(maxprice));

   }
    if (sort === "kms") {
        arr1.sort((s1, s2) => s1.kms - s2.kms);
    } else if (sort === "price") {
        arr1.sort((s1, s2) => s1.price - s2.price);
    } else if (sort === "year") {
        arr1.sort((s1, s2) => s1.year - s2.year);
    }

    res.send(arr1);
});

app.get("/cars/:id",function(req,res){
    let id=req.params.id;
    let arr1=CarData.find((s1)=>s1.id===id);
console.log(arr1);
    res.send(arr1);
})
app.post("/cars",function(req,res){
    let body=req.body;
    let updatedcar=CarData.push(body)
    console.log(updatedcar);

    res.send(CarData);
})
app.put("/cars/:id",function(req,res){
    let id=req.params.id;
    let body=req.body;
    let index=CarData.findIndex((c1)=>c1.id===id);
    CarData[index]=body;
    console.log(CarData);

    res.send(CarData);
})
app.delete("/cars/:id",function(req,res){
    let id=req.params.id;
    let index=CarData.findIndex((c1)=>c1.id===id);
    CarData.splice(index,1);
    res.send(CarData);
})