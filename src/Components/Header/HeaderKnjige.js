import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Header.css'

const Header = () => {
    const {header, setHeader} = useContext(ItemContext);
    let history = useHistory();

    const handleAdd = () =>{
        history.push('/books/addbook');
    }

    const handleAddAuthor = () =>{
        history.push('/books/addauthor');
    }

    const handleFilter = () =>{
        history.push('/books/filter');
    }

    const handleAuti = () =>{
        setHeader('auti')
        history.push('/');
    }

return(
    <div className="navbarKnjige">
        <button className="botunKnjige" onClick={handleAdd}>Add Book</button>
        <button className="botunKnjige" onClick={handleAddAuthor}>Add Author</button>
        <button className="botunKnjige" onClick={handleFilter}>Filter</button>
        <button className="botun1Knjige" onClick={handleAuti}>Auti</button>
    </div>
)
}
export default Header;