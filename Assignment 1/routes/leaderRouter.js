const express = require("express");

const leaderRouter = express.Router();

leaderRouter.get("/", (req, res) => {
  res.send(`All the leaders will be sent to you`);
});

leaderRouter.get("/:leaderId", (req, res) => {
  res.send(`Will send leader of id: ${req.params.leaderId}`);
});

leaderRouter.post("/", (req, res) => {
  res.send(
    `This will add leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.post("/:leaderId", (req, res) => {
  res
    .status(403)
    .send(`Post request not supported on /leaders/${req.params.leaderId}`);
});

leaderRouter.put("/:leaderId", (req, res) => {
  res.write(`Updating the leader: ${req.params.leaderId}`);
  res.end(`Leader: ${req.body.name} with details: ${req.body.description}`
  );
});

leaderRouter.put("/", (req, res) => {
  res.status(403).send(`put request not supported on /leaders`);
});

leaderRouter.delete("/", (req, res) => {
  res.send(`All the leaders will be deleted`);
});

leaderRouter.delete("/:leaderId", (req, res) => {
  res.send(`Deleting the leader of id: ${req.params.leaderId}`);
});

module.exports = leaderRouter;