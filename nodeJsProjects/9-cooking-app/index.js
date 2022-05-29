const express = require("express");
const app = express();

//parsing data form req.body
app.use(express.urlencoded({ extended: true }));

//static assets
app.use(express.static("public"));

//templating engine
app.set("view engine", "ejs");

//fake database call to get recepie data
let recepies = require("./recepiesData.js");

//home route
app.get("/", (req, res) => {
  res.render("home");
});

//training route
app.get("/training", (req, res) => {
  res.render("training");
});

//show all recepies
app.get("/recepies", (req, res) => {
  res.render("recepies/recepies", { recepies });
});

//create new recepie page form
app.get("/recepie/new", (req, res) => {
  res.render("recepies/new");
});

//add new recepie --- via GET
// app.get("/add-recepie", (req, res) => {
//   res.send(req.query);
// });

//add new recepie --- via POST
app.post("/recepie", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const id = req.body.id;
  const img = req.body.img;

  recepies.push({ title, text, id, img });

  res.redirect("/recepies");
});

app.listen(8080, () => {
  console.log("Server Listening at PORT 8080");
});
