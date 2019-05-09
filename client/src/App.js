import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUp from './auth/SignUp';
import Users from './users/Users';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavLink to="/">Home</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/signup">Sign Up</NavLink>
                &nbsp; | &nbsp;
                <NavLink to="/users">Users</NavLink>
            </header>
            <main>
                <h1>JSON Web Token Client</h1>
                <Route path="/signup" component={SignUp} />
                <Route path="/users" component={Users} />
            </main>
        </div>
    );
}

export default App;
