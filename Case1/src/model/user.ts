import { model, Schema } from "mongoose";

export interface IUser {
  username?: string;
  password?: string;
  email?: string;
}

const UserSchema = new Schema<IUser>({
  username: String,
  password: String,
  email: String,
});

const User = model<IUser>("User", UserSchema);
export { User };
