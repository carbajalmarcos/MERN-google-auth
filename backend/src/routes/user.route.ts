import { Response } from "express";
import express, { Request } from "express";
import { getUser } from "../controller/user.controller";

const router = express.Router();

router.get("/me", getUser);

export default router;