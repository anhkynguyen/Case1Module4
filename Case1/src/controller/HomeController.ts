import {Request, Response} from "express";
import foodService from "../service/FoodService";
import categoryService from "../service/CategoryService";


class HomeController {
 private foodService;
 private categoryService

    constructor() {
        this.foodService = foodService;
        this.categoryService = categoryService;

    }

    showHome = async (req: Request, res: Response) => {
        let foods = await foodService.getAll();
       
    
        res.render('home', {foods: foods})
    }

    showFormCreate = async (req: Request, res: Response) => {
        let categories = await categoryService.getAll()
        res.render('foods/create',{categories:categories});
    }
    showFormDelete = async (req: Request, res: Response) => {
        let id = req.params.id
        res.render('foods/delete',{id:id});
    }
    showFormUpdate = async (req: Request, res: Response) => {
        let id = req.params.id
        let food= await this.foodService.findById(id)
        let categories = await this.categoryService.getAll()
        res.render('foods/update',{food:food,categories:categories});
    }


  create = async (req: Request, res: Response) => {
      if (req.files) {
          let image = req.files.image;  
          if ('mv' in image) {
              await image.mv('./public/storage/' + image.name)
              let food = req.body;
              food.image = '/storage/' + image.name;
              await foodService.save(food);
              res.redirect(301, '/home');
          }
      }
  }
  update = async (req: Request, res: Response) => {
    let id = req.params.id;
    let newFood = req.body;
    
     await this.foodService.update(id, newFood);
    res.redirect(301, '/home');
}
delete = async (req: Request, res: Response) => {
    let id = req.params.id;
     await this.foodService.remove(id);
    res.redirect(301, '/home');

}
}

export default new HomeController();
