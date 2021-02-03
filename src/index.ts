import express from "express";
const logger = require("morgan");

const PORT = 3000;

const signinRouter = require("./router/signin");
const signoutRouter = require("./router/signout");
const signupRouter = require("./router/signup");
const currentUserRouter = require("./router/current-user");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/api/users", signinRouter);
app.use("/api/users", signoutRouter);
app.use("/api/users", signupRouter);
app.use("/api/users", currentUserRouter);

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
