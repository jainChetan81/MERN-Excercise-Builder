import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    state = {
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    };
    componentDidMount() {
        this.setState({
            users: ["test"],
            username: "test user"
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    onSUbmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };
        console.log(exercise);
    }
    render() {
        return (
            <div>
                <h3>Create New Exercise log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Username: </label>
                        <select
                            ref="username"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {this.state.users.map(user => (
                                <option key={user} value={user}></option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description : </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration : </label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date : </label>
                        <div>
                            <DatePicker>
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            </DatePicker>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create Exercise Log"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
