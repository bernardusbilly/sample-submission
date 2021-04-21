import React from 'react';
import { useHistory } from 'react-router-dom';

import illust from '../../assets/images/illust_home.svg';
import MetaDecorator from '../../utils/helmet/MetaDecorator';
import { path } from '../../routers/path';

import './styles/home.scss';

const Home: React.FC = () => {
  const history: any = useHistory();

  const handleToExchange: Function = () => history.push(path.exchange);

  return (
    <div id="Home">
      <MetaDecorator
        title="Home | Pandacurr."
        desc="Pandacurr. is a web application for exchange Indonesian currency to foreign currency."
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '100%', paddingBottom: '70px' }}>
        <div className="row">
          <div className="col-12 col-md-6 home-left">
            <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 600, marginBottom: 32 }}>Exchange to foreign currency easily.</h1>

            <p style={{ textAlign: 'justify', marginBottom: 32 }}>See the exchange rate from European Euro or Indonesian Rupiah to other currency easily with <strong style={{ fontFamily: 'Playfair Display' }}>Pandacurr.</strong></p>

            <button className="btn btn-outline-primary" style={{ borderRadius: 12 }} onClick={() => handleToExchange()}>Exchange</button>
          </div>
          <div className="col-12 col-md-6 home-right">
            <img src={illust} alt="pandacurr" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
