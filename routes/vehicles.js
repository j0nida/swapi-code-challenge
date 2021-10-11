const Vehicles = require("../models/vehicles");
const express = require("express");
const Starships = require("../models/starships");
const router = express.Router();

router.post("/vehicle", async (req, res) => {
    try {
        console.log(req.body)

        const vehicles = await Vehicles.create(req.body);
        res.redirect("/vehicles");
    } catch (err) {
        return res.status(400).send({ error: " Failed", err });
    }
});

router.get("/", async (req, res) => {
    try {
        const vehicles = await Vehicles.find({});
        res.render("vehicles", {vehicles});
    } catch (err) {
        return res.status(400).send({ error: " Failed", err });
    }
});

router.get("/create-vehicle", async (req, res) => {
    res.render("create-vehicle");
});


module.exports = router;

