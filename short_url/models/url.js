const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        short_id: {
            type: String,
            required: true,
            unique: true,
        },
        redirectUrl: {
            type: String,
            required: true,
        },
        vistHistory: [{ timestamp: { type: String } }],

    },
    { timestamps: true }
)

const URL = mongoose.model("urls", userSchema);


module.exports = URL;