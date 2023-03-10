const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const Log = require("./models/Log");
const User = require("./models/User");
var cors = require("cors"); 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.use(cors()); // <=  allows for certain accesses to  use our API routes)
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

/**
 * Create
 * POST /users
 */
app.post("/users", async (req, res) => {
  const params = req.body;
  const user = await User.create(params);
  res.json(user);
});

/**
 * Create session. Looks for a user with a matching email and password.
 * POST /login
 */
app.post("/login", async (req, res) => {
  const { email, password } = req.body; // { email: "...", password: "..." }
  const user = await User.findOne({ email, password });
  res.json(user);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../frontend/build/index.html"));
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await mongoose.connect(process.env.MONGODB_URL);
});
