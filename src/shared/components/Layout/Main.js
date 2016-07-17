import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Main = ({ children }) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Main;
