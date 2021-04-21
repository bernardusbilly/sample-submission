import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4';

import logo from '../../assets/images/logo_blue.svg';
import { path } from '../../routers/path';

import '../../styles/navbar.scss';

const Navbar: React.FC = () => {
  const history: any = useHistory();
  const { pathname }: any = useLocation();
  const navClassName: any = ['nav-link active', 'nav-link'];

  const handleToExchange: any = () => history.push(path.exchange);

  return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top" style={pathname === path.e404 ? { display: 'none' } : { backgroundColor: 'white', justifyContent: 'space-between' }}>
      <div className="pcContainer">
        <Link style={{ textDecoration: 'none' }} to={path.home}>
          <img src={logo} alt="Pandacurr Logo" style={{ height: 24 }} />
        </Link>

        {/** Hamburger Menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation" style={{ borderRadius: 12 }}>
          <UseAnimations
            animation={menu4}
            size={28}
            speed={2.4}
            style={{ cursor: "pointer", padding: 100 }}
          />
        </button>
        {/** Hamburger Menu/ */}

        <div className="navbar-collapse-padding collapse navbar-collapse" id="navToggle" style={{ justifyContent: 'flex-end', backgroundColor: 'white' }}>
          <ul className="navbar-nav">
            <li style={{ margin: 'auto 16px' }}>
              <Link style={{ textDecoration: 'none' }} to={path.home}>
                <p className={pathname === path.home ? navClassName[0] : navClassName[1]} style={{ marginBottom: 0, cursor: 'pointer' }}>Home</p>
              </Link>
            </li>
            <li style={{ margin: 'auto 16px' }}>
              <Link style={{ textDecoration: 'none' }} to={path.about}>
                <p className={pathname === path.about ? navClassName[0] : navClassName[1]} style={{ marginBottom: 0, cursor: 'pointer' }}>About</p>
              </Link>
            </li>
            <li className="nav-exchange-link" style={{ margin: 'auto 16px' }}>
              <Link style={{ textDecoration: 'none' }} to={path.exchange}>
                <p className={pathname === path.exchange ? navClassName[0] : navClassName[1]} style={{ marginBottom: 0, cursor: 'pointer' }}>Exchange</p>
              </Link>
            </li>
            <li className="nav-exchange-btn">
              <button className="btn btn-outline-primary" style={{ borderRadius: 12 }} onClick={() => handleToExchange()}>Exchange</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
