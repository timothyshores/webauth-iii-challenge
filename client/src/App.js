import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Users from './users/Users';

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
                <Route path="/users" component={Users} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </main>
        </div>
    );
}

export default App;
