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
                />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(
      propTypes.shape({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
        id: propTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  };



