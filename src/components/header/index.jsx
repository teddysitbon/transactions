import './styles.scss';
import { LOCALE } from '../../constants/locale.js';
import { LYDIA_URL } from '../../constants/url.js';
import Menu from './Menu.jsx';
import React from 'react';
import Svg from '../common/svg';

const {
    BASELINE,
    FEAT,
} = LOCALE.HEADER;

function Header () {
    return (
        <header className="header">
            <div className="global-container">
                <a
                    className="header-logo"
                    href={LYDIA_URL}
                >
                    <Svg
                        height="35"
                        type="logo"
                        viewBox="0 0 35 35"
                        width="35"
                    />
                    <span className="header-featuring">
                        {FEAT}
                    </span>
                    <span className="header-partner">
                        {BASELINE}
                    </span>
                </a>
                <Menu />
            </div>
        </header>
    );
}

export default Header;
