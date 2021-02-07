import express from "express";
const router = express.Router();

router.get("/signin", (req, res) => {
  res.send("signin endpoint");
});

export default router;
