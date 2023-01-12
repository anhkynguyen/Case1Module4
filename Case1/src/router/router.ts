import { Router } from "express";
import homeController from "../controller/HomeController";
import { foodRouter } from "./foods-router";
import { userRouter } from "./users-router";

export const router = Router();
router.get("/home", homeController.showHome);
router.use("/foods", foodRouter);
router.use("/users", userRouter);
