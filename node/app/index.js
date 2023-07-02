const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  port: 3306,
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (
                              id INT auto_increment,
                              name VARCHAR(255),
                              primary key (id)
                    );`;
connection.query(createTable);

const sql = `INSERT INTO people(name) values('Wesley')`;
connection.query(sql);

const sqlRodrigo = `INSERT INTO people(name) values('Rodrigo')`;
connection.query(sqlRodrigo);

app.get("/", (_, res) => {
  const query = `select * from  people;`;
  res.write(`<h1>Full Cycle</h1>`);
  connection.query(query, (_, result) => {
    if (result) {
      result.forEach((e) => {
        res.write(`<p>${e.name}</p>`);
      });
    }
    res.end();
  });
});

app.listen(port, () => {
  console.log("Listening->>> " + port);
});
