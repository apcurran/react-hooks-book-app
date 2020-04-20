import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext); 

    return (
        <li onClick={ () => dispatch({ type: "REMOVE_BOOK", id: book.id }) } className="book">
            <h3 className="book__title">{ book.title }</h3>
    <p className="book__author">{ book.author }</p>
        </li>
    );
};
