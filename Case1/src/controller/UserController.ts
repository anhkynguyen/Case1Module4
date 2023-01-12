import { Request, Response } from "express";
import userService from "../service/UserService";

class HomeController {
  private userService;

  constructor() {
    this.userService = userService;
  }
  showFormLogin = async (req: Request, res: Response) => {
    await this.userService.getAll();
    res.render("user/login");
  };

  ShowFormRegister = async (req: Request, res: Response) => {
    res.render("user/register");
  };
  login = async (req: Request, res: Response) => {
    let user = await this.userService.checkUserLogin(req.body);
    if (user) {
      // @ts-ignore
      req.session.User = user;
      res.redirect(301, "/home");
    } else {
      res.redirect(301, "/users/login");
    }
  };
  register = async (req: Request, res: Response) => {
        let user = req.body; 
        await userService.save(user);
        res.redirect(301, "/users/login");
      }
      
    
  
}

export default new HomeController();
