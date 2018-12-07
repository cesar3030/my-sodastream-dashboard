import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='wrapper'>
      <Sidebar/>
      <div className='main-panel'>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;