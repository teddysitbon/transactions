import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    symbol: PropTypes.string.isRequired,
};
const defaultProps = {
    className: null,
    label: ''
};
function Emoji (props) {
    return (
        <span
            aria-hidden={props.label ? 'false' : 'true'}
            aria-label={props.label}
            className={props.className}
            role="img"
        >
            {props.symbol}
        </span>
    );
}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;
export default Emoji;
