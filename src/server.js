
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const filmsRoutes = require("./routes/films");

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('./public'));

app.use(bodyParser.json());

app.use("/films", filmsRoutes);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/films", (req, res) => {
  res.render("films", { title: "Films" });
});

app.get("/mylist", (req, res) => {
  res.render("mylist", { title: "My List" });
});

app.listen(3000);

