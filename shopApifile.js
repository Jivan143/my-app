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
let {Data}=require("./shopsData.js");

app.get("/shops",function(req,res){
    let arr1=Data.shops;
    res.send(arr1);
})

app.get("/data",function(req,res){
    let arr1=Data;
    res.send(arr1);
})
app.get ("/shops/:id",function(req,res){
    let shopid=+req.params.id;
    let arr1=Data.shops.find((pt)=>pt.shopid===shopid);
        if(arr1) {
            res.send(arr1);
        }
    else res.status(404).send("No data found");


});



app.post("/shops",function(req,res){
    let body=req.body;
    let maxId = Data.shops.reduce((max, shop) => (shop.shopid > max ? shop.shopid : max), 0);
    body.shopid=maxId+1
    Data.shops.push(body)
    res.send(body);
})


app.put("/shop/:shopid",function(req,res){
    let id=+req.params.shopid;
    let body=req.body;
    let index=Data.shops.findIndex((p1)=>p1.shopid==id);
    if(index>=0){
        Data.shops[index]=body;
        res.send(body);
        console.log(body);
    }
    else{
        res.status(404).send("No data found");
    }
})



app.get("/products",function(req,res){
    let arr1=Data.products;
    res.send(arr1);
})

app.get ("/products/:id",function(req,res){
    let porId=+req.params.id;
    let arr1=Data.products.find((pt)=>pt.productid===porId);
        if(arr1) {
            res.send(arr1);
        }
    else res.status(404).send("No data found");


});


app.post("/products",function(req,res){
    let body=req.body;
    let maxId = Data.products.reduce((max, prod) => (prod.productid > max ? prod.productid : max), 0);
    body.productid=maxId+1
    Data.products.push(body)
    console.log(body);
    res.send(body);
})

app.put("/products/:productid",function(req,res){
    let id=+req.params.productid;
    let body=req.body;
    let index=Data.products.findIndex((p1)=>p1.productid==id);
    if(index>=0){
        Data.products[index]=body;
        res.send(body);
        console.log(body);
    }
    else{
        res.status(404).send("No data found");
    }
})




app.get("/purchases",function(req,res){
    let sort=req.query.sort;
    let shop=req.query.shop;
    let product=req.query.product;
    console.log(shop);
    let minqty=+req.query.minqty;
    let catagery=req.query.category;
    let shoparr=Data.shops.find((ele)=>ele.name==shop);
    let shopid= shoparr?shoparr.shopid:null;
    let prodArr=Data.products.find((ele)=>ele.productname==product);
    let productid= prodArr?prodArr.productid:null;
    let arr1=Data.purchases;
    if(shopid)  { arr1=arr1.filter((s1)=>s1.shopid === shopid);
    }
    if(productid)  { arr1=arr1.filter((s1)=>s1.productid === productid);
    }
    if(minqty)  { arr1=arr1.filter((s1)=>s1.quantity >= minqty);
    }
    if(sort==="QtyAsc")
    arr1.sort((s1,s2)=>s1.quantity-s2.quantity);
    if(sort==="QtyDesc")
    arr1.sort((s1,s2)=>s2.quantity-s1.quantity);
    if(sort==="ValueAsc")
    arr1.sort((s1,s2)=>(s1.price*s1.quantity)-(s2.price*s2.quantity));
    if(sort==="ValueDesc")
    arr1.sort((s1,s2)=>(s2.price*s2.quantity)-(s1.price*s1.quantity));
res.send(arr1);
})


app.get("/purchases/shops/:id", function (req, res) {
    let id = +req.params.id;
    console.log(id);
    let arr1 = Data.purchases.filter((pt) => pt.shopid === id);
    if (arr1.length > 0) {
        res.send(arr1);
    } else {
        res.status(404).send("No data found");
    }
});

app.get("/purchases/products/:id", function (req, res) {
    let id = +req.params.id;
    let arr1 = Data.purchases.filter((pt) => pt.productid === id);
    if (arr1.length > 0) {
        res.send(arr1);
    } else {
        res.status(404).send("No data found");
    }
});



app.post("/purchases",function(req,res){
    let body=req.body;
    let maxId = Data.purchases.reduce((max, pur) => (pur.purchaseid > max ? pur.purchaseid : max), 0);
    body.purchaseid=maxId+1
    Data.purchases.push(body)
    console.log(body);
    res.send(body);
})
app.put("/purchases/:purchaseid",function(req,res){
    let id=+req.params.purchaseid;
    let body=req.body;
    let index=Data.purchases.findIndex((p1)=>p1.purchaseid==id);
    if(index>=0){
        Data.purchases[index]=body;
        res.send(body);
        console.log(body);
    }
    else{
        res.status(404).send("No data found");
    }
})



app.get ("/purchases/:id",function(req,res){
    let purId=+req.params.id;
    let arr1=Data.purchases.find((pt)=>pt.purchaseid===purId);
        if(arr1) {
            res.send(arr1);
        }
    else res.status(404).send("No data found");


});

app.get("/totalPurchase/shop/:id", function (req, res) {
    try {
        let shopid = +req.params.id;
        let totalPurchase = Data.purchases
            .filter((purchase) => purchase.shopid === shopid)
            .reduce((result, purchase) => {
                if (!result[purchase.productid]) {
                    result[purchase.productid] = 0;
                }
                result[purchase.productid] += purchase.quantity;
                return result;
            }, {});

        res.send(totalPurchase);
        console.log(totalPurchase);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/totalPurchase/product/:id", function (req, res) {
    try {
        let productid = +req.params.id;
        let totalPurchase = Data.purchases
            .filter((purchase) => purchase.productid === productid)
            .reduce((result, purchase) => {
                if (!result[purchase.shopid]) {
                    result[purchase.shopid] = 0;
                }
                result[purchase.shopid] += purchase.quantity;
                return result;
            }, {});

        res.send(totalPurchase);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
