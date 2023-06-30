import friends from 'data/friends.json';
import css from'./FriendList.module.css';

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