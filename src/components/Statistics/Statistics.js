import s from "./Statistics.module.css";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ""}
      <ul className={s.statList}>
        {stats.map((el) => {
          return (
            <li
              className={s.item}
              key={el.id}
              style={{ backgroundColor: `${el.bgc}` }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
