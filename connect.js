const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const excelToSqlite = require("excel-to-sqlite");
let excelPath = path.join(__dirname, "tabela-tradutor.xlsx"); // File "tabela-tradutor.xlsx" in the current directory
let excel = excelToSqlite(excelPath);

// create database connection
let db = new sqlite3.Database('./assets/db/app-english.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

let sheets = excel.sheets;
console.log(sheets);

let sheet = excel.readSheet("Sheet1");
let data = sheet.data;

// Save without changing the name
sheet.saveTo("database.sqlite").then((database) => {
  console.log(`Sheet ${sheet._name} saved in "database.sqlite"!`);
});

let data = sheets.data;

sheets.saveTo("database.sqlite").then((database) => {
  console.log("Whole database saved in sqlite!");
});

//create table database
db.serialize(function() {
  db.run('CREATE TABLE if not exists "TRADUTOR" (English TEXT, Portuguese TEXT, Learned INT)');
})


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
