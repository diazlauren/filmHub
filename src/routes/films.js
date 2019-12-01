const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/films", (req, res) => {
    mysqlConnection.query("SELECT * FROM films", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log("MySQL query error: ", err);
        }
    })
})

module.exports = Router;