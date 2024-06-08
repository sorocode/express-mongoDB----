const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
let database;

mongoose.connect(process.env.DB_URI);
database = mongoose.connection;
database.on("connected", () => {
  console.log("db connected");
});
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const diaryRouter = require("./routes/diary");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "src/views");
const sessionObj = {
  secret: "myKey",
  resave: true,
  saveUninitialized: true,
};
app.use(session(sessionObj));

app.use(diaryRouter);
app.use(loginRouter);
app.use(indexRouter);
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}/ `);
});
