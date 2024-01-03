var express = require("express");
var mysql = require("mysql");

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
var port = process.env.PORT ||2410;

let connData = {
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb",
};


// app.get("/svr/employess", (req, res) => {
//     let department=req.query.department;
//     let designation=req.query.designation;
//     let gender=req.query.gender;
//     let connection = mysql.createConnection(connData);
//     let sql = "SELECT * FROM employess";
//     connection.query(sql, function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(404).send("Internal Server Error");
//         } else {
//             res.send(result);
//         }
//         connection.end();
//     });
// });
app.get("/svr/employess", (req, res) => {
    let department = req.query.department;
    let designation = req.query.designation;
    let gender = req.query.gender;
    let connection = mysql.createConnection(connData);

    let sql = "SELECT * FROM employess";

    if (department || designation || gender) {
        sql += " WHERE ";

        if (department) {
            sql += `department = '${department}' AND `;
        }

        if (designation) {
            sql += `designation = '${designation}' AND `;
        }

        if (gender) {
            sql += `gender = '${gender}' AND `;
        }

        if (sql.endsWith("AND ")) {
            sql = sql.slice(0, -4);
        }
    }

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(result);
        }
        connection.end();
    });
});

app.get("/svr/employess/:empCode", (req, res) => {
    let connection = mysql.createConnection(connData);
    let empCode = req.params.empCode;
    let sql = "SELECT * FROM employess WHERE empCode=?";
    connection.query(sql, [empCode], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(result);
        }
        connection.end();
    });
});

app.get("/svr/employess/departments/:department", (req, res) => {
    let connection = mysql.createConnection(connData);
    let department = req.params.department;
    let sql = "SELECT * FROM employess WHERE department=?";
    connection.query(sql, [department], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(result);
        }
        connection.end();
    });
});

app.post("/svr/employess", (req, res) => {
    let connection = mysql.createConnection(connData);
    let { empCode, name, department,designation,salary,gender } = req.body;
    let sql = "INSERT INTO employess (empCode, name, department,designation,salary,gender) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(sql, [empCode, name, department,designation,salary,gender], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(  result );
        }
        connection.end();
    });
});

app.put("/svr/employess/:empCode", (req, res) => {
    let connection = mysql.createConnection(connData);
    let empCode = req.params.empCode;
    let { name, department,designation,salary,gender } = req.body;
    let sql = "UPDATE employess SET name=?, department=?, designation=?, salary=?, gender=? WHERE empCode=?";
    connection.query(sql, [name, department, designation, salary, gender, empCode], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send("Emplyee updated successfully");
        }
        connection.end();
    });
});

app.delete("/svr/employess/delete/:empCode", (req, res) => {
    let connection = mysql.createConnection(connData);
    let empCode = req.params.empCode;
    let sql = "DELETE FROM employess WHERE empCode=?";
    connection.query(sql, [empCode], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send("Employee deleted successfully");
        }
        connection.end();
    });
});

app.get("/svr/employess/resetData", (req, res) => {
    let connection = mysql.createConnection(connData);
    let sql = "TRUNCATE TABLE employess";
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send("Data reset successfully");
        }
        connection.end();
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
