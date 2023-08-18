const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const Purchase = require("./Purchase");
const User = require("./User");


//Product -> catergoryId
Product.belongsTo(Category) 
Category.hasMany(Product)

//Cart -> userId
Cart.belongsTo(User)
User.hasMany(Cart)

//Cart -> productId
Cart.belongsTo(Product)
Product.hasMany(Cart)

//Purchase -> userId
Purchase.belongsTo(User)
User.hasMany(Cart)

//Purchase -> productId
Purchase.belongsTo(Product)
Product.hasMany(Purchase)