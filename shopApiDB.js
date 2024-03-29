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

app.get("/shops", async function (req, res) {
    try {
      const result = await pool.query("SELECT * FROM shops");
      res.send(result.rows);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.get("/shops/:id", async function (req, res) {
    try {
      const shopId = +req.params.id;
      const result = await pool.query(`SELECT * FROM shops WHERE "shopid" = $1`, [shopId]);
  
      if (result.rows.length > 0) {
        res.send(result.rows[0]);
      } else {
        res.status(404).send("No data found");
      }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/shops", async function (req, res) {
    try {
      const body = req.body;
      const maxIdResult = await pool.query("SELECT MAX(shopid) FROM shops");
      const maxId = maxIdResult.rows[0].max || 0;
      body.shopid = maxId + 1;
  
      const insertResult = await pool.query("INSERT INTO shops VALUES ($1, $2, $3)", [
        body.shopid,
        body.name,
        body.rent,
      ]);
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.put("/shops/:shopid", async function (req, res) {
    try {
      const shopid = +req.params.shopid;
      const body = req.body;
  
      const updateResult = await pool.query(
        `UPDATE shops SET name = $1, rent = $2 WHERE "shopid" = $3`,
        [body.name, body.rent, shopid]
      );
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  



// ...

app.get("/products", async function (req, res) {
    try {
      const result = await pool.query("SELECT * FROM products");
      res.send(result.rows);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.get("/products/:id", async function (req, res) {
    try {
      const productid = +req.params.id;
      const result = await pool.query(`SELECT * FROM products WHERE "productid" = $1`, [productid]);
  
      if (result.rows.length > 0) {
        res.send(result.rows[0]);
      } else {
        res.status(404).send("No data found");
      }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/products", async function (req, res) {
    try {
      const body = req.body;
      const maxIdResult = await pool.query("SELECT MAX(productid) FROM products");
      const maxId = maxIdResult.rows[0].max || 0;
      body.productid = maxId + 1;
  
      const insertResult = await pool.query(
        "INSERT INTO products VALUES ($1, $2, $3, $4)",
        [body.productid, body.productname, body.category, body.description]
      );
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.put("/products/:productid", async function (req, res) {
    try {
      const productid = +req.params.productid;
      const body = req.body;
  
      const updateResult = await pool.query(
        `UPDATE products SET productname = $1, category = $2, description = $3 WHERE "productid" = $4`,
        [body.productname, body.category, body.description, productid]
      );
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  app.get("/purchases", async function (req, res) {
    try {
        const { sort, shop, product } = req.query;
        let sql = "SELECT * FROM purchases WHERE 1=1";

        if (shop) {
            const shopIdArr = await pool.query(`SELECT shopid FROM shops WHERE "shopid" = $1`, [shop.substring(2, 4)]);
            const shopId = shopIdArr.rows.length > 0 ? shopIdArr.rows[0].shopid : null;
            if (shopId) sql += ` AND shopid = ${shopId}`;
        }

        if (product) {
            console.log("product1", product);
            const productIds = product.split(',').map(ele => parseInt(ele.substring(2), 10));
            console.log("product2", productIds);
            if (productIds.length === 1) {
                sql += ` AND productid = '${productIds[0]}'`;
            } else if (productIds.length > 1) {
                sql += ` AND productid IN (${productIds.join(',')})`;
            }
        }

        if (sort) {
            switch (sort) {
                case "QtyAsc":
                    sql += " ORDER BY quantity ASC";
                    break;
                case "QtyDesc":
                    sql += " ORDER BY quantity DESC";
                    break;
                case "ValueAsc":
                    sql += " ORDER BY price * quantity ASC";
                    break;
                case "ValueDesc":
                    sql += " ORDER BY price * quantity DESC";
                    break;
                default:
                    break;
            }
        }

        const result = await pool.query(sql);
        res.send(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


  app.get("/purchases/:id", async function (req, res) {
    try {
      const purchaseid = +req.params.id;
      const result = await pool.query(`SELECT * FROM purchases WHERE "purchaseid" = $1`, [purchaseid]);
  
      if (result.rows.length > 0) {
        res.send(result.rows[0]);
      } else {
        res.status(404).send("No data found");
      }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });

  app.post("/purchases", async function (req, res) {
    try {
      const body = req.body;
      const maxIdResult = await pool.query("SELECT MAX(purchaseid) FROM purchases");
      const maxId = maxIdResult.rows[0].max || 0;
      body.purchaseid = maxId + 1;
  
      const insertResult = await pool.query(
        "INSERT INTO purchases VALUES ($1, $2, $3, $4, $5)",
        [body.purchaseid, body.shopid, body.productid, body.quantity, body.price]
      );
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  app.put("/purchases/:purchaseid", async function (req, res) {
    try {
      const id = +req.params.purchaseid;
      const body = req.body;
  
      const updateResult = await pool.query(
        `UPDATE purchases SET shopid = $1, productid = $2, quantity = $3, price = $4 WHERE "purchaseid" = $5`,
        [body.shopid, body.productid, body.quantity, body.price, id]
      );
  
      res.send(body);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
  });
  
  
// ...

app.get("/purchases/shops/:id", async function (req, res) {
    try {
      const shopId = +req.params.id;
      const result = await pool.query(`SELECT * FROM purchases WHERE "shopid" = $1`, [shopId]);
  
      if (result.rows.length > 0) {
        res.send(result.rows);
      } else {
        res.status(404).send("No data found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.get("/purchases/products/:id", async function (req, res) {
    try {
      const productId = +req.params.id;
      const result = await pool.query(`SELECT * FROM purchases WHERE "productid" = $1`, [productId]);
  
      if (result.rows.length > 0) {
        res.send(result.rows);
      } else {
        res.status(404).send("No data found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.get("/totalPurchase/shop/:id", async function (req, res) {
    try {
      const shopId = +req.params.id;
      const result = await pool.query(
        `SELECT "productid" AS id, SUM(quantity) AS totalQuantity FROM purchases WHERE "shopid" = $1 GROUP BY "productid"`,
        [shopId]
      );
  
      const totalPurchase = result.rows.reduce((result, purchase) => {
        result[purchase.productid] = purchase.totalQuantity;
        return result;
      }, {});
  
      res.send(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/totalPurchase/product/:id", async function (req, res) {
    try {
        const productId = +req.params.id;
        const result = await pool.query(
            `SELECT "shopid" AS id, SUM(quantity) AS totalQuantity FROM purchases WHERE "productid" = $1 GROUP BY "shopid"`,
            [productId]
        );
        console.log(result,"121");

        const totalPurchase = result.rows.reduce((result, purchase) => {
            result[purchase.shopid] = purchase.totalQuantity;
            console.log(result,"122");
            return result;
            
        }, {});
        console.log(totalPurchase,"123");

        res.send(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


  
  // app.get("/totalPurchase/product/:id", async function (req, res) {
  //   try {
  //     const productId = +req.params.id;
  //     const result = await pool.query(
  //       `SELECT "shopid", SUM(quantity) AS totalQuantity FROM purchases WHERE "productid" = $1 GROUP BY "shopid"`,
  //       [productId]
  //     );
  
  //     const totalPurchase = result.rows.reduce((result, purchase) => {
  //       result[purchase.shopid] = purchase.totalQuantity;
  //       return result;
  //     }, {});
  
  //     res.send(totalPurchase);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Internal Server Error");
  //   }
  // });
  
  
  // ...
  



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  