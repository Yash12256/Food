const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    }
  
});

module.exports = mongoose.model('foodCategory', UserSchema);
