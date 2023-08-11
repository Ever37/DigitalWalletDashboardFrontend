/* eslint-disable no-unused-vars */
import Grid from '@mui/material/Grid';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../common/Loading';

const Layout = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 5 }}>
      <Suspense fallback={<Loading plain />}>
        <Outlet />
      </Suspense>
    </Grid>
  );
}

export default Layout;