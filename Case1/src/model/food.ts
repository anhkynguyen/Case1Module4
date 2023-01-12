import { ICategory } from "./category";
import { model, Schema } from "mongoose";

export interface IFood {
  name?: string;
  price?: number;
  description: string;
  image?: string;
  category?: ICategory;
}

const FoodSchema = new Schema<IFood>({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: {
    type: String,
    ref: "Category",
  },
});

const Food = model<IFood>("Food", FoodSchema);
export { Food };
