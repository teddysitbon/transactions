import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import React from 'react';
import Transactions from './components/transactions';
import Users from './components/users';


function App () {
    return (
        <Router>
            <Header />
            <div>
                <Route
                    component={Transactions}
                    exact
                    path="/"
                />
                <Route
                    component={Users}
                    exact
                    path="/users"
                />
            </div>
        </Router>
    );
}

export default App;
