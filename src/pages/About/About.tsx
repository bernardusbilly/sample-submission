import React from 'react';

import illust from '../../assets/images/illust_about.svg';
import MetaDecorator from '../../utils/helmet/MetaDecorator';

import './styles/about.scss';

const About: React.FC = () => {
  return (
    <div id="About">
      <MetaDecorator
        title="About | Pandacurr."
        desc="This page is how Pandacurr. was made, by whom, what his/her purpose to make such a this web application."
      />

      <h1 style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontWeight: 600, paddingTop: 36 }}>About Pandacurr.</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 64, height: 12, backgroundColor: '#0d6efd', margin: '24px 0 36px 0' }} />
      </div>
      <p style={{ textAlign: 'center', paddingRight: 48, paddingLeft: 48 }}>
        <strong style={{ fontFamily: 'Playfair Display', color: '#0d6efd' }}>Pandacurr.</strong> is a web-based application that makes it easy for you to find out how much currency is exchanged from European Euros or Indonesian Rupiahs to other currencies. <br /> <br />
        <strong style={{ fontFamily: 'Playfair Display', color: '#0d6efd' }}>Pandacurr.</strong> comes from two words, namely Panda and Currency. This web application was created for technical recruitment test of <a href="https://pandatech.io/" target="_blank" rel="noreferrer"><strong style={{ fontFamily: 'Playfair Display', color: '#0d6efd' }}>Pandatech</strong></a>, and by one person named <a href="https://github.com/Ralfarios" target="_blank" rel="noreferrer"><strong style={{ fontFamily: 'Playfair Display', color: '#0d6efd' }}>Muamar Al Farabi.</strong></a> <br /> <br />
        All illustration used from <a href="https://undraw.co/" target="_blank" rel="noreferrer"><strong style={{ fontFamily: 'Playfair Display', color: '#0d6efd' }}>unDraw</strong></a>.<br />
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 32 }}>
        <img src={illust} alt="pandacurr" style={{ width: '90%' }} />
      </div >
    </div >
  );
};

export default About;
