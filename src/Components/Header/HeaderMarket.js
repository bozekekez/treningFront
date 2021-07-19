import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Header.css'

const HeaderMarket = () => {
    const {header, setHeader, logged, setLogged, basket} = useContext(ItemContext);
    let history = useHistory();

    const handleLogin = () =>{
        history.push('/market/login');
    }

    const handleAuti = () =>{
        setHeader('auti');
        document.body.style = 'background: honeydew'; 
        history.push('/');
    }

    const handleKnjige = () => {
        setHeader('knjige');
        document.body.style = 'background: rgb(198, 242, 248)';
        history.push('/knjige');
    }

    const handleSignOut = () => {
        setLogged('')
    }

    const handleSell = () => {
        history.push('/market/sell');
    }

    const handleMarket = () => {
        history.push('/market');
    }

    const handleProfil = () =>{
        history.push(`/profile/${logged}`)
    }

    const handleCart = () =>{
        history.push('/market/cart')
    }

    console.log(logged)
return (
    <div className="navbarMarket">
        <button className="botun2Market" onClick={handleKnjige}>Knjige</button>
        { logged === '' || logged === undefined?
            <button className="botunMarket" onClick={handleLogin}>Login</button>
        :logged !== ''?
            <>
            <button className="botunMarket" onClick={handleProfil}>{logged}</button>
            <button className="botunMarket" onClick={handleSignOut}>Log out</button>
            <button className="botunMarket" onClick={handleSell}>Sell</button>
            </>
        :
            <button className="botunMarket" onClick={handleLogin}>Login</button>
        }
        <button className="botunMarket" onClick={handleMarket}>Market</button>
        <button className="botunMarket" onClick={handleCart} >{basket}</button>
        <button className="botun1Market" onClick={handleAuti}>Auti</button>
    </div>
)
}
export default HeaderMarket;