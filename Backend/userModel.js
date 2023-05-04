const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String,
})

const User = mongoose.model("User", userSchema);
module.exports = User;