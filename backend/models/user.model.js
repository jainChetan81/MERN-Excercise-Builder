import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        }
    },
    {
        timestamps: true
    }
);
const User = Mongoose.model("User", userSchema);
module.exports = User;
 