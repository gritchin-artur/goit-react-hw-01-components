import css from'./Profile.module.css'
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