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

let {customerData}=require("./customer.js");

app.get("/customers", function (req, res) {
    let { city="", gender, sort, payment } = req.query;
    console.log(req.query);
    let cityarr=city.split(",")
    let arr1 = customerData;

    if (city) {
        arr1 = arr1.filter((st) =>(cityarr.find((s1)=>s1==st.city)));
    }

    if (gender) {
        console.log(gender,"abc");
        arr1 = arr1.filter((st) => st.gender === gender);
    }

    if (payment) {
        arr1 = arr1.filter((st) => st.payment === payment);
    }

    if (sort === "age") {
        arr1.sort((s1, s2) => s1.age - s2.age);
    } else if (sort === "gender") {
        arr1.sort((s1, s2) => s1.gender.localeCompare(s2.gender));
    } else if (sort === "city") {
        arr1.sort((s1, s2) => s1.city.localeCompare(s2.city));
    }

    res.send(arr1);
});

app.get("/customers/:id",function(req,res){
    let id=req.params.id;
    let arr1=customerData.find((s1)=>s1.id===id);

    res.send(arr1);
})

app.post("/customers",function(req,res){
    let body=req.body;
    let updatedcustomer=customerData.push(body)

    res.send(customerData);
})
app.put("/customers/:id",function(req,res){
    let id=req.params.id;
    let body=req.body;
    let index=customerData.findIndex((c1)=>c1.id===id);
    customerData[index]=body;
    res.send(customerData);
})
app.delete("/customers/:id",function(req,res){
    let id=req.params.id;
    let index=customerData.findIndex((c1)=>c1.id===id);
    customerData.splice(index,1);
    res.send(customerData);
})