const sqlite3 = require('sqlite3').verbose();
const path = require("path");

// create database connection
let db = new sqlite3.Database('./app.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao Banco de Dados.');
});

const sql = `SELECT * FROM Translate WHERE Learned = 0 ORDER BY random() LIMIT 1`;

const result = db.all(sql, [],(err, rows) => {
  if (err) return console.error(err.message);

  rows.forEach((row) => {
    console.log(row)
  })
})


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
