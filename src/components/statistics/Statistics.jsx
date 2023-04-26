import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && (
        <section className={css.statistics}>
          <h2 className={css.title}>{title}</h2>
          <ul className={css.statList}>
            {stats.slice(0, 4).map(stat => {
              return (
                <li key={stat.id} className={css.item}>
                  <span className={css.label}>{stat.label}</span>
                  <span className={css.percentage}>{stat.percentage}%</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
