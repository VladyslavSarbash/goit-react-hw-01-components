import "./App.css";
import friends from "./getData/friends.json";
import statData from "./getData/statistical-data.json";
import user from "./getData/user.json";
import transaction from "./getData/transactions.json";

import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      {/* <Statistics stats={statData} /> */}
      <TransactionHistory transaction={transaction} />
    </>
  );
}

export default App;
