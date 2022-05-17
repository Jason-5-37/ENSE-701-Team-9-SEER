const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String
    }
});

module.exports = Manager = mongoose.model('manager', ManagerSchema);