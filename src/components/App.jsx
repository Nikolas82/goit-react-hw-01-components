import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';



import { Profile } from './profie/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
