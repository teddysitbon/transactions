import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    label: PropTypes.string,
    symbol: PropTypes.string.isRequired,
};
const defaultProps = {
    label: ''
};
function Emoji (props) {
    return (
        <span
            aria-hidden={props.label ? 'false' : 'true'}
            aria-label={props.label}
            className="emoji"
            role="img"
        >
            {props.symbol}
        </span>
    );
}

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;
export default Emoji;
