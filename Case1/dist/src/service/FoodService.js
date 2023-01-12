"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../model/food");
class FoodService {
    constructor() {
        this.getAll = async () => {
            let foods = await food_1.Food.find().populate("category");
            return foods;
        };
        this.save = async (food) => {
            return food_1.Food.create(food);
        };
        this.update = async (id, newFood) => {
            let food = await await food_1.Food.findOne({ _id: id });
            if (!food) {
                return null;
            }
            return food_1.Food.updateOne({ _id: id }, newFood);
        };
        this.findById = async (id) => {
            let food = await food_1.Food.findOne({ _id: id });
            if (!food) {
                return null;
            }
            return food;
        };
        this.remove = async (id) => {
            let food = await food_1.Food.findOne({ _id: id });
            if (!food) {
                return null;
            }
            return food_1.Food.deleteOne({ _id: id });
        };
    }
}
exports.default = new FoodService();
//# sourceMappingURL=FoodService.js.map