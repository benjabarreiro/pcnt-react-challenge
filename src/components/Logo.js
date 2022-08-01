import React from 'react';

export const Logo = () => {
  return (
    <h1>
      <img src={process.env.PUBLIC_URL + '/pcnt-logo.png'} alt="poincenot-logo" />
    </h1>
  );
};
