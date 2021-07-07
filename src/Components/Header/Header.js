import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Header.css'

const Header = () => {
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
return(
    <div className="navbar">
        <button className="botun" onClick={handleClick}>Home</button>
        <button className="botun" onClick={handleSearch}>Search</button>
        <button className="botun" onClick={handleQuery}>Query</button>
        <button className="botun" onClick={handleList}>List</button>
        <button className="botun" onClick={handleMotori}>Motori</button>
    </div>
)
}
export default Header;