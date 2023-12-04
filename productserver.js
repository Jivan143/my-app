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
let {productData}=require("./productData.js");
// app.get ("/products",function(req,res){
//     res.send(productData);

// });

app.get("/products",function(req,res){
    let field=req.query.field;
    let maxprice=+req.query.maxprice;
    let maxqty=+req.query.maxqty;
    let minqty=+req.query.minqty;
    let catagery=req.query.category;

    let arr1=productData;
    if(maxprice)  { arr1=arr1.filter((s1)=>s1.price <= maxprice);
    }
    if(catagery)  { arr1=arr1.filter((s1)=>s1.category === catagery);
    }
    if(maxqty)  { arr1=arr1.filter((s1)=>s1.quantity <= maxqty);
    }
    if(minqty)  { arr1=arr1.filter((s1)=>s1.quantity >= minqty);
    }
    if(field==="price")
    arr1.sort((s1,s2)=>s1.price-s2.price);
    if(field==="quantity")
    arr1.sort((s1,s2)=>s1.quantity-s2.quantity);
    if(field==="value")
    arr1.sort((s1,s2)=>(s1.price*s1.quantity)-(s2.price*s2.quantity));
res.send(arr1);
})


app.get ("/products/:prodname",function(req,res){
    let prod=req.params.prodname;
    let arr1=productData.find((pt)=>pt.prod===prod);
        if(arr1) {
            res.send(arr1);
        }
    else res.status(404).send("No Product found");


});
app.get("/products/catagory/:catname",function(req,res){
    let category=req.params.catname;
    let arr1=productData;
    if(category){
        arr1=arr1.filter((p1)=>p1.category===category);
    }
    res.send(arr1);
})

app.get("/products/order/:field",function(req,res){
    let field=req.params.field;
    let arr1=productData
    if(field==="price")
    arr1.sort((s1,s2)=>s1.price-s2.price);
    if(field==="quantity")
    arr1.sort((s1,s2)=>s1.quantity-s2.quantity);
    if(field==="value")
    arr1.sort((s1,s2)=>(s1.price*s1.quantity)-(s2.price*s2.quantity));
res.send(arr1);
})

app.post("/products",function(req,res){
    let body=req.body;
    productData.push(body)
    console.log(body);
    res.send(body);
})
app.put("/products/:prodname",function(req,res){
    let prod=req.params.prodname;
    let body=req.body;
    let index=productData.findIndex((p1)=>p1.prod==prod);
    if(index>=0){
        productData[index]=body;
        res.send(body);
        console.log(body);
    }
    else{
        res.status(404).send("No Product found");
    }
})

app.delete("/products/:prodname",function(req,res){
    let prod=req.params.prodname;
    let index=productData.findIndex((p1)=>p1.prod==prod);
    if(index>=0){
        let deletedproduct=productData.splice(index,1);
        res.send(deletedproduct);
        console.log(deletedproduct);
    }
    else{
        res.status(404).send("No Product found");
    }
})