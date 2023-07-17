import transHistory from 'data/transactions.json';
import css from './TransactionHistory.module.css'

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