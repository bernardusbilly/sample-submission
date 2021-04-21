import React from 'react';
import { useHistory } from 'react-router-dom';

import illust from '../../assets/images/illust_404.svg';
import MetaDecorator from '../../utils/helmet/MetaDecorator';
import { path } from '../../routers/path';

import './styles/e404.scss';

const E404: React.FC = () => {
  const history: any = useHistory();

  const handleToHome: any = () => history.push(path.home);

  return (
    <div id="E404">
      <MetaDecorator
        title="Error 404 | Pandacurr."
        desc="If you see this page, there is must be something wrong on your endpoints. Be sure to keep on track in Pandacurr. navigation."
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '100%' }}>
        <div style={{ alignSelf: 'center' }}>
          <h1 style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontWeight: 600, marginBottom: 12 }}>Page not found</h1>
          <p style={{ textAlign: 'center', marginBottom: 32 }}>The page that you requested does not exist.</p>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <img src={illust} alt="pandacurr" style={{ textAlign: 'center', width: '55%' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-outline-primary" style={{ borderRadius: 12 }} onClick={() => handleToHome()}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E404;
