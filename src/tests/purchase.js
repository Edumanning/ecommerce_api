const request = require("supertest")
const app = require("../app")
const Product = require("../models/Product")
const Cart = require("../models/Cart")

require("../models")

const URL_BASE_USERS = "/api/v1/users"
const URL_BASE = "/api/v1/purchase"

let TOKEN
let userId
let productBody
let product
let bodyCart

// inicio de sesion

beforeAll(async () => {
    const user = {
        email: "edumanning93@gmail.com",
        password: "eduardo123",
    }
    const res = await request(app)
        .post(`${URL_BASE_USERS}/login`)
        .send(user)

    TOKEN = res.body.token
    userId = res.body.user.id
        
//product

    productBody = {
        title:"productTest",
        description: "lorem20",
        price: 23
    }

    product = await Product.create(productBody)

//cart

const bodyCart = {
    quantity:1,
    productId: product.id,
}

await Cart.create(bodyCart)

})

test("POST 'URL_BASE', should return status code 201 and res.body.quantity === bodyCart.quantity", async() => {
    const res = await request(app)
        .post(URL_BASE)
        .set("Authorization", `Bearer ${TOKEN}`)

    expect(res.status).toBe(201)
    expect(res.body.quantity).toBe(bodyCart.quantity)
})