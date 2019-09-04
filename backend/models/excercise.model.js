const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;
const exerciseSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);
const Exercise = Mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
