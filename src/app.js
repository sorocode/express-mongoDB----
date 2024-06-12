const express = require("express");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
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
const diariesRouter = require("./routes/diaries");
const port = 3000;

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
app.use(multer({ storage: fileStorage }).single("image"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/src/images", express.static(path.join(__dirname, "images")));

app.set("view engine", "ejs");
app.set("views", "src/views");
const sessionObj = {
  secret: "myKey",
  resave: true,
  saveUninitialized: true,
};
app.use(session(sessionObj));

app.use(diariesRouter);
app.use(diaryRouter);
app.use(loginRouter);
app.use(indexRouter);
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}/ `);
});
