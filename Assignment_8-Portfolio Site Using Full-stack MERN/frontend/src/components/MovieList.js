import React from 'react';
import Movie from './Movie';
// names on table header
function MovieList({ movies, onDelete, onEdit }) {
    return (
        <table id="movies">
            <caption>Add and Edit Stock Option Trades</caption>
            <thead>
                <tr>
                    <th>Underlying Stock</th>
                    <th>Number of Contracts</th>
                    <th>Expiration Date</th>
                    <th>Start Date</th>
                    <th>Exit Date</th>
                    <th>Delete Row</th>
                    <th>Edit Row</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, i) => 
                    <Movie 
                        movie={movie} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default MovieList;
