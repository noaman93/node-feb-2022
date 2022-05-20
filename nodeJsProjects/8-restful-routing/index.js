const express = require("express");
const path = require("path");
const app = express();

//IMPORTING data from data.json file
const data = require("./data.json");

//SETTING STATIC ASSETS
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

//SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //one time setting per App

//ROUTES
app.get("/", (req, res) => {
  // console.log(data.data[2]);

  res.render("home");
});

app.get("/products", (req, res) => {
  //connected Database and fetched all products
  //   const products = ["Jeans", "Shoes", "Polo", "Belts"];
  const products = [
    { name: "Jeans", price: 2100 },
    { name: "Shoes", price: 3400 },
    { name: "Polo", price: 1500 },
    { name: "Belts", price: 900 },
  ];
  res.render("products", { products });
});

app.get("/blogs", (req, res) => {
  res.render("blogs");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/random", (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  let name = "Nomi";
  res.render("random", { num, name });
});

app.listen(8080, () => {
  console.log(`Server Listening at Port 3000`);
});
