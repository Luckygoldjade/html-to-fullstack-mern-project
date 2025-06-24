// App.js is main page
// import dependencies
import React from 'react';

// global import of all components. One time import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data. current directory is src
import products from './data/products.js';

// import pages and components
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
//import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import StaffPage from './pages/StaffPage';



// import styles and images
import { GiCoffeeCup } from 'react-icons/gi';
import './App.css';

// main function
function App() {
  return (
    <div className="App">
      <BrowserRouter>   {/* for headings */}

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Tony's React Coffee 
            <i className="App-logo" alt="coffee"><GiCoffeeCup />and React Pet Shop</i>
          </h1>
        </header>

        <nav className='global'>
          <Nav />   {/* for navigation. import navigation*/}
        </nav>

        <main>
          <section className="App-article">
            {/* <h2></h2> */}
            <Routes>
              <Route path="/" element={<HomePage />} />   {/* to index.html */}
              <Route path="/gallery" element={<GalleryPage />} /> 
              <Route path="/order" element={<OrderPage products={products} />} /> {/* data/products.js */}
              <Route path="/staff" element={<StaffPage />} />  
              {/* <Route path="/contact" element={<ContactPage />} />  */}
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; Tony Chan 2023</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;  // export to index.js. must have this line
