import './styles.scss';
import ItemPro from '../../common/itemPro';
import PropTypes from 'prop-types';
import React from 'react';
import UserBallance from './UserBallance';
import UserDescription from './UserDescription';
import UserImage from './UserImage';

const propTypes = {
    businessName: PropTypes.string,
    currentBallance: PropTypes.number.isRequired,
    dob: PropTypes.string,
    firstname: PropTypes.string,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isFraudster: PropTypes.bool.isRequired,
    isPro: PropTypes.bool.isRequired,
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

function User (props) {
    return (
        <div className="user">
            <UserImage
                image={props.image}
            />
            <UserDescription
                businessName={props.businessName}
                dob={props.dob}
                firstname={props.firstname}
                id={props.id}
                isFraudster={props.isFraudster}
                lastname={props.lastname}
                pob={props.pob}
            />
            <UserBallance
                currentBallance={props.currentBallance}
            />
            {
                props.isPro &&
                <ItemPro />
            }
        </div>
    );
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;
export default User;
