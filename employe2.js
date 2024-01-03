const express = require("express");
const { Pool } = require("pg");

const app = express();
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

const port = process.env.PORT || 2410;

const pool = new Pool({
  user: "postgres",
  host: "db.timvwqwrfcozwdangepa.supabase.co",
  database: "postgres",
  password: "Jeevan#2021",
  port: 5432,
});

app.get("/svr/employess", async (req, res) => {
  try {
    const { department, designation, gender } = req.query;
    let sql = "SELECT * FROM employeess";

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

    const result = await pool.query(sql);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/svr/employess/:empCode", async (req, res) => {
    try {
      let empCode = req.params.empCode;
      console.log("ww", empCode);

      const result = await pool.query(`SELECT * FROM employeess WHERE "empCode" = $1`, [empCode]);
      res.send(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.get("/svr/employess/departments/:department", async (req, res) => {
  try {
    const department = req.params.department;
    const result = await pool.query(`SELECT * FROM employeess WHERE "department" = $1`, [department]);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/svr/employess", async (req, res) => {
  try {
    const { empCode, name, department, designation, salary, gender } = req.body;
    const result = await pool.query(
      "INSERT INTO employeess (empCode, name, department, designation, salary, gender) VALUES ($1, $2, $3, $4, $5, $6)",
      [empCode, name, department, designation, salary, gender]
    );
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/svr/employess/:empCode", async (req, res) => {
  try {
    const empCode = req.params.empCode;
    const { name, department, designation, salary, gender } = req.body;
    const result = await pool.query(
      `UPDATE employeess SET name=$1, department=$2, designation=$3, salary=$4, gender=$5 WHERE "empCode"=$6`,
      [name, department, designation, salary, gender, empCode]
    );
    res.send("Employee updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/svr/employess/delete/:empCode", async (req, res) => {
  try {
    const empCode = req.params.empCode;
    const result = await pool.query(`DELETE FROM employeess WHERE "empCode" = $1`, [empCode]);
    res.send("Employee deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/svr/employess/resetData", async (req, res) => {
  try {
    const result = await pool.query("TRUNCATE TABLE employeess");
    res.send("Data reset successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
