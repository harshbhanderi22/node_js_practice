const mongoose = require('mongoose');


const LoginSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String
});

const LoginModel = new mongoose.model('user', LoginSchema);

module.exports = LoginModel;