import './styles.scss';
import React, { Component } from 'react';
import Emoji from '../common/emoji';
import { Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

class Menu extends Component {
    render () {
        const history = createHistory();
        const { location } = history;
        return (
            <ul className='menu'>
                <li className='menu-item'>
                    <Link
                        className='menu-link' 
                        to={process.env.PUBLIC_URL + '/'}
                    >
                        <Emoji
                            className="menu-emoji"
                            label="transaction"
                            symbol="💸"
                        />
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link 
                        className='menu-link'
                        to={process.env.PUBLIC_URL + '/users'}
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
}

export default Menu;