import './styles.scss';
import { LOCALE } from '../../../../constants/locale.js';
import PropTypes from 'prop-types';
import React from 'react';
import TransactionDate from './TransactionDate.jsx';
import UserName from '../../../common/userName';

const {
    ID,
    TO
} = LOCALE.TRANSACTIONS.DESCRIPTION;

const propTypes = {
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    payer: PropTypes.object.isRequired,
    receiver: PropTypes.object.isRequired,
};

function TransactionDescription (props) {
    return (
        <div className="transaction-description">
            <div className="identifiant">
                <span className="identifiant-number">
                    <span className="identifiant-title">
                        {ID}
                        {' :'}
                    </span>
                    <span>
                        {props.id}
                    </span>
                </span>
                <TransactionDate
                    date={props.date}
                />
            </div>
            <div className="users">
                <UserName
                    businessName={props.payer.businessName}
                    className="user-payer"
                    firstname={props.payer.firstname}
                    lastname={props.payer.lastname}
                />
                <span className="user-to">
                    {TO}
                </span>
                <UserName
                    businessName={props.receiver.businessName}
                    className="user-receiver"
                    firstname={props.receiver.firstname}
                    lastname={props.receiver.lastname}
                />
            </div>
            <div className="message">
                {props.message}
            </div>
        </div>
    );
}

TransactionDescription.propTypes = propTypes;
export default TransactionDescription;
