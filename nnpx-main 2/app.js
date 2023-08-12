const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
  })
  .then((connect) => console.log("connected to mongodb.."))
  .catch((e) => console.log("could not connect to mongodb", e));
mongoose.Promise = global.Promise;

const routes = require("./routes/routes");
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.use(routes);
app.listen(process.env.PORT, () =>
  console.log("server is listening at port " + process.env.PORT)
);
