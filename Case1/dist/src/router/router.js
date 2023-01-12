"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
const foods_router_1 = require("./foods-router");
const users_router_1 = require("./users-router");
exports.router = (0, express_1.Router)();
exports.router.get("/home", HomeController_1.default.showHome);
exports.router.use("/foods", foods_router_1.foodRouter);
exports.router.use("/users", users_router_1.userRouter);
//# sourceMappingURL=router.js.map