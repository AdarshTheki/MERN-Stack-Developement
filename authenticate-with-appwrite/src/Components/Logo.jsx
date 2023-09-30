import React from 'react';

const Logo = ({ width }) => {
  return <div className='text-red-700 text-3xl uppercase font-bold'>Logo</div>;
};

export default Logo;

Logo.defaultProps = {
  width: '100px',
};
