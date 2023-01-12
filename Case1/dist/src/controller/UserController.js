"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class HomeController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await this.userService.getAll();
            res.render("user/login");
        };
        this.ShowFormRegister = async (req, res) => {
            res.render("user/register");
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUserLogin(req.body);
            if (user) {
                req.session.User = user;
                res.redirect(301, "/home");
            }
            else {
                res.redirect(301, "/users/login");
            }
        };
        this.register = async (req, res) => {
            let user = req.body;
            await UserService_1.default.save(user);
            res.redirect(301, "/users/login");
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=UserController.js.map