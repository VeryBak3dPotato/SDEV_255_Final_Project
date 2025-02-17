const express = require("express");
const morgan = require("morgan");
const appRoutes = require("./routes/appRoutes");

// Express App
const app = express();

// Listen for requests
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Register View Engine
app.set("view engine", "ejs");

// Middleware & Static Files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog Routes
app.use("/home", appRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
