import './App.scss';
import React, { Component } from 'react';
import Header from './header';
import PropTypes from 'prop-types';
import Transactions from './transactions';
import { connect } from 'react-redux';
import { loadTransactions } from '../actions/';

class App extends Component {
    static propTypes = {
        loadTransactions: PropTypes.func.isRequired,
    };

    componentDidMount () {
        this.props.loadTransactions();
    }

    render () {
        return (
            <>
                <Header />
                <Transactions />
            </>
        );
    }
}

const mapDispatchToProps = {
    loadTransactions
};

export default connect(null, mapDispatchToProps)(App);
