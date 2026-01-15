import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./Config.js";
import CategoryModel from "../Category/CategoryModel.js";
import ProductModel from "../Products/ProductModel.js";
import UserModel from "../Users/UserModel.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = CategoryModel(sequelize, DataTypes);
db.Product = ProductModel(sequelize, DataTypes);
db.Users = UserModel(sequelize , DataTypes);

export default db;