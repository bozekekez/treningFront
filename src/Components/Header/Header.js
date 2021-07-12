import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Header.css'

const Header = () => {
    const {header, setHeader} = useContext(ItemContext);
    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    const handleSearch = () =>{
        history.push('/search');
    }

    const handleList = () =>{
        history.push('/list');
    }

    const handleQuery = () =>{
        history.push('/query');
    }

    const handleMotori = () =>{
        history.push('/motori');
    }

    const handleDelete = () =>{
        history.push('/delete');
    }

    const handleKnjige = () =>{
        setHeader('knjige');
        history.push('/books');
    }

return(
    <div className="navbar">
        <button className="botun" onClick={handleClick}>Home</button>
        <button className="botun" onClick={handleSearch}>Search</button>
        <button className="botun" onClick={handleQuery}>Query</button>
        <button className="botun" onClick={handleList}>List</button>
        <button className="botun" onClick={handleMotori}>Motori</button>
        <button className="botun" onClick={handleDelete}>Delete</button>
        <button className="botun1" onClick={handleKnjige}>Knjige</button>
    </div>
)
}
export default Header;