const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, "First Name Should be 3 Characters Long"],
        },
        lastname:{
            type:String,
            minlength:[3, "First Name Should be 3 Characters Long"],
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,'Email must be 5 Characters Long'],
        },
        password:{
            type:String,
            required:true,
            selec:false
        },
        sockerId:{
            type:String,
        }
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 5);    
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;