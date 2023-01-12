import { Food } from "../model/food";

class FoodService {
  constructor() {}

  getAll = async () => {
    let foods = await Food.find().populate("category");
    return foods;
  };  

  save = async (food) => {
    return Food.create(food);
  };
  update = async (id, newFood) => {
    let food = await await Food.findOne({ _id: id });

    if (!food) {
      return null;
    }
    return Food.updateOne({ _id: id }, newFood);
  };
  findById = async (id) => {
    let food = await Food.findOne({ _id: id });
    if (!food) {
      return null;
    }
    return food;
  };
  remove = async (id) => {
    let food = await Food.findOne({ _id: id });
    if (!food) {
      return null;
    }
    return Food.deleteOne({ _id: id });
  };
}
export default new FoodService();
