import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    state = {
        username: '',
        department: '',
        password: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </>
        );
    }
}

export default SignUp;
