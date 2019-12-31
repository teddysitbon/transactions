import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import Page from '../common/page/index';
import PropTypes from 'prop-types';
import Transaction from './transaction';
import { connect } from 'react-redux';
import { loadTransactions } from '../../actions';

const {
    TITLE
} = LOCALE.TRANSACTIONS;

class Transactions extends Component {
    static propTypes = {
        isLoadingTransactions: PropTypes.bool.isRequired,
        loadTransactions: PropTypes.func.isRequired,
        transactions: PropTypes.array.isRequired,
    };

    componentDidMount () {
        this.props.loadTransactions();
    }

    renderTransactions = () => {
        if (this.props.isLoadingTransactions) {
            return (
                <div className="items--loading">
                    <div className="item--loading" />
                    <div className="item--loading" />
                </div>
            );
        }
        const { transactions } = this.props;
        const transactionsArray = [];
        transactions.map((transaction) => {
            transactionsArray.push((
                <Transaction
                    amount={transaction.amount}
                    date={transaction.date}
                    id={transaction.id}
                    isPro={transaction.isPro}
                    key={transaction.id}
                    message={transaction.message}
                    payer={transaction.payer}
                    receiver={transaction.receiver}
                    status={transaction.status}
                />));
            return null;
        });
        return (
            <div className="transactions">
                {transactionsArray}
            </div>
        );
    }

    render () {
        return (
            <Page
                emojiLabel="transaction"
                emojiSymbol="💸"
                renderContent={this.renderTransactions}
                title={TITLE}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoadingTransactions: state.isLoadingTransactions,
    transactions: state.transactions,
});
const mapDispatchToProps = {
    loadTransactions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);
