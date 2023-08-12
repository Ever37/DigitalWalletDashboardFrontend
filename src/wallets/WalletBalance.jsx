/* eslint-disable no-unused-vars */
import { Alert, AlertTitle, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import MyButton from '../common/MyButton';
import MySelect from '../common/MySelect';
import MyTextField from '../common/MyTextField';
import { isNotEmpty } from '../utils/tools';
import walletsAPI from './walletsAPI';

const CURRENCY_OPTIONS = Object.freeze([
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' }
]);

const WalletBalance = () => {
  const [address, setAddress] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [balance, setBalance] = useState(null);

  const handleGetBalance = async () => {
    const response = await walletsAPI.getWalletBalance(address, currency);
    setBalance(response.balance);
  };

  return (
    <Box sx={{ ml: '37.5%' }}>
      <Grid item xs={12} sx={{ mt: 20, mb: 5 }}>
        <MyTextField
          id="address"
          label="Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
        <MySelect
          id="currency"
          label="Currency"
          options={CURRENCY_OPTIONS}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <MyButton
          id="button-get-balance"
          label="Get Balance"
          onClick={handleGetBalance}
        />
      </Grid>
      <Grid item xs={12} sx={{ visibility: isNotEmpty(balance) ? 'visible' : 'hidden' }}>
        <Alert severity="info">
          <AlertTitle>Balance</AlertTitle>
          <strong>{balance}</strong>
        </Alert>
      </Grid>
    </Box>
  );
};

export default WalletBalance;
