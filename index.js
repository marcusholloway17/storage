require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { corsOptions, credentials } = require("./middlewares/cors");
const { logger } = require("./middlewares/logEvents");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 3000;
const info = {
  title: "STORAGE WEB SERVICE",
  description: "Web service to store and serve files",
};

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// set view engine
app.set("view engine", "ejs");
app.set("views", "views");

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use("/public/", express.static(path.join(__dirname, "/public")));

// entry point route
app.get("/", (req, res) => {
  res.render("index", { info });
});

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
