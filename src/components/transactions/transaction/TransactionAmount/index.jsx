import './styles.scss';
import { LOCALE } from '../../../../constants/locale.js';
import PropTypes from 'prop-types';
import React from 'react';

const {
    CURRENCY
} = LOCALE.TRANSACTIONS;

const propTypes = {
    amount: PropTypes.number.isRequired
};

function TransactionPro (props) {
    return (
        <span className="transaction-amount">
            { props.amount }
            { CURRENCY }
        </span>
    );
}

TransactionPro.propTypes = propTypes;
export default TransactionPro;
