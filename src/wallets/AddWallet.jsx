/* eslint-disable no-unused-vars */
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import walletsAPI from './walletsAPI';

const AddWallet = () => {
  const [address, setAddress] = useState('');

  async function handleAddWallet() {
    try {
      const response = await walletsAPI.addWallet({ address });
      setAddress(response);
    } catch (error) {
      console.error('handleAddWallet error:', error);
    } finally {
      setAddress('');
    }
  }

  return (
    <Grid item xs={12}>
      <TextField
        label="Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddWallet}>
        Add
      </Button>
    </Grid>
  );
};

export default AddWallet;
