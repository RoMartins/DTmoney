import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import {TransactionsProvider} from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

     <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
