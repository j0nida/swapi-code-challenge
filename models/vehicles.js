const mongoose = require("../database");

const VehiclesSchema = new mongoose.Schema({

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
                vehicle_class: {
                    type: String,
                    required: false
                },
                created: {
                    type: String,
                    default: Date.now
                }

});

const Vehicles = mongoose.model("Vehicles", VehiclesSchema);
module.exports = Vehicles;
