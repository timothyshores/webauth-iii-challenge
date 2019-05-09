import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    state = {
        username: '',
        department: '',
        password: '',
    };

    render() {
        return (
            <>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
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
