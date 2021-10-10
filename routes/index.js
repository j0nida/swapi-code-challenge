const express = require('express');
const {getData} = require("../helpers");
const stream = require("stream");
const Starship = require("../models/starships");
const Vehicle = require("../models/vehicles");

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fill-db', async (req, res, next) =>
{
  let starships = await getData("https://swapi.dev/api/starships");
  let vehicles = await getData("https://swapi.dev/api/vehicles");
  // people = await getData("https://swapi.dev/api/people");
  if (starships == null && vehicles == null)
    return res.send({message: "empty"});

  Starship.exists({name:starships[0].name}, function (err, result)
  {
    if (err)
     return res.send(err)
    else
    {
      if(result)
        return res.send({message:"already exits"});
      else
        Starship.insertMany(starships);
    }
  });
  Vehicle.exists({name:vehicles[0].name}, function (err, result)
  {
    if (err)
     return res.send(err)
    else
    {
      if(result)
        return res.send({message:"already exits"});
      else
        Vehicle.insertMany(vehicles);
    }
  });

})

router.post("/s", async (req, res) => {
  try
  {
    let starshipss = await getData("https://swapi.dev/api/starships");
    console.log(starships)
    let arrLength = starshipss.length;
    for (let i = 0; i < arrLength; i++) {

    }
    return res.render("index",{  starshipss });

  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
