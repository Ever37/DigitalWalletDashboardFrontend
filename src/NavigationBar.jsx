/* eslint-disable no-unused-vars */
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Box, Divider } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 5, mb: 2 }}>
        <Typography variant="h3" gutterBottom>
          DIGITAL WALLET DASHBOARD
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Wallets List"
            component={Link}
            to="/wallets"
            icon={<FormatListBulletedOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Add Wallet"
            component={Link}
            to="/wallets/new"
            icon={<AddCircleOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Wallet Balance"
            component={Link}
            to="/wallets/balance-wallet"
            icon={<PaidOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Exchange Rates"
            component={Link}
            to="/wallets/exchange-rates"
            icon={<CurrencyExchangeOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default NavigationBar;
