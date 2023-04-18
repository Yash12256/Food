const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    CategoryName:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [{
        type: String
    }],
    description: {
        type: String,
        required: true
    }
  
});

module.exports = mongoose.model('foodItem', UserSchema);
