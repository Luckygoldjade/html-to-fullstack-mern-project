import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// data from mongodb
function Movie({ movie, onEdit, onDelete }) {
    // Extract the date portion from the expDate string
    const formattedExpDate = movie.expDate.slice(0, 10);
    const formattedStrtDate = movie.strtDate.slice(0, 10);
    const formattedExitDate = movie.exitDate.slice(0, 10);

    return (
        <tr>
            <td>{movie.stckUndly}</td>
            <td>{movie.numContrt}</td>
            <td>{formattedExpDate}</td>
            <td>{formattedStrtDate}</td>
            <td>{formattedExitDate}</td>
            <td><MdDeleteForever onClick={() => onDelete(movie._id)} /></td>
            <td><MdEdit onClick={() => onEdit(movie)} /></td>
        </tr>
    );
}

export default Movie;