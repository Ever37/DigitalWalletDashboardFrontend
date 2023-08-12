/* eslint-disable no-unused-vars */
import { Alert, Box } from '@mui/material';
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
  const [result, setResult] = useState({ error: 'success', msg: '' });

  const handleGetBalance = async () => {
    try {
      const response = await walletsAPI.getWalletBalance(address, currency);
      setResult(response.balance);
      setResult({ error: 'success', msg: response.balance });
    } catch (error) {
      setResult({ error: 'error', msg: error?.response?.data?.message });
      console.error('getWalletBalance error:', error);
    }
  };

  return (
    <Box sx={{ ml: '37.5%' }}>
      <Grid item xs={12} sx={{ mt: 10, mb: 5 }}>
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
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          visibility: isNotEmpty(result.msg) ? 'visible' : 'hidden'
        }}>
        <Alert severity={result.error}>{result.msg}</Alert>
      </Grid>
    </Box>
  );
};

export default WalletBalance;
