
import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? css.green : css.red}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    id: propTypes.number.isRequired,
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
};