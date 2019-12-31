import './styles.scss';
import React from 'react';
import Svg from '../svg';

function ItemPro () {
    return (
        <span className="item-pro">
            <Svg
                className="logo-pro"
                height="35"
                type="logoPro"
                viewBox="0 0 35 35"
                width="35"
            />
        </span>
    );
}

export default ItemPro;
