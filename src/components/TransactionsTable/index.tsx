import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

interface Transaction {
    id: number,
    title: string,
    type: 'deposit' | 'withdraw',
    category: string,
    amount: number,
    createdAt: string,
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    const tableTitle = ['Título', 'Valor', 'Categoria', 'Data'];

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