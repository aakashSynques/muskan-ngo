// Layout.js

import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';


function Layout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
