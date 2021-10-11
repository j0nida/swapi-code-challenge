const Starships = require("../models/starships");
const express = require("express");
const router = express.Router();

router.post("/starship", async (req, res) => {
    try {
        console.log(req.body)

        const starships = await Starships.create(req.body);
        res.redirect("/starships");
    } catch (err) {
        return res.status(400).send({ error: " Failed", err });
    }
});


router.get("/", async (req, res) => {
    try {
        const starships = await Starships.find({});
        res.render("starships", {starships});
    } catch (err) {
        return res.status(400).send({ error: " Failed", err });
    }
});

router.get("/create-starship", async (req, res) => {
       res.render("create-starship");
});

module.exports = router;
