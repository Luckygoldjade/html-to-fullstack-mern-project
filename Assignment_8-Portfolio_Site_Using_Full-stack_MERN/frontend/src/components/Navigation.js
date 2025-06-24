import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineAreaChart} from 'react-icons/ai';
import {BsBarChart} from 'react-icons/bs';

function Menu() {
  return (
    // goto public root index.html
    // go up to src/App.js
    <nav className='global a'>
        <Link to="/">Home</Link>
		{/* <Link to="/create">Add Movie</Link> */}
		<Link to="../log"><i><AiOutlineAreaChart /></i>Trade Log<i><BsBarChart /></i></Link>
		<Link to="../topics">Topics</Link>
		<Link to="../gallery">Gallery</Link>
      	<Link to="../staff">Staff</Link>
      	<Link to="../order">Order</Link>
    </nav>
  );
}

export default Menu;    // goto src/App.js
