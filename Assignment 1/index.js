const express = require("express");

const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const app = express();

app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000....");
});