import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Users from './users/Users';
import Reminder from './auth/Reminder';

import './App.css';

function App(props) {
    const logout = () => {
        localStorage.removeItem('authorization');
        window.location.pathname = '/'
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>JSON Web Token Client</h1>
                <NavLink to="/users">Users</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/signup">Sign Up</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/login">Login</NavLink>
                &nbsp; | &nbsp;
                <a href="/" onClick={logout}>Logout</a>
            </header>
            <main>
                <Route path="/users" component={Users, Reminder} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Reminder} />
            </main>
        </div>
    );
}

export default App;
