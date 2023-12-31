/* eslint-disable no-unused-vars */
import { Alert, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import MyButton from '../common/MyButton';
import MyTextField from '../common/MyTextField';
import { isNotEmpty } from '../utils/tools';
import exchangeAPI from './exchange-ratesAPI';

const ExchangeRates = () => {
  const [euroToEth, setEuroToEth] = useState('');
  const [usdToEth, setUsdToEth] = useState('');
  const [result, setResult] = useState({ error: 'success', msg: '' });

  useEffect(() => {
    async function handleExchangeRates() {
      try {
        // Llamada a la API para obtener los tipos de cambio
        const response = await exchangeAPI.getExchangeRates()
        setEuroToEth(response.euroToEth.toString());
        setUsdToEth(response.usdToEth.toString());
      } catch (error) {
        setResult({ error: 'error', msg: error?.response?.data?.message });
        console.error('getExchangeRates error:', error);
      }
    }
    handleExchangeRates();
  }, [])

  const handleUpdateRates = async () => {
    try {
      await exchangeAPI.updateExchangeRate('euroToEth', parseFloat(euroToEth));
      await exchangeAPI.updateExchangeRate('usdToEth', parseFloat(usdToEth));
      setResult({ error: 'success', msg: 'Successfully updated' });
    } catch (error) {
      setResult({ error: 'error', msg: error?.response?.data?.message });
      console.error('Updating exchange rate error:', error);
    }
  };

  return (
    <Box sx={{ ml: '37.5%' }}>
      <Grid item xs={12} sx={{ mt: 10, mb: 5 }}>
        <MyTextField
          id="usd-eth"
          label="USD-ETH Exchange rate"
          value={usdToEth}
          onChange={(e) => setUsdToEth(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
        <MyTextField
          id="eur-eth"
          label="EUR-ETH Exchange rate"
          value={euroToEth}
          onChange={(e) => setEuroToEth(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5 }}>
        <MyButton
          id="button-exchange-rate"
          label="Update"
          onClick={handleUpdateRates}
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

export default ExchangeRates;
