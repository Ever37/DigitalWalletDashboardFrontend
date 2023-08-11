/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './RotateSpinner.css';

const RotateSpinner = ({ size = 50, msecsToWait = 300, loading = true }) => {
  const [hidden, setHidden] = useState(msecsToWait > 0 || !loading);
  const px = size - 8;

  useEffect(() => {
    let timeout = null;
    if (loading && msecsToWait > 0) timeout = setTimeout(() => setHidden(!loading), msecsToWait);
    return () => { // cleanup
      if (timeout != null) clearTimeout(timeout);
    };
  },
  [loading, msecsToWait]);

  if (hidden) return null;
  return (/* https://tobiasahlin.com/spinkit/ */
    <div className="sk-chase" style={{ width: px, height: px }}>
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  );
};

RotateSpinner.propTypes = {
  msecsToWait: PropTypes.number,
  size: PropTypes.any,
  loading: PropTypes.bool,
};

export default RotateSpinner;
