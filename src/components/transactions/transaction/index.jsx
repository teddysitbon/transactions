import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';
import TransactionAmount from './TransactionAmount';
import TransactionDescription from './TransactionDescription';
import TransactionPro from './TransactionPro';
import TransactionStatus from './TransactionStatus';

const propTypes = {
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    payer: PropTypes.object.isRequired,
    receiver: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
};

function Transaction (props) {
    return (
        <div className="transaction">
            <TransactionStatus
                status={props.status}
            />
            <TransactionDescription
                date={props.date}
                id={props.id}
                message={props.message}
                payer={props.payer}
                receiver={props.receiver}
            />
            <TransactionAmount
                amount={props.amount}
            />
            {
                props.isPro &&
                <TransactionPro />
            }
        </div>
    );
}

Transaction.propTypes = propTypes;
export default Transaction;
