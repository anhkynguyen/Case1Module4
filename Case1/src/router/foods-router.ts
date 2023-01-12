import {Router} from "express";
import homeController from "../controller/HomeController";
export const foodRouter = Router();
foodRouter.get('/create', homeController.showFormCreate);
foodRouter.post('/create' , homeController.create);
foodRouter.get('/update/:id', homeController.showFormUpdate);
foodRouter.post('/update/:id', homeController.update);
foodRouter.get('/remove/:id' , homeController.delete);
foodRouter.get('/delete/:id', homeController.showFormDelete);



