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
// ... (previous code)

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

// ... (remaining code)















app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });