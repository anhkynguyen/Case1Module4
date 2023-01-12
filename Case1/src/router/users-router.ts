import { Router } from "express";
import UserController from "../controller/UserController";
export const userRouter = Router();

userRouter.get("/login", UserController.showFormLogin);
userRouter.post("/login", UserController.login);
userRouter.get("/register", UserController.ShowFormRegister);
userRouter.post("/register", UserController.register);




