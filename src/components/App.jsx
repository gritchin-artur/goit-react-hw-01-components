import React from 'react';

import { Profile } from 'components/Profile/Profile';
import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics.jsx'
import friends from 'data/friends.json';
import { FriendList } from 'components/FriendList/FriendList.jsx'
import transactions from 'data/transactions.json';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from 'data/user.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  );
};

