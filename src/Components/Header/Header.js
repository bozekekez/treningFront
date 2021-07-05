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
return(
    <div className="navbar">
        <buton className="botun" onClick={handleClick}>Home</buton>
        <buton className="botun" onClick={handleSearch}>Search</buton>
    </div>
)
}
export default Header;