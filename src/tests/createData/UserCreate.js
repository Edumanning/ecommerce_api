const User = require("../../models/User")

const userCreate = async () => {

    const user = {
        firstName: "Eduardo",
        lastName: "Manning",
        email: "edumanning93@gmail.com",
        password: "eduardo123",
        phone: "3204489827"
    }

    await User.create(user)

}

module.exports = userCreate