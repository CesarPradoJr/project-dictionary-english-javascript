const sqlite3 = require('sqlite3').verbose();
const path = require("path");

// create database connection
let db = new sqlite3.Database('./app.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  function () {
    console.log("Data Base ON");
  }
);


exports.db = db;