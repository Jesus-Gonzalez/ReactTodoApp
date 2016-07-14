import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Main({children}) {
    return (
      <div>
        <Header/>
          { children }
        <Footer/>
      </div>
  );
}
