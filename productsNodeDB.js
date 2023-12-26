let mysql = require("mysql");

let connData = {
    host: "localhost",
    user: "root",
    password: "",
    database: "products", 
};

function showproducts() {
    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM products";  
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}


function showproductByName(name){
    let connection=mysql.createConnection(connData);
    let sql = "SELECT * FROM products WhERE prod=?";
    connection.query(sql,name,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function showproductByCategory(category){
    let connection=mysql.createConnection(connData);
    let sql = "SELECT * FROM products WhERE category=?";
    connection.query(sql,category,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}
function showproductBygreater(min){
    let connection=mysql.createConnection(connData);
    let sql = "SELECT * FROM products WhERE price>?";
    connection.query(sql,min,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function ChangeQuantity(id, NewQuantity){
    let connection=mysql.createConnection(connData);
    let sql="UPDATE products SET quantity=? WHERE id=?";
    connection.query(sql,[NewQuantity, id],function(err, result){
        if (err) console.log(err);
        else {
            console.log(result);
            let sql2 = "SELECT * FROM products";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                
                }
            });
        }
        
    });
}


function decreasequantity(id){
    let connection=mysql.createConnection(connData);
    let sql="UPDATE products SET quantity=quantity-1 WHERE id=?";
    connection.query(sql,id,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);

            let sql2 = "SELECT * FROM products";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            });
        }
    });
}



function insertProduct(params){
    let connection=mysql.createConnection(connData);
    let sql="INSERT INTO products(prod,price,quantity,category) VALUES(?,?)";
    connection.query(sql,params,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log("Id of inserted record : ",result.insertId);
            let sql2 = "SELECT * FROM products";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            });
        }
    });

}
function insertsProducts(params){
    let connection=mysql.createConnection(connData);
    let sql="INSERT INTO products(prod,price,quantity,category) VALUES ?";
    connection.query(sql,[params],function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(" inserted record : ",result.affectedRows);
            let sql2 = "SELECT * FROM products";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                
                }
            });
        }
    });

}

function resetData(){
    let connection=mysql.createConnection(connData);
    let sql="DELETE FROM products";
    connection.query(sql,function(err, result){
        if (err) console.log(err);
        else {
        console.log(result);
        let sql2 = "SELECT * FROM products";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfgully deleted",result);

                }
            });
        }
        
    });
}
showproducts();
insertsProducts([["Red Bull",80,2,"Food"],["Lux",10,11,"Soap"],
["Dove",25,20,"Soap"], ["Dettol",15,15,"Soap"],
["Pantene",60,10,"Shampoo"], ["Appy",40,24,"Food"],
["Liril",16,21,"Soap"], ["Santoor",45,34,"Soap"],
["Garnier",105,8,"Shampoo"], ["AllClear",72,9,"Shampoo"],
]);

// showproductByName('Coke');
// showproductByCategory('Food');
// showproductBygreater(14);
// ChangeQuantity(1,23);
// showproductByName('Pepsi');
// decreasequantity(2);
// resetData();
