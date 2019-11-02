// implement your API here
const express = require("express");
const server = express();
const db = require("./data/db.js");

server.listen(4000, () => {
  console.log("===Server is listening on port 4000===")
});

server.use(express.json());

server.post("/api/users", (req, res) => {
  const userInfo = req.body;

  if (!userInfo.name || !userInfo.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." })
      .end();
  } else {
    db.insert(userInfo)
      .then(user => {
        res.status(201).json({ success: true, user });
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          error: "There was an error while saving the user to the database"
        });
      });
  }
});