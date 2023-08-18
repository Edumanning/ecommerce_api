const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");


//Product -> catergoryId

Product.belongsTo(Category) 
Category.hasMany(Product)

Cart.belongsTo(User)
User.hasMany(Cart)