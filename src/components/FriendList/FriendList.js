import s from "./FriendList.module.css";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((el) => {
        return (
          <li className={s.item} key={el.id}>
            <span className={el.isOnline ? s.online : s.offline}></span>
            <img src={el.avatar} alt="" width="48" />
            <p className={s.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
