//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';
// import {TiDocumentAdd, TiHomeOutLine } from 'react-icons/ti';


function Nav() {
  return (
    // goto public root index.html
    // go up to src/App.js
    <nav className='global a'>
      <Link to="/">Home</Link> 
      <Link to="../gallery">Gallery</Link>
      <Link to="../staff">Staff</Link>
      <Link to="../order">Order</Link>
      {/*<Link to="../contact">Contact</Link>*/}    
    </nav>
  );
}

export default Nav;   // export to App.js
