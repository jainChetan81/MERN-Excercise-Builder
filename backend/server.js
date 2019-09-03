const express = require("express"),
    cors = require("cors"),
    mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
