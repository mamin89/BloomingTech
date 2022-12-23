const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/logs", (req, res) => {
  // pull new log info from req
  // store the log in fo in the db
  // return the new log info
  res.json({ id: 12, title: "test title", date: new Date() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
