
require('./models/config')
const dotenv = require('dotenv')
const cron = require("node-cron");
const express = require('express')
const bodyparser = require('body-parser')
const { application } = require("express");
const routes = require('./routes/mainRoutes')
dotenv.config()
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/", routes)
const server = app.listen(process.env.port, () => {
    console.log(`App is runnning on port no : ${process.env.port}`);
})

module.exports = server 
