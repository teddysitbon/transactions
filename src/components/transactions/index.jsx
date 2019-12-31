import './styles.scss';
import React, { Component } from 'react';
import Emoji from '../common/emoji';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import Transaction from './transaction';
import { connect } from 'react-redux';

const {
    TITLE
} = LOCALE.TRANSACTIONS;

class Transactions extends Component {
    static propTypes = {
        isLoadingTransactions: PropTypes.bool.isRequired,
        transactions: PropTypes.array.isRequired,
    };

    renderTransactions () {
        if (this.props.isLoadingTransactions) {
            this.renderLoader();
        }
        const { transactions } = this.props;
        const renderTransactions = [];
        transactions.map((transaction) => {
            renderTransactions.push((
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
                {renderTransactions}
            </div>
        );
    }

    renderLoader () {
        return (
            <div className="transactions--loading">
                <div className="transaction--loading" />
                <div className="transaction--loading" />
            </div>
        );
    }

    render () {
        return (
            <section className="content">
                <h2 className="content-title">
                    <Emoji
                        className="emoji"
                        label="transaction"
                        symbol="💸"
                    />
                    {TITLE}
                </h2>
                { this.renderTransactions() }
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoadingTransactions: state.isLoadingTransactions,
    transactions: state.transactions,
});
export default connect(
    mapStateToProps,
    null
)(Transactions);

