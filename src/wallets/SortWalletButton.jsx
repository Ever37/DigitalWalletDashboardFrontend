/* eslint-disable no-unused-vars */
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import { IconButton } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';

const SortWalletButton = ({ order, onClick }) => {
  return (
    <IconButton
      edge="end"
      aria-label="favorite"
      onClick={() => onClick(order)}
    >
      <SwapVertOutlinedIcon sx={{ fontSize: 30 }} />
    </IconButton >
  );
}

SortWalletButton.propTypes = {
  order: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SortWalletButton;
