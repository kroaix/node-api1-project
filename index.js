// implement your API here
const express = require("express");
const server = express();
const db = require("./data/db.js");

server.listen(4000, () => {
  console.log("===Server is listening on port 4000===")
});

server.use(express.json());

server.get("/api/users", (req, res) => {
  db.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(() => {
    res
      .status(500)
      .json({
        success: false,
        error: "The users information could not be retrieved."
      });
  })
})

server.get("/api/users/:id", (req, res) => {
  const {id} = req.params;
  db.findById(id)
  .then(user => {
    if(user){
      res.status(200).json({ success: true, user })
    } else {
      res
        .status(404)
        .json({
          success: false,
          message: "The user with the specified ID does not exist."
        });
    }
  })
  .catch(() => {
    res
      .status(500)
      .json({ error: "The user information could not be retrieved." });
  })
})

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

server.delete("/api/users/:id", (req, res) => {
  const {id} = req.params;

  db.remove(id)
  .then(deleted => {
    if(deleted){
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({
          success: false,
          message: "The user with the specified ID does not exist."
        });
    }
  })
  .catch(() => {
    res.status(500).json({ error: "The user could not be removed" });
  })
})

