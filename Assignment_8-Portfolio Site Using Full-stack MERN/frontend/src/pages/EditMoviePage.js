import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditMoviePage = ({ movieToEdit }) => {
 
    const [stckUndly, setStckUndly] = useState(movieToEdit.stckUndly);
    const [numContrt, setNumContrt] = useState(movieToEdit.numContrt);
    const [expDate, setExpDate]     = useState(movieToEdit.date);
    const [strtDate, setStrtDate]   = useState(movieToEdit.strtDate);
    const [exitDate, setExitDate]   = useState(movieToEdit.exitDate);

    const redirect = useNavigate();

    const editMovie = async () => {
        const response = await fetch(`/movies/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                stckUndly: stckUndly, 
                numContrt: numContrt, 
                expDate: expDate,
                strtDate: strtDate,
                exitDate: exitDate
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`document edited`);
        } else {
            const errMessage = await response.json();
            alert(`document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a movie in the collection</h2>
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
                        onClick={editMovie}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditMoviePage;