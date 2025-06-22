import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddMoviePage = () => {

    const [stckUndly, setStckUndly] = useState('SPX');  // default value is SPX
    const [numContrt, setNumContrt] = useState('1');    // default value is 1
    const [expDate, setExpDate]     = useState('');
    const [strtDate, setStrtDate]   = useState('');
    const [exitDate, setExitDate]   = useState('');

    const redirect = useNavigate();

    const addMovie = async () => {
        const newMovie = { stckUndly, numContrt, expDate, strtDate, exitDate };
        const response = await fetch('/movies', {
            method: 'post',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which underlying stock are you adding?</legend>
                    <label for="stckUndly">Underlying Stock</label>
                    <input
                        type="text"
                        placeholder="Underlying Stock"
                        value={stckUndly}
                        onChange={e => setStckUndly(e.target.value)} 
                        id="stckUndly" />
                    
                    <label for="numContrt">Number of Contracts</label>
                    <input
                        type="number"
                        value={numContrt}
                        placeholder="Number of contracts"
                        onChange={e => setNumContrt(e.target.value)} 
                        id="numContrt" />

                    <label for="expDate">Expiration Date</label>
                    <input
                        type="date"
                        name='expDate'
                        value={expDate}
                        onChange={e => setExpDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}"
                        id="expDate" />

                    <label for="strtDate">Start Date</label>
                    <input
                        type="date"
                        value={strtDate}
                        onChange={e => setStrtDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}"
                        id="strtDate" />

                    <label for="exitDate">Exit Date</label>
                    <input
                        type="date"
                        value={exitDate}
                        onChange={e => setExitDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}"
                        id="exitDate" />


                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addMovie}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddMoviePage;