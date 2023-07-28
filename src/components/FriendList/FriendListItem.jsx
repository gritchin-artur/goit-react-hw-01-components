import friends from 'data/friends.json';
import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendListItem = () => {
    return friends.map(({id, isOnline, avatar, name}) => {
        return (
            <li className={css.item} key={id}>
                    <span className={isOnline ? css.green : css.red}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </li>
        )
    })
};

FriendListItem.propTypes = {
      friends: propTypes.arrayOf(propTypes.shape({
        id: propTypes.func.isRequired,
        isOnline: propTypes.func.isRequired,
        avatar: propTypes.func.isRequired,
        name: propTypes.func.isRequired,
    })),
};