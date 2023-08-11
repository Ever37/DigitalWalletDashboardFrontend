/* eslint-disable no-unused-vars */
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import exchangeAPI from './exchange-ratesAPI';

const ExchangeRates = () => {
  const [euroToEth, setEuroToEth] = useState('');
  const [usdToEth, setUsdToEth] = useState('');

  useEffect(() => {
    async function handleExchangeRates() {
      try {
        // Llamada a la API para obtener los tipos de cambio
        const response = await exchangeAPI.getExchangeRates()
        setEuroToEth(response.euroToEth.toString());
        setUsdToEth(response.usdToEth.toString());
      } catch (error) {
        console.error('getAllWallets error:', error);
      }
    }
    handleExchangeRates();
  }, [])

  const handleUpdateRates = async () => {
    await exchangeAPI.updateExchangeRate('euroToEth', parseFloat(euroToEth));
    await exchangeAPI.updateExchangeRate('usdToEth', parseFloat(usdToEth));
  };

  return (
    <Grid item xs={12}>
      <TextField
        label="EUR-ETH Exchange rate"
        value={euroToEth}
        onChange={(e) => setEuroToEth(e.target.value)}
      />
      <TextField
        label="USD-ETH Exchange rate"
        value={usdToEth}
        onChange={(e) => setUsdToEth(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleUpdateRates}>
        Update
      </Button>
    </Grid>
  );
};

export default ExchangeRates;
