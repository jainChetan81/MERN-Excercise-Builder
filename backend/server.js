const express = require("express"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = process.env.PORT || 5000,
    key = require("./key"),
    exercisesRouter = require("./routes/exercises"),
    userRouters = require("./routes/users");

app.use(cors());
app.use(express.json());

mongoose.connect(key.mongodb, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb database connected properly");
});

app.use("/exercises", exercisesRouter);
app.use("/users", userRouters);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
