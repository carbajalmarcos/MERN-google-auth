import express, { Request, Response } from "express";
import createError from "http-errors";
import * as dotenv from "dotenv";
import passport from "passport";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import { connectDB } from "./db";
import { corsOptions } from "./utils";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import { isAuth } from "./midlewares";

// env variables init
dotenv.config();
//passport init
import "./services/passportService";
//DB connection
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

//cookie midleware
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // how long this cookie could exist in browser
  keys: [process.env.COOKIE_KEY as string],
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRouter);
app.use("/user", isAuth, userRouter);
app.get("/isAuth", isAuth, (req: Request, res: Response) => {
  res.sendStatus(200);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.get("/ping", (req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
