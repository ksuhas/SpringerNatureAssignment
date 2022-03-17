const UserModel = require("../models/userModel");

// Register User 
exports.signupUser = async(req, res, next) => {
    try{
    const { firstname, lastname, email, password, phonenumber, subscribetonewsletter } = req.body;
    const user = await UserModel.create({
        firstname,
        lastname,
        email,
        password,
        phonenumber,
        subscribetonewsletter
    });
    return res.status(201).json({
        success : true,
        message : "User has been signup successfully...",
        user
    })
    }catch(err){
        return res.json({
            success : false,
            message : err.message
        });
    }
};
