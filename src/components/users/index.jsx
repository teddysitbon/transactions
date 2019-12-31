import './styles.scss';
import React, { Component } from 'react';
import { LOCALE } from '../../constants/locale.js';
import Page from '../common/page/index';
import PropTypes from 'prop-types';
import User from './User';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions';

const {
    TITLE
} = LOCALE.USERS;

class Users extends Component {
    static propTypes = {
        isLoadingUsers: PropTypes.bool.isRequired,
        loadUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    };

    componentDidMount () {
        this.props.loadUsers();
    }

    renderUsers = () => {
        if (this.props.isLoadingUsers) {
            return (
                <div className="items--loading">
                    <div className="item--loading" />
                    <div className="item--loading" />
                </div>
            );
        }
        const { users } = this.props;
        const usersArray = [];
        users.map((user) => {
            usersArray.push((
                <User
                    businessName={user.businessName}
                    currentBallance={user.currentBallance}
                    dob={user.dob}
                    firstname={user.firstname}
                    id={user.id}
                    image={user.image}
                    isFraudster={user.isFraudster}
                    isPro={user.isPro}
                    key={user.id}
                    lastname={user.lastname}
                    pob={user.pob}
                />));
            return null;
        });
        return (
            <div className="transactions">
                {usersArray}
            </div>
        );
    }

    render () {
        return (
            <Page
                emojiLabel="users"
                emojiSymbol="👨‍👩‍👧‍👦"
                renderContent={this.renderUsers}
                title={TITLE}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoadingUsers: state.isLoadingUsers,
    users: state.users,
});
const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
