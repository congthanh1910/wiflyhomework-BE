const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./services/database");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.json({
    message: "Okay.",
  });
});
//api

app.use("/login", require("./routes/login"));
app.use("/user", require("./routes/user"));
app.use("/exercises", require("./routes/exercises"));
app.use("/vocabulary", require("./routes/vocabulary"));

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
