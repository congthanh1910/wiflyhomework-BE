const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3030;
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./services/database");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middlewares
app.use(passport.initialize());
require("./middlewares/passport")(passport);
app.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    res.json({
      message: "Okay",
    });
  }
);

//api
app.use("/login", require("./routes/login"));
app.use("/admin", require("./routes/user"));
app.use("/exercises", require("./routes/exercises"));
app.use("/vocabulary", require("./routes/vocabulary"));

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
