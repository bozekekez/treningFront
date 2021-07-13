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
        setHeader('auti');
        document.body.style = 'background: honeydew'; 
        history.push('/');
    }

    const handleMarket = () => {
        setHeader('market'); 
        document.body.style = 'background: rgb(248, 244, 250);';
        history.push('/market');
    }

return (
    <div className="navbarKnjige">
        <button className="botun2Knjige" onClick={handleMarket}>Market</button>
        <button className="botunKnjige" onClick={handleAdd}>Add Book</button>
        <button className="botunKnjige" onClick={handleAddAuthor}>Add Author</button>
        <button className="botunKnjige" onClick={handleFilter}>Filter</button>
        <button className="botun1Knjige" onClick={handleAuti}>Auti</button>
    </div>
)
}
export default Header;