import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import IndexRouter from './routers'; // Contain Routing configuration
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div id="App">
        <Navbar />

        <IndexRouter />
      </div>
    </HelmetProvider>
  );
};

export default App;
