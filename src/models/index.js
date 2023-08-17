const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");


//Product -> catergoryId

Product.belongsTo(Category) 
Category.hasMany(Product)
