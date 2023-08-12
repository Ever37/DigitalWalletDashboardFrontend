/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../common/Loading';

const Layout = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="300px"
    >
      <Grid container spacing={4}>
        <Suspense fallback={<Loading plain />}>
          <Outlet />
        </Suspense>
      </Grid>
    </Box>
  );
}

export default Layout;