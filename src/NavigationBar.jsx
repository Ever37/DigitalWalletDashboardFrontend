/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Box sx={{ textAlign: 'flex-start' }}>
        <Typography variant="h6">
          DIGITAL WALLET DASHBOARD
        </Typography>
      </Box>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Button color="inherit">
              <Link to="/wallets">
                Wallets List
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/wallets/new">
                Add Wallet
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/wallets/balance-wallet">
                Wallet Balance
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/wallets/exchange-rates">
                Exchange Rates
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavigationBar;
