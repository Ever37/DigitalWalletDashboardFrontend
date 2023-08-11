/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RotateSpinner from './RotateSpinner';

const Loading = ({ msecsToWait = 350, plain = false, children = undefined }) => {
  const [show, setShow] = useState(!(msecsToWait > 0));
  useEffect(() => {
    let timeout = null;
    if (msecsToWait > 0) timeout = setTimeout(() => setShow(true), msecsToWait);
    return () => { // cleanup
      if (timeout != null) clearTimeout(timeout);
    };
  },
  [msecsToWait]);
  if (!show) return null;

  if (plain) { // for app loading (perhaps material is not even ready)
    return (
      <div style={{ width: '100px', margin: '200px auto' }}>
        { children || <RotateSpinner loading={true} />}
      </div>
    );
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      { children || <RotateSpinner loading={true} />}
    </Box>
  );
};

Loading.propTypes = {
  plain: PropTypes.bool, // para cuando no queremos usar material, muy simple
  msecsToWait: PropTypes.number,
  children: PropTypes.node,
};

export default Loading;
