const Router = require("express").Router();
let Exercise = require("../models/exercise.model");
Router.get("/", (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err));
});
Router.post("/add", (req, res) => {
    const username = req.body.username,
        description = req.body.description,
        duration = Number(req.body.duration),
        date = Date.parse(req.body.date),
        newExercise = new Exercise({ username, description, duration, date });
    newExercise
        .save()
        .then(() => res.json("Exercise added!"))
        .catch(err => {
            res.status(400).json("Error : " + err);
        });
});
Router.get("/:id", (req, res) => {
    Exercise.findById(
        req.params.id
            .then(exercise => res.json(exercise))
            .catch(err => {
                res.status(400).json("Error :", err);
            })
    );
});
Router.delete("/:id", (req, res) => {
    Exercise.findByIdAndDelete(
        req.params.id
            .then(() => res.json("exercise delete"))
            .catch(err => {
                res.status(400).json("Error :", err);
            })
    );
});
Router.post("/update/:id", (req, res) => {
    Exercise.findById(
        req.params.id
            .then(exercise => {
                exercise.username = req.body.username;
                exercise.description = req.body.description;
                exercise.duration = Number(req.body.duration);
                exercise.date = Date.parse(req.body.date);
                exercise
                    .save()
                    .then(() => res.json("Exercise updated"))
                    .catch(err => res.status(400).json("Error :", err));
            })
            .catch(err => {
                res.status(400).json("Error :", err);
            })
    );
});
module.exports = Router;
