const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const scret = "Dhoni$07@$"
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check for existing user
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Create a new user
        user = new User({ username, email, password });
        await user.save();

        // Create JWT
        const payload = { user: { id: user.id } };
        // const token = jwt.sign(payload, scret, { expiresIn: "1h" });

        res.status(201).json({ message: "successful signup please login" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check for existing user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Create JWT
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, scret, { expiresIn: "1h" });

        res.json({ token: token, message: "login success", username: user.username });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
