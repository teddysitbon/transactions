import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
    TRANSACTIONS_URL,
    USERS_URL
} from './constants/url.js';
import Header from './components/common/header';
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
                    path={TRANSACTIONS_URL}
                />
                <Route
                    component={Users}
                    exact
                    path={USERS_URL}
                />
            </div>
        </Router>
    );
}

export default App;
