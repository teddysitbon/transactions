import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UserName extends Component {
    static propTypes = {
        businessName: PropTypes.string,
        className: PropTypes.string,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
    };

    static defaultProps = {
        businessName: null,
        className: null,
        firstname: null,
        lastname: null
    };

    renderName () {
        if (this.props.businessName !== null) {
            return this.props.businessName;
        }
        return `${this.props.firstname} ${this.props.lastname}`;
    }

    render () {
        return (
            <span className={this.props.className}>
                { this.renderName() }
            </span>
        );
    }
}

export default UserName;
