import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/" + props.exercise._id}>edit</Link>|
                <a
                    href="a"
                    onClick={() => {
                        props.deleteExercise(props.exercise._id);
                    }}>
                    delete
                </a>
            </td>
        </tr>
    );
};
export default class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.exerciseList = this.exerciseList.bind(this);
    }
    state = {
        exercise: []
    };
    componentDidMount() {
        axios
            .get("http://localhost:5000/exercises/")
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        exercise: res.data
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    deleteExercise(id) {
        axios
            .delete("http://localhost:5000/exercises/add" + id)
            .then(res => console.log(res.data));
        this.setState({
            exercise: this.state.exercise.filter(el => el._id !== id)
        });
    }
    exerciseList() {
        return this.state.exercise.map(e => {
            return (
                <Exercise
                    exercise={e}
                    deleteExercise={this.deleteExercise}
                    key={e._id}></Exercise>
            );
        });
    }
    render() {
        return (
            <div>
                <h3>logged Exercise</h3>
                <table className="table">
                    <thread className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thread>
                    <tbody>{this.exerciseList()}</tbody>
                </table>
            </div>
        );
    }
}
