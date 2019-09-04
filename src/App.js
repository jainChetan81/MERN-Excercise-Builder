import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/exercises-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercises";
import CreateUser from "./components/create-user";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <br />
                <Switch>
                    <Route path="/" exact component={ExerciseList} />
                    <Route path="/edit/:id" component={EditExercise} />
                    <Route path="/create" component={CreateExercise} />
                    <Route path="/user" component={CreateUser} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
