const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    firstname : { 
        type : String, 
        required : [true, 'Please enter yuor first name'],
        maxlength : [20, 'Name cannot exceed 20 characters'],
        minlength : [4, 'Name should have more than 4 characters']
    },
    lastname : { 
        type : String, 
        required : [true, 'Please enter last name'],
        maxlength : [20, 'Name cannot exceed 20 characters'],
        minlength : [4, 'Name should have more than 4 characters']
    },
    email :{
        type : String, 
        required : [true, 'Please enter your email'],
        unique : true,
        validate : [validator.isEmail, "Please enter valid email"]
    },
    password:{
        type : String, 
        required : [true, 'Please enter your password'],
        minlength : [8, 'Password should have more than 8 characters'],
    },
    phonenumber :{
        type : Number,
        maxlength : [10, 'Phonenumber cannot exceed 10 numbers'],
        minlength : [10, 'Phonenumber should have more than 10 numbers'] 
    },
    subscribetonewsletter:{
        type : Boolean,
        default : false  
    },
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});


module.exports = mongoose.model("User", userSchema);