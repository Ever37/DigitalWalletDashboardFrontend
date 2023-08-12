/* eslint-disable no-unused-vars */
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Layout from './layout/Layout';

const WalletList = lazy(() => import('./wallets/WalletList'));
const AddWallet = lazy(() => import('./wallets/AddWallet'));
const WalletBalance = lazy(() => import('./wallets/WalletBalance'));
const ExchangeRates = lazy(() => import('./exchange/ExchangeRates'));
const NotFound = lazy(() => import('./common/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="wallets" element={<WalletList />} />
          <Route path="wallets/new" element={<AddWallet />} />
          <Route path="wallets/exchange-rates" element={<ExchangeRates />} />
          <Route path="wallets/balance-wallet" element={<WalletBalance />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App