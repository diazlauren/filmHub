const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host :               "localhost",
    user :               "root",
    password :           "admin1",
    database :           "filmHub",
    multipleStatements : true
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("Connection successful...");
    } else {
        console.log("Connection failed: ", err);
    }
});

module.exports = mysqlConnection;