import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css';

export const FriendList = () => {
    return (
        <ul className={css.friendList}>
            <FriendListItem />
        </ul>
    )
};



