const mongoose = require("mongoose");
const express = require("express");
const usersRout = require("./routes/users");
const app = express();

mongoose.connect("mongodb://localhost:27017/Chinese-sale-serverS")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er) });

app.use(express.json())
app.use("/users", usersRout)
app.listen(4500, () => { console.log("waiting") })
