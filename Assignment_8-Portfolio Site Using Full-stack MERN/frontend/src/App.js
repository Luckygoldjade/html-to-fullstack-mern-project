// App.js is main page
// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data. current directory is src
import products from './data/products.js';

// Import Components, styles, media
import { GiCoffeeCup } from 'react-icons/gi';
import './App.css';

// Import Pages
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import TopicsPage from './pages/TopicsPage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import StaffPage from './pages/StaffPage';

// Define the function that renders the content in routes using State.
function App() {

  const [movie, setMovieToEdit] = useState([])

  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Tony's Comp Sci Experience, Web Dev Techs, and React Pet Shop
            <i className="App-logo" alt="coffee"><GiCoffeeCup />and Stock Option Trade Log</i>
          </h1>
          <p>This app uses M.E.R.N.</p>
        </header>

        <nav className="global">
          <Navigation /> {/* call the Navigation component */}
        </nav>

        <main>
          <section>
            <Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/log" element={<LogPage setMovie={setMovieToEdit} />} />
			<Route path="/create" element={<AddMoviePage />} />
			<Route path="/update" element={<EditMoviePage movieToEdit={movie} />} />
			<Route path="/topics" element={<TopicsPage />} />
			<Route path="/gallery" element={<GalleryPage />} /> 
			<Route path="/order" element={<OrderPage products={products} />} /> {/* data/products.js */}
			<Route path="/staff" element={<StaffPage />} />  
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

export default App;