import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function Navbar() {
    const { books } = useContext(BookContext);

    return (
        <nav className="navbar">
            <h1 className="navbar__title">Ninja Reading List</h1>
    <p>You currently have { books.length } book(s) to read...</p>
        </nav>
    )
}
