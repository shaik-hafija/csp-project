const express = require("express");
const Result1 = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;                                  
  console.log(Details);
  Result1.Result1("plantss", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Result1.Result1("plantss", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result1.Result1("plantss", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result.Message);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});
Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
  Result1.Result1("plantss", "Read", Details)
    .then((result) => {
      res.send(result.rows);
      console.log(result);
    })
    .catch((err) => {
      res.send(err.message);
      console.log(err);
    });
});

module.exports = Router;

