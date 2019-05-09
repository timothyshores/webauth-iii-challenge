import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>JSON Web Token Client</h1>
                <NavLink to="/signup" />
            </header>
            <main>
                <Route path="/signup" component={SignUp} />
            </main>
        </div>
    );
}

export default App;
