/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { isEmpty } from '../utils/tools';
import walletsAPI from './walletsAPI';

const WalletList = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    async function fetchWallets() {
      try {
        const response = await walletsAPI.getAllWallets();
        setWallets(response);
      } catch (error) {
        console.error('getAllWallets error:', error);
      }
    }
    fetchWallets();
  }, [])

  const handleToggleFavorite = async (address) => {
    const { isFavorite } = wallets.find(wallet => wallet.address === address);
    walletsAPI.setFavorite({
      address,
      isFavorite: !isFavorite,
    })
    const updatedWallets = wallets.map((wallet) => {
      if (wallet.address === address) {
        return { ...wallet, isFavorite: !isFavorite };
      }
      return wallet;
    });
    setWallets(updatedWallets);
  };

  if (isEmpty(wallets)) return <Loading plain />

  return (
    <Grid item xs={4}>
      <Button variant="contained" color="primary">
        Add Wallet
      </Button>
      <List>
        {wallets?.map((wallet) => (
          <ListItem
            key={wallet.address}
            alignItems="center"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="favorite"
                onClick={() => handleToggleFavorite(wallet.address)}
              >
                {
                  wallet.isFavorite
                    ? <StarIcon style={{ color: '#FFD700', fontSize: 30 }} />
                    : <StarBorderIcon style={{ fontSize: 30 }} />}
              </IconButton>
            }
          >
            <ListItemText
              secondary={wallet.address}
              primary={
                <React.Fragment>
                  {wallet.isOld && (
                    <Alert severity="error" style={{ marginLeft: '1rem' }}>
                      <AlertTitle>Wallet is old!</AlertTitle>
                    </Alert>
                  )}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default WalletList;
