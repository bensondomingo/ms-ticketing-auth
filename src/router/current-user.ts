import express from "express";
const router = express.Router();

router.get("/currentuser", (req, res) => {
  res.send("current-user endpoint");
});

module.exports = router;
