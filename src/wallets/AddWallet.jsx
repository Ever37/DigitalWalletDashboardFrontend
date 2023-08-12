/* eslint-disable no-unused-vars */
import { Alert, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import MyButton from '../common/MyButton';
import MyTextField from '../common/MyTextField';
import { isNotEmpty } from '../utils/tools';
import walletsAPI from './walletsAPI';

const AddWallet = () => {
  const [result, setResult] = useState({ error: 'success', msg: '' });
  const [address, setAddress] = useState('');

  async function handleAddWallet() {
    try {
      const response = await walletsAPI.addWallet({ address });
      setAddress(response);
      setResult({ error: 'success', msg: response });
    } catch (error) {
      setResult({ error: 'error', msg: error.message });
      console.error('handleAddWallet error:', error);
    } finally {
      setAddress('');
    }
  }

  return (
    <Box sx={{ ml: '37.5%' }}>
      <Grid item xs={12} sx={{ mt: 20, mb: 5 }}>
        <MyTextField
          id="addwallet"
          label="Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
        <MyButton
          id="button-add-wallet"
          label="Add Balance"
          onClick={handleAddWallet}
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

export default AddWallet;
