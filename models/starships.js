const mongoose = require("../database");

const StarshipsSchema = new mongoose.Schema(
            {
                name: {
                    type: String,
                    required: true
                },
                model: {
                    type: String,
                    required: true
                },
                manufacturer: {
                    type: String,
                    required: true
                },
                cost_in_credits: {
                    type: String,
                    required: true
                },
                length: {
                    type: String,
                    required: true
                },
                max_atmosphering_speed: {
                    type: String,
                    required: true
                },
                crew: {
                    type: String,
                    required: true
                },
                passengers: {
                    type: String,
                    required: true
                },
                cargo_capacity: {
                    type: String,
                    required: true
                },
                consumables: {
                    type: String,
                    required: true
                },
                starship_class: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                }

});

const Starships = mongoose.model("Starships", StarshipsSchema);
module.exports = Starships;
