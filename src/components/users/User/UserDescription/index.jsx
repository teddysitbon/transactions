import './styles.scss';
import Emoji from '../../../common/emoji';
import { LOCALE } from '../../../../constants/locale.js';
import PropTypes from 'prop-types';
import React from 'react';
import UserName from '../../../common/userName';

const {
    ID
} = LOCALE.TRANSACTIONS.DESCRIPTION;

const propTypes = {
    businessName: PropTypes.string,
    dob: PropTypes.string,
    firstname: PropTypes.string,
    id: PropTypes.number.isRequired,
    isFraudster: PropTypes.bool.isRequired,
    lastname: PropTypes.string,
    pob: PropTypes.string,
};

const defaultProps = {
    businessName: null,
    dob: null,
    firstname: null,
    lastname: null,
    pob: null
};

function UserDescription (props) {
    return (
        <div className="user-description">
            <div className="user-identifiant">
                <span className="identifiant-number">
                    <span className="identifiant-title">
                        {ID}
                        {' :'}
                    </span>
                    <span>
                        {props.id}
                    </span>
                </span>
                {
                    props.isFraudster &&
                    <span className="user-fraudster">
                        <Emoji
                            className="user-emoji"
                            label="position"
                            symbol="🚫"
                        />
                        <Emoji
                            className="user-emoji"
                            label="position"
                            symbol="🙅‍♂️‍"
                        />
                    </span>
                }
            </div>
            <div className="user-name">
                <UserName
                    businessName={props.businessName}
                    className="user-fullname"
                    firstname={props.firstname}
                    lastname={props.lastname}
                />
            </div>
            {
                props.dob !== null && props.dob !== null &&
                <div className="user-infos">
                    <div className="user-position">
                        <Emoji
                            className="user-emoji"
                            label="position"
                            symbol="🏡"
                        />
                        {props.pob}
                    </div>
                    <div className="user-birthday">
                        <Emoji
                            className="user-emoji"
                            label="birthday"
                            symbol="🎂"
                        />
                        {props.dob}
                    </div>
                </div>
            }
        </div>
    );
}

UserDescription.propTypes = propTypes;
UserDescription.defaultProps = defaultProps;
export default UserDescription;
