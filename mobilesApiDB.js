let express = require("express");
let mysql = require("mysql");

let app = express();
let port = 2410;

app.use(express.json());

let connData = {
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb",
};

app.get("/svr/mobiles", (req, res) => {
    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM mobiles";
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

app.get("/svr/mobiles/:id", (req, res) => {
    let connection = mysql.createConnection(connData);
    let id = req.params.id;
    let sql = "SELECT * FROM mobiles WHERE id=?";
    connection.query(sql, [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(result);
        }
        connection.end();
    });
});

app.get("/svr/mobiles/brand/:brand", (req, res) => {
    let connection = mysql.createConnection(connData);
    let brand = req.params.brand;
    let sql = "SELECT * FROM mobiles WHERE brand=?";
    connection.query(sql, [brand], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(result);
        }
        connection.end();
    });
});

app.post("/svr/mobiles", (req, res) => {
    let connection = mysql.createConnection(connData);
    let { brand, model, price } = req.body;
    let sql = "INSERT INTO mobiles (brand, model, price) VALUES (?, ?, ?)";
    connection.query(sql, [brand, model, price], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send(  result );
        }
        connection.end();
    });
});

app.put("/svr/mobiles/:id", (req, res) => {
    let connection = mysql.createConnection(connData);
    let id = req.params.id;
    let { brand, model, price } = req.body;
    let sql = "UPDATE mobiles SET brand=?, model=?, price=? WHERE id=?";
    connection.query(sql, [brand, model, price, id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send("Mobile updated successfully");
        }
        connection.end();
    });
});

app.delete("/svr/mobiles/:id", (req, res) => {
    let connection = mysql.createConnection(connData);
    let id = req.params.id;
    let sql = "DELETE FROM mobiles WHERE id=?";
    connection.query(sql, [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(404).send("Internal Server Error");
        } else {
            res.send("Mobile deleted successfully");
        }
        connection.end();
    });
});

app.get("/svr/resetData", (req, res) => {
    let connection = mysql.createConnection(connData);
    let sql = "TRUNCATE TABLE mobiles";
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
