import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: "ADD_BOOK", book: {
            title,
            author
        } });

        // Reset inputs to blank vals
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={ handleSubmit } className="form">
            <input className="form__input" onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Book title" value={ title } required />
            <input className="form__input" onChange={(event) => setAuthor(event.target.value)} type="text" placeholder="Book author" value={ author } required />
            <button className="form__submit" type="submit">Add Book</button>
        </form>
    );
}