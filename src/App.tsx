import React, { useCallback, useState } from 'react';

import { TransactionsProvider } from './TransactionsContext'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

    const handleOpenNewTransactionModal = useCallback(
        () => {
          setIsTransactionModalOpen(true)
        },[]);

    const handleCloseNewTransactionModal = useCallback(
        () => {
          setIsTransactionModalOpen(false)
        },[]);

  return (
    <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
        <NewTransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        <GlobalStyle/>
    </TransactionsProvider>
  );
}

