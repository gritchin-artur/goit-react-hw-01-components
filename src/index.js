import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import user from './user.json';
// import Profile from './components/Profile';



const Profile = (
  username: {user.usernam},
  tag: {user.tag},
 location:{user.location},
 avatar:{user.avatar},
 stats:{user.stats}) =>
{
<div class="profile">
    <div class="description">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@pmarica</p>
      <p class="location">Salvador, Brasil</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 { Profile}

    {/* <App /> */}
  </React.StrictMode>
);




