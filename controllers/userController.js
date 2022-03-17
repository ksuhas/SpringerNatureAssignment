const UserModel = require("../models/userModel");

// Register User 
exports.signupUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, phonenumber, subscribetonewsletter } = req.body;
        const user = await UserModel.create({
            firstname,
            lastname,
            email,
            password,
            phonenumber,
            subscribetonewsletter
        });
        res.render('index.ejs', { data : { success: true, user: user, message: "User has been signed up successfully..." } });
    } catch (err) {
        res.render('index.ejs', { data : { success: false, message: err } });
    }
};
