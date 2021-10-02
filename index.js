require ("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose");

const database = require("./database/index");

mongoose.connect(process.env.MONGO_URL, {
useNewUrlParser : true,
useUnifiedtopology: true,
useFindAndModify: false,
useCreateIndex: true
}).then(() => console.log("connection established!!!!!"));

const bookmyshow = express();

bookmyshow.use(express.json());

