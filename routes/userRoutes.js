const express = require('express');
const router = express.Router();
const { signupUser } = require('../controllers/userController');

router.route("/signup").post(signupUser);

module.exports = router;