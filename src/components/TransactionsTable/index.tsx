import { useEffect } from 'react';
import * as S from './styles';

export function TransactionsTable() {
    
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data));
    }, [])

    return(
        <S.Container>
            <table>
                <thead>
                    <th>
                        Título
                    </th>
                    <th>
                        Valor
                    </th>
                    <th>
                        Categoria
                    </th>
                    <th>
                        Data
                    </th>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Desenvolvimento de website
                    </td>
                    <td className="deposit">
                        R$ 12.000,00
                    </td>
                    <td>
                        Desenvolvimento
                    </td>
                    <td>
                        20/08/2021
                    </td>
                </tr>
                <tr>
                    <td>
                        Aluguel
                    </td>
                    <td className="withdraw">
                        - R$ 1.000,00
                    </td>
                    <td>
                        Casa
                    </td>
                    <td>
                        20/08/2021
                    </td>
                </tr>
                </tbody>
            </table>
        </S.Container>
    )
}