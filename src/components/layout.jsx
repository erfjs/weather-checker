import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow">{children}</div>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
