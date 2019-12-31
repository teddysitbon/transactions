import './styles.scss';
import Emoji from '../emoji';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    emojiLabel: PropTypes.string,
    emojiSymbol: PropTypes.string,
    renderContent: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};
const defaultProps = {
    emojiLabel: null,
    emojiSymbol: null,
};

function Page (props) {
    return (
        <section className="content">
            <h2 className="content-title">
                {
                    props.emojiSymbol !== null &&
                    <Emoji
                        className="emoji"
                        label={props.emojiLabel}
                        symbol={props.emojiSymbol}
                    />
                }
                {props.title}
            </h2>
            { props.renderContent() }
        </section>
    );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
