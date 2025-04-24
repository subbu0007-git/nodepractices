const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/authcontroller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
