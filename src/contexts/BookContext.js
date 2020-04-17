import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: "Name of the Wind", author: "Patrick Rothfuss", id: 1 },
        { title: "The Final Empire", author: "Brandon Sanderson", id: 2 },
    ]);

    function addBook(title, author) {
        setBooks([
            ...books,
            { title, author, id: uuidv4() }
        ])
    }

    function removeBook(id) {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    )
}
