import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserBallance extends Component {
    static propTypes = {
        currentBallance: PropTypes.number.isRequired
    };

    renderCurrentBallance () {
        switch (Math.sign(this.props.currentBallance)) {
            case 1:
                return (
                    <span className="ballance-positive">
                        {this.props.currentBallance}
                    </span>
                );
            case 0:
                return (
                    <span className="ballance-neutral">
                        {this.props.currentBallance}
                    </span>
                );
            case -1:
                return (
                    <span className="ballance-negative">
                        {this.props.currentBallance}
                    </span>
                );
            default:
                return null;
        }
    }

    render () {
        return (
            <div className="user-ballance">
                {this.renderCurrentBallance()}
            </div>
        );
    }
}

export default UserBallance;
