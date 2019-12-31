import './styles.scss';
import {
    TRANSACTIONS_URL,
    USERS_URL
} from '../../../constants/url.js';
import Emoji from '../emoji';
import { Link } from 'react-router-dom';
import React from 'react';

function Menu () {
    return (
        <ul className="menu">
            <li className="menu-item">
                <Link
                    className="menu-link"
                    to={process.env.PUBLIC_URL + TRANSACTIONS_URL}
                >
                    <Emoji
                        className="menu-emoji"
                        label="transaction"
                        symbol="💸"
                    />
                </Link>
            </li>
            <li className="menu-item">
                <Link
                    className="menu-link"
                    to={process.env.PUBLIC_URL + USERS_URL}
                >
                    <Emoji
                        className="menu-emoji"
                        label="users"
                        symbol="👨‍👩‍👧‍👦 "
                    />
                </Link>
            </li>
        </ul>
    );
}

export default Menu;
