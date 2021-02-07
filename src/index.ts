import express from "express";
// import "express-async-errors";
const logger = require("morgan");

const PORT = 3000;

import signinRouter from "./router/signin";
import signoutRouter from "./router/signout";
import signupRouter from "./router/signup";
import currentUserRouter from "./router/current-user";
import errorHandler from "./middlewares/error-handlers";
import NotFoundError from "./errors/not-found-error";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/api/users", signinRouter);
app.use("/api/users", signoutRouter);
app.use("/api/users", signupRouter);
app.use("/api/users", currentUserRouter);
app.all("*", async (req, res, next) => {
  next(new NotFoundError(req.url));
});
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
