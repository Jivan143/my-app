let mysql = require("mysql");

let connData = {
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb", 
};

function showPersons() {
    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM persons";  
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function showPersonsByName(name){
    let connection=mysql.createConnection(connData);
    let sql = "SELECT * FROM persons WhERE name=?";
    connection.query(sql,name,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}
function insertPerson(params){
    let connection=mysql.createConnection(connData);
    let sql="INSERT INTO persons(name,age) VALUES(?,?)";
    connection.query(sql,params,function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log("Id of inserted record : ",result.insertId);
            let sql2 = "SELECT * FROM persons";  
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
function insertPersons(params){
    let connection=mysql.createConnection(connData);
    let sql="INSERT INTO persons(name,age) VALUES ?";
    connection.query(sql,[params],function(err,result){
        if (err) {
            console.log(err);
        } else {
            console.log("Id of inserted record : ",result);
            let sql2 = "SELECT * FROM persons";  
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
function incrementAge(id){
    let connection=mysql.createConnection(connData);
    let sql="UPDATE persons SET Age=Age+1 WHERE id=?";
    connection.query(sql,id,function(err,result){
        if (err) {
            console.log(err);
        } else {
            let sql2 = "SELECT * FROM persons";  
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
function ChangeAge(id, NewAge){
    let connection=mysql.createConnection(connData);
    let sql="UPDATE persons SET Age=? WHERE id=?";
    connection.query(sql,[NewAge, id],function(err, result){
        if (err) console.log(err);
        else console.log(result);
        
    });
}

function resetData(){
    let connection=mysql.createConnection(connData);
    let sql="DELETE FROM persons";
    connection.query(sql,function(err, result){
        if (err) console.log(err);
        else {
        console.log(result);
        let sql2 = "SELECT * FROM persons";  
            connection.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfgully deleted",result.affectedRows);
                    let {persons}=require("./testData.js");
                    let arr=persons.map((p)=>[p.name,p.age]);
                    let sql2="INSERT INTO persons (name,age) VALUES ?";
                    connection.query(sql2,[arr],function(err,result){
                        if (err) console.log(err);
                        else console.log("Successfgully Inserted",result.affectedRows);
                    })

                }
            });
        }
        
    });
}


// resetData();
showPersons();
// ChangeAge(7,35);
// showPersons();
// insertPersons([["Pavan",22],["Amy",34],["Steven",23]]);
// insertPerson(["Pavan",22]);
// showPersonsByName("Jeevan");
// incrementAge(20);
