import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg from '../../../common/svg';
import { TRANSACTION_STATUS } from '../../../../constants/status.js';


class TransactionStatus extends Component {
    static propTypes = {
        status: PropTypes.string.isRequired,
    };

    renderSvg (status) {
        switch (status) {
            case TRANSACTION_STATUS.ACCEPTED:
                return (
                    <Svg
                        className="logo-success"
                        height="32"
                        type="success"
                        viewBox="0 0 32 32"
                        width="32"
                    />
                );
            case TRANSACTION_STATUS.PENDING:
                return (
                    <Svg
                        className="logo-pending"
                        type="pending"
                        viewBox="0 0 299.995 299.995"
                    />
                );
            case TRANSACTION_STATUS.DECLINED:
            default:
                return (
                    <Svg
                        className="logo-cancel"
                        type="cancel"
                        viewBox="0 0 241.171 241.171"
                    />
                );
        }
    }

    render () {
        return (
            <span className="transaction-status">
                { this.renderSvg(this.props.status) }
            </span>
        );
    }
}

export default TransactionStatus;
