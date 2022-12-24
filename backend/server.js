const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const Log = require("./models/Log");
var cors = require("cors");

app.use(cors());
app.use(express.json());

/**
 * Index (Read Multiple)
 * GET /logs
 */
app.get("/logs", async (req, res) => {
  const logs = await Log.find({});
  res.json(logs);
});

/**
 * Show (Read One)
 * GET /logs/:id
 */
app.get("/logs/:id", async (req, res) => {
  const id = req.params.id;
  const log = await Log.findById(id);
  res.json(log);
});

/**
 * Update (Update one)
 * PUT /logs/:id
 */
app.put("/logs/:id", async (req, res) => {
  const id = req.params.id;
  const params = req.body;
  const log = await Log.findById(id);
  log.set(params);
  await log.save();
  res.json(log);
});

/**
 * Delete (Delete one)
 * DELETE /logs/:id
 */
app.delete("/logs/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Log.deleteOne({ _id: id });
  res.json(deleted);
});

/**
 * Create
 * POST /logs
 */
app.post("/logs", async (req, res) => {
  const params = req.body;
  const log = await Log.create(params);
  res.json(log);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await mongoose.connect(
    "mongodb+srv://mamin89:Cycle30@cycle-30-cluster.enucpaz.mongodb.net/BloomingTech?retryWrites=true&w=majority"
  );
});
