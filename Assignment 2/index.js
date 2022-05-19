//External Imports
const express = require("express");
const mongoose = require("mongoose");

//Router Imports
const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

//Creating connection With MongoDB
mongoose.connect("mongodb://localhost:27017/nodeApp").then(() => {
    console.log("Connection With Mongo has been established...");
  }).catch((err) => {console.log(err);
  });

//creating express app
const app = express();

//body Parser setup
app.use(express.json());

//Setup Routers
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

//Listening
app.listen(3000, () => {
  console.log("Listening on port 3000....");
});
