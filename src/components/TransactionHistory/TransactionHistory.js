import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export default function TransactionHistory({ transaction }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.name}>Type</th>
          <th className={s.name}>Amount</th>
          <th className={s.name}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map((i) => {
          return (
            <tr key={i.id}>
              <td className={s.item}>{i.type}</td>
              <td className={s.item}>{i.amount}</td>
              <td className={s.item}>{i.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(PropTypes.object).isRequired,
};
