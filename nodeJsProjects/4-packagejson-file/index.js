const figlet = require("figlet");
const colors = require("colors");

figlet("Noaman Saleem", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(colors.underline(data.rainbow));
});
