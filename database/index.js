const mongoose = require("mongoose");
//import { env } from 'process';
const URI =
    "mongodb+srv://admin-jona:admin@cluster0.s2szt.mongodb.net/swapi?retryWrites=true&w=majority\n" +
    "\n";


mongoose.connect(URI);
mongoose.Promise = global.Promise;

module.exports = mongoose;
