import express from "express";
import { router } from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import session from "express-session";
mongoose.set("strictQuery", true);
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/FoodsManager").then(() => {
  console.log("Connect Success!!");
});
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "Ky",
    cookie: { maxAge: 60000 },
  })
);
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public/"));
app.use("", router);
app.listen(8080, () => {
  console.log("Server is running!!!!");
});
