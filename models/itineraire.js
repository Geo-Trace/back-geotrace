const mongoose = require("mongoose");

const ItineraireSchema = new mongoose.Schema({
    subscriptions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription",
        },
    ],
    level: { type: String, default: "beginner" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Itineaire = new mongoose.model("Customer", ItineraireSchema);

module.exports = Itineaire;