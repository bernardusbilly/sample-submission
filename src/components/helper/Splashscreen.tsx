import React from 'react';

import logo from '../../assets/images/logo_blue.svg';

import '../../styles/splashscreen.scss';

const Splashscreen: React.FC = () => {
  return (
    <div id="Splashscreen">
      <img src={logo} alt="Pandacurr Logo" style={{ alignSelf: 'center', height: '5.5vh' }} />
    </div>
  );
};

export default Splashscreen;
