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
app.get("/svr/mobiles", async (req, res) => {
  try {
    const { brand, ram, rom, os, sort } = req.query;
    let sql = "SELECT * FROM mobiles WHERE true";
    const values = [];

    const addCondition = (paramValues, paramName) => {
      if (paramValues && paramValues.length > 0) {
        const placeholders = paramValues.map((_, index) => `$${values.length + index + 1}`).join(', ');
        sql += ` AND ${paramName} = ANY(ARRAY[${placeholders}])`;
        values.push(...paramValues);
      }
    };

    addCondition(brand && brand.split(','), 'brand');
    addCondition(ram && ram.split(','), 'ram');
    addCondition(rom && rom.split(','), 'rom');
    addCondition(os && os.split(','), 'os');

    if (sort) {
      const sortParams = sort.split(',');
      const validSortColumns = ['id', 'name', 'price', 'brand', 'ram', 'rom', 'os'];
      
      sortParams.forEach((param) => {
        const [column, order] = param.split(':');
        if (validSortColumns.includes(column)) {
          sql += ` ORDER BY "${column}" ${order || 'ASC'}`;
        }
      });
    }

    const result = await pool.query(sql, values);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/svr/mobiles/:id", async (req, res) => {
    try {
      let id = req.params.id;
      console.log("ww", id);

      const result = await pool.query(`SELECT * FROM mobiles WHERE "id" = $1`, [id]);
      res.send(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.get("/svr/mobiles/brand/:brand", async (req, res) => {
  try {
    const brand = req.params.brand;
    const result = await pool.query(`SELECT * FROM mobiles WHERE "brand" = $1`, [brand]);
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/svr/mobiles", async (req, res) => {
  try {
    const { id, name, price, brand, ram, rom, os } = req.body;
    const result = await pool.query(
      "INSERT INTO mobiles (id, name, price, brand, ram, rom, os) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [id, name, price, brand, ram, rom, os]
    );
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/svr/mobiles/:id", async (req, res) => {
    try {
      const { id, name, price, brand, ram, rom, os } = req.body;
      const result = await pool.query(
        "INSERT INTO mobiles (id, name, price, brand, ram, rom, os) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [id, name, price, brand, ram, rom, os]
      );
      res.send(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
app.put("/svr/mobiles/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, brand, ram, rom, os } = req.body;
    const result = await pool.query(
      `UPDATE mobiles SET name=$1, price=$2, brand=$3, ram=$4, rom=$5, os=$6 WHERE "id"=$7`,
      [name, price, brand, ram, rom, os, id]
    );
    res.send("mobile updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/svr/mobiles/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(`DELETE FROM mobiles WHERE "id" = $1`, [id]);
    res.send("mobile deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/svr/mobiles/resetData", async (req, res) => {
//   try {
//     const result = await pool.query("TRUNCATE TABLE mobiles");
//     res.send("Data reset successfully");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
