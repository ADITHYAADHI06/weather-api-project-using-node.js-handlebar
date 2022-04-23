const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const template_path = path.join(__dirname, "./templates/views");
const staticPath = path.join(__dirname, "./public");
const partials_path = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

const port = process.env.PORT || 3005;

app.use(express.static(staticPath));

// Routing
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error", {
    errorMsg: "Oops! Page Not Found",
  });
});

app.listen(port, () => {
  console.log("listening");
});
