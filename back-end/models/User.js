const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique: true
    },
    email:{
        type: String,
        require:true,
        unique: true
    },
    password:{
        type: String,
        require:true,
    },
    phone_number:{
        type: Number,
        require:true,
        unique: true
    }
    
})

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;