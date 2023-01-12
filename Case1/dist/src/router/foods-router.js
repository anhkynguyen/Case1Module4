"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get('/create', HomeController_1.default.showFormCreate);
exports.foodRouter.post('/create', HomeController_1.default.create);
exports.foodRouter.get('/update/:id', HomeController_1.default.showFormUpdate);
exports.foodRouter.post('/update/:id', HomeController_1.default.update);
exports.foodRouter.get('/remove/:id', HomeController_1.default.delete);
exports.foodRouter.get('/delete/:id', HomeController_1.default.showFormDelete);
//# sourceMappingURL=foods-router.js.map