import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import * as S from './styles';

export function TransactionsTable() {

    const tableTitle = ['Título', 'Valor', 'Categoria', 'Data'];

    const { transactions } = useContext(TransactionsContext);

    return(
        <S.Container>
            <table>
                <thead>
                    <tr>
                        {tableTitle.map((title, index) =>(
                            <th key={index}>
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>
                                {transaction.title}
                            </td>
                            <td className={transaction.type}>
                                {transaction.type === 'withdraw' && '- '}
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>
                                {transaction.category}
                            </td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </S.Container>
    )
}