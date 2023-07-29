import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
};



