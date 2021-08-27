import { useState, FormEvent, useContext } from 'react'
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';

import * as S from './styles';
Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title,
            type,
            amount,
            category,
        })
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                className="close-button"
                onClick={onRequestClose}>
                <img src={closeImg} alt="Close"
            />
            </button>
            <S.Form onSubmit={handleCreateNewTransaction}>
                <h2>Cadastar Transação</h2>
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value) }
                />
                <input 
                    placeholder="Valor" 
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value)) }
                />
                <S.ButtonsContainer>
                    <S.TypeButton 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt=""/>
                        Entrada
                    </S.TypeButton>
                    <S.TypeButton 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt=""/>
                        Saída
                    </S.TypeButton>
                </S.ButtonsContainer>
                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value) }
                />
                <button type="submit">
                    Cadastrar
                </button>
            </S.Form>
        </Modal>
    );
}