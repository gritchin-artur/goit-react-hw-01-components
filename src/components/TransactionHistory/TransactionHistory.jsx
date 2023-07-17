import { Transaction } from './Transaction'
import css from './TransactionHistory.module.css'
export const TransactionHistory = () => {
        return (
        
            <>
                <table className={css.transactionHistory}>
                    <thead>
                        <tr className={css.transactionOptions}>
                            <th className={css.transactionNet}>Type</th>
                            <th className={css.transactionNet}>Amount</th>
                            <th className={css.transactionNet}>Currency</th>
                        </tr>
                    </thead>
                    <Transaction></Transaction>
                </table>
            </>
    
             
    )
};
