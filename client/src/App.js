import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Users from './users/Users';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>JSON Web Token Client</h1>
                <NavLink to="/">Home</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/login">Login</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/signup">Sign Up</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/users">Users</NavLink>
            </header>
            <main>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/users" component={Users} />
            </main>
        </div>
    );
}

export default App;
