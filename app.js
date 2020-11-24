const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotEnv = require('dotenv').config()

const app = express();

mongoose.connect(process.env.DEV_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to Mongo Cloud Database");
}).catch(err => {
    console.log("Couldn not connect to the mongo cloud!!");
    console.log(err);
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

module.exports = app;