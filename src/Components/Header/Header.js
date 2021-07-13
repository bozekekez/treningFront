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
        document.body.style = 'background: rgb(198, 242, 248)';
        history.push('/books');
    }

    const handleLogin = () => {
        setHeader('market');
        document.body.style = 'background: #e6e6ff';
        history.push('/market');
    }

return(
    <div className="navbar">
        <button className="botun2" onClick={handleLogin}>Market</button>
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