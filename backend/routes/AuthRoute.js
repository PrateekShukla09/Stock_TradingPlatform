const express = require("express");
const { signupUser, loginUser } = require("../controller/AuthController");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;