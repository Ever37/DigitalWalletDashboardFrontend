/* eslint-disable no-unused-vars */
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import walletsAPI from './walletsAPI';

const WalletBalance = () => {
  const [address, setAddress] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [balance, setBalance] = useState(null);

  const handleGetBalance = async () => {
    const response = await walletsAPI.getWalletBalance(address, currency);
    setBalance(response.balance);
  };

  return (
    <Grid item xs={12}>
      <TextField
        label="Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        label="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleGetBalance}>
        Get Balance
      </Button>
      {balance !== null && <p>Balance: {balance}</p>}
    </Grid>
  );
};

export default WalletBalance;
