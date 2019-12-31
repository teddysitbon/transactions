import './styles.scss';
import React, { Component } from 'react';
import Emoji from '../common/emoji';
import { LOCALE } from '../../constants/locale.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions';

const {
    TITLE
} = LOCALE.USERS;

class Users extends Component {
    static propTypes = {
        loadUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    };

    componentDidMount () {
        this.props.loadUsers();
    }

    render () {
        return (
            <section className="content">
                <h2 className="content-title">
                    <Emoji
                        className="emoji"
                        label="users"
                        symbol="👨‍👩‍👧‍👦 "
                    />
                    {TITLE}
                </h2>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});
const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
