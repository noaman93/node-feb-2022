const express = require("express");
const path = require("path");
const app = express();

//parsing body data
app.use(express.urlencoded({ extended: true }));

//IMPORTING data from data.json file
// const data = require("./data.json");
const data = require("./blogsData.js");

//SETTING STATIC ASSETS
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

//SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //one time setting per App

//ROUTES
app.get("/", (req, res) => {
  // console.log(data[1]);

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

//display all blogs
app.get("/blogs", (req, res) => {
  //fake database query
  const blogs = data;
  res.render("blogs/blogs", { blogs });
});

//form to create new blog
app.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

//create new blog on server ==> get
app.get("/create-blogs", (req, res) => {
  console.log(req.query);
  // const title = req.query.title;
  // const text = req.query.text;
  // const img = req.query.img;

  const { title, text, img } = req.query;
  //fake database query
  const blogs = data;

  blogs.push({ title, text, img });

  res.send(blogs);
  // res.redirect("/blogs");
});

//create new blog on server ==> post
app.post("/blogs", (req, res) => {
  console.log(req.body);
  // const title = req.query.title;
  // const text = req.query.text;
  // const img = req.query.img;

  const { title, text, img } = req.body;
  //fake database query
  const blogs = data;

  blogs.push({ title, text, img });

  // res.send(blogs);
  res.redirect("/blogs");
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
