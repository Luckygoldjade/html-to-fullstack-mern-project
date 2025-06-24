import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcCandleSticks } from 'react-icons/fc';
import { AiOutlineStock } from 'react-icons/ai';

import MovieList from '../components/MovieList';

function LogPage({ setMovie }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [movies, setMovies] = useState([]);

    // RETRIEVE the entire list of movies
    const loadMovies = async () => {
        const response = await fetch('/movies');
        const movies = await response.json();
        setMovies(movies);
    } 
    

    // UPDATE a single movie
    const onEditMovie = async movie => {
        setMovie(movie);
        redirect("/update");
    }


    // DELETE a single movie  
    const onDeleteMovie = async _id => {
        const response = await fetch(`/movies/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/movies');
            const movies = await getResponse.json();
            setMovies(movies);
        } else {
            console.error(`Failed to delete trade with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the movies
    useEffect(() => {
        loadMovies();
    }, []);

    // DISPLAY the movies
    return (
        <>
            <h2>List of Stock Option Trades</h2>
            <p>Please record your stock option trade. Click on the Add Option Trade button and fill out the form. You can also delete or edit a trade in the trade list below by clicking on the buttons on the row<i><FcCandleSticks /></i></p><i><AiOutlineStock /></i>
            <button onClick={() => redirect("/create")}>Add Option Trade</button>
            <MovieList 
                movies={movies} 
                onEdit={onEditMovie} 
                onDelete={onDeleteMovie} 
            />
        </>
    );
}

export default LogPage;