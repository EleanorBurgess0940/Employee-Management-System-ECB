const mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "employeesdb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

connection.query = util.promisify(connection.query);

module.exports = connection;
