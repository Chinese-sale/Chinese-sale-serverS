const mongoose = require("mongoose");
const express = require("express");
const itemRout = require("./routes/item");
const app = express();


app.use(express.json())
app.use("/item", itemRout)