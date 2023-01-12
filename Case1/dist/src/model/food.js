"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = require("mongoose");
const FoodSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: {
        type: String,
        ref: "Category",
    },
});
const Food = (0, mongoose_1.model)("Food", FoodSchema);
exports.Food = Food;
//# sourceMappingURL=food.js.map