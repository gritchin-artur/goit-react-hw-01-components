import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css';
import friends from 'data/friends.json';
import propTypes from 'prop-types';

export const FriendList = () => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
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



