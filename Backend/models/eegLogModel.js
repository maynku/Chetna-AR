const mongoose = require("mongoose");

const eegLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    state: { type: String, enum: ["Normal", "Stress", "Panic"], required: true },
    detectedBy: { type: String, default: "ML Model" },  // optional
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("EEGLog", eegLogSchema);
