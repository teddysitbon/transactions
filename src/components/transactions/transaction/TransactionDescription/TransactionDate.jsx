import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Svg from '../../../common/svg';
import { convertDate } from '../../../../helpers/index.js';

const propTypes = {
    date: PropTypes.string.isRequired,
};

function TransactionDate (props) {
    return (
        <span className="identifiant-date">
            <Svg
                height="12"
                type="clock"
                viewBox="0 0 12 12"
                width="12"
            />
            { convertDate(props.date) }
        </span>
    );
}

TransactionDate.propTypes = propTypes;
export default TransactionDate;
