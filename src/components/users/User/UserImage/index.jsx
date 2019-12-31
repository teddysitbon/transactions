import './styles.scss';
import Emoji from '../../../common/emoji';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    image: PropTypes.string.isRequired
};

function UserImage (props) {
    return (
        <div className="user-image">
            <Emoji
                className="user-emoji"
                label="user"
                symbol="👦"
            />
        </div>
    );
}

UserImage.propTypes = propTypes;
export default UserImage;
