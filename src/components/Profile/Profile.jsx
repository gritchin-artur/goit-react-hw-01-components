import css from './Profile.module.css'
import propTypes from 'prop-types';

export const Profile = ({username, avatar, tag, location, stats,}) => {
  return (
    <div className={css.profile}>
      <div className="description" >
        <img
   src={avatar} width='200'
          alt="User avatar"
          className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
{}
      <ul className={css.stats}>
        <li className={css.list}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li >
        <li className={css.list}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.list}> 
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

 Profile.propTypes = {
  username: propTypes.string.isRequired,
   avatar: propTypes.string.isRequired,
   tag: propTypes.string.isRequired,
   location: propTypes.string.isRequired,
   stats: propTypes.shape({
     views: propTypes.number.isRequired,
     likes: propTypes.number.isRequired,
     followers: propTypes.number.isRequired,
   }).isRequired
};