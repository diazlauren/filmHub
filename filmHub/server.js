
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const filmsRoutes = require("./routes/films");

var app = express();
app.use(bodyParser.json());

app.use("/films", filmsRoutes);

app.listen(3000);

