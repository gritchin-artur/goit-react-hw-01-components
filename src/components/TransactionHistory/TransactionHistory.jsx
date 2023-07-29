// import transHistory from 'data/transactions.json';
import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';


export const TransactionHistory = ({ items }) => (
    <table >
        <thead className={css.transactionHistory}>
            <tr className={css.transactionOptions}>
                <th className={css.transactionNet}>Type</th>
                <th className={css.transactionNet}>Amount</th>
                <th className={css.transactionNet}>Currency</th>
            </tr>
        </thead>
        {items.map(({ id, type, amount, currency }) => (
            <tbody key={id}>
                <tr className={css.transactionList} >
                    <td className={css.transactionNet}>{type}</td>
                    <td className={css.transactionNet}>{amount}</td>
                    <td className={css.transactionNet}>{currency}</td>
                </tr>
            </tbody>
        ))}
    </table>
);

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
    })),
};