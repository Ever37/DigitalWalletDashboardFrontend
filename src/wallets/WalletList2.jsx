/* eslint-disable no-unused-vars */
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import {
  Box,
  IconButton
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { isEmpty } from '../utils/tools';
import SortWalletButton from './SortWalletButton';
import walletsAPI from './walletsAPI';

export default function InsetDividers() {
  const [wallets, setWallets] = useState([]);
  const [order, setOrder] = useState('asc');

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

  const handleOrderClick = async (order) => {
    try {
      const sortedWallets = await walletsAPI.getAllWalletsOrderByFavorites(order);
      setWallets(sortedWallets);
    } catch (error) {
      console.error('Error sorting wallets:', error);
    } finally {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    }
  };

  if (isEmpty(wallets)) return <Loading plain />

  return (
    <>
      <Grid item xs={12}>
        <SortWalletButton order={order} onClick={handleOrderClick} />
        <List
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
          }}
        >
          {wallets?.map((wallet) => (
            <ListItem
              key={wallet.address}
              sx={{ border: 1, borderRadius: 1, mb: 1 }}
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
              <ListItemAvatar>
                <Avatar>
                  <WalletOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={wallet.address}
                secondary={
                  <React.Fragment>
                    <Box sx={{ color: '#FF4040', visibility: wallet.isOld ? 'visible' : 'hidden' }}>Wallet is old!</Box>
                  </React.Fragment>
                }
              />
              <Divider variant="inset" component="li" />
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
}
