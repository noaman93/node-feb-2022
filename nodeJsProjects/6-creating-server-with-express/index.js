const express = require("express");
const app = express();

//port
let port = 3000;

//body parser
app.use(express.urlencoded({ extended: false }));

//ROUTES

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/catagories", (req, res) => {
  res.send("<h1>This will be all <strong>catagories</strong> page</h1>");
});

app.get("/item/:product", (req, res) => {
  //   console.log(req.params);
  const product = req.params.product;
  res.send(`<h1>Shop the best ${product} here!</h1>`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const q = req.query.q;
  if (!q) {
    res.send(`Nothing found. If nothing searched!`);
  } else {
    res.send("Search results for :" + q);
  }
});

app.post("/search", (req, res) => {
  console.log(req.body.q);
  const q = req.body.q;
  if (!q) {
    res.send(`Nothing found. If nothing searched!`);
  } else {
    res.send("Search results for :" + q);
  }
});

app.get("/contact", (req, res) => {
  res.send("<h1>This will be contact us page</h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>This will be blog page</h1>");
});

app.get("*", (req, res) => {
  res.send(`I don't know that path!`);
});

// console.log(app);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
