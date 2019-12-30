import './styles.scss';
import React from 'react';
import Svg from '../../common/svg';

function TransactionPro () {
    return (
        <span className="transaction-pro">
            <Svg
                className="logo-pro"
                height="35"
                type="logoPro"
                viewBox="0 0 35 35"
                width="35"
            />
        </span>
    );
}

export default TransactionPro;
