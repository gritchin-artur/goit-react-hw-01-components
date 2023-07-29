import css from '../Statistics/Statistics.module.css'
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={css.statList}>
                {stats.map(({ label, percentage, id }) => (
                    <li className={css.item} key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    })),
};