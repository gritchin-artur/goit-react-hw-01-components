
import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.green : css.red}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
};