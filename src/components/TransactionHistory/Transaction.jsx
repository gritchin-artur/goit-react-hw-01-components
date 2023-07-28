import transHistory from 'data/transactions.json';
import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

export const Transaction = () => {
    return transHistory.map(({id, type, amount, currency }) => {
        return (
            <tbody key={id}>
                <tr className={css.transactionList}>
                    <td className={css.transactionNet}>{type}</td>
                  <td className={css.transactionNet}>{amount}</td>
                  <td className={css.transactionNet}>{currency}</td>
                </tr>
            </tbody>
       
      )
})
}

Transaction.propTypes = {
    transHistory: propTypes.arrayOf(propTypes.shape({
        id: propTypes.func.isRequired,
        type: propTypes.func.isRequired,
        amount: propTypes.func.isRequired,
        currency: propTypes.func.isRequired,
    })),
};