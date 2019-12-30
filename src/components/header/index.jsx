import './styles.scss';
import { LOCALE } from '../../constants/locale.js';
import { LYDIA_URL } from '../../constants/url.js';
import React from 'react';
import Svg from '../common/svg';
import classNames from 'classnames';

const {
    BASELINE,
    FEAT,
} = LOCALE.HEADER;

function Header () {
    return (
        <header className="header">
            <a
                className={classNames(
                    'site-title',
                    'global-container'
                )}
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
        </header>
    );
}

export default Header;
