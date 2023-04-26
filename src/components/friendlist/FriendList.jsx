import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  // console.log(friends)

  return (
    <>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};
