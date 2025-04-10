const mongoose = require("mongoose");

const keywordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    keyword: [{
        word: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }],
});

module.exports = mongoose.model("Keyword", keywordSchema);
