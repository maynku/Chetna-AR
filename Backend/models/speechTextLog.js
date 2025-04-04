const mongoose = require("mongoose");

const speechTextSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    fullText: { 
        type: String, default: "" 
    }, // continuous appended text
    updatedAt: { 
        type: Date, default: Date.now() 
    }
});

module.exports = mongoose.model("SpeechText", speechTextSchema);
