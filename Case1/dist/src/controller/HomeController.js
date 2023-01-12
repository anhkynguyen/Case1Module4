"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FoodService_1 = __importDefault(require("../service/FoodService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let foods = await FoodService_1.default.getAll();
            res.render('home', { foods: foods });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await CategoryService_1.default.getAll();
            res.render('foods/create', { categories: categories });
        };
        this.showFormDelete = async (req, res) => {
            let id = req.params.id;
            res.render('foods/delete', { id: id });
        };
        this.showFormUpdate = async (req, res) => {
            let id = req.params.id;
            let food = await this.foodService.findById(id);
            let categories = await this.categoryService.getAll();
            res.render('foods/update', { food: food, categories: categories });
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ('mv' in image) {
                    await image.mv('./public/storage/' + image.name);
                    let food = req.body;
                    food.image = '/storage/' + image.name;
                    await FoodService_1.default.save(food);
                    res.redirect(301, '/home');
                }
            }
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            let newFood = req.body;
            await this.foodService.update(id, newFood);
            res.redirect(301, '/home');
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.foodService.remove(id);
            res.redirect(301, '/home');
        };
        this.foodService = FoodService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map