import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Header.css'
import list from './list.png'

const HeaderMarket = () => {
    const {header, setHeader, logged, setLogged, basket} = useContext(ItemContext);
    const [meni, setMeni] = useState(false)
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

  const handleMeni = () => {
    if(meni === false){
      setMeni(true)
    }
    if (meni === true) {
      setMeni(false)
    }
  }

  const handleBanka = () =>{
    history.push('/banka');
  }

  const handleKredit = () =>{
    history.push('/credit');
  }

  
  const handleTick1 = () =>{
    history.push('/tick')
  }

  const handleTick2 = () =>{
    history.push('/ticktack')
  }

  const handleTick3 = () =>{
    history.push('/ticktacktoe')
  }


    console.log(logged)
return (
    <div>
    <div className="navbarMarket">
        <button className="botun2" onClick={handleMeni}>
        <img className="meni" src={list}/>
      </button>
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
        
    </div>
        { meni === true ?
      <div className="meniDeploy">
        <button className="meniBotun" onClick={handleKnjige}>
        Knjige
      </button>
      <button className="meniBotun" onClick={handleLogin}>
        Market
      </button> 
      <button className="meniBotun" onClick={handleAuti}>Auti</button>
      <button className="meniBotun" onClick={handleBanka}>Banka</button>
      <button className="meniBotun" onClick={handleKredit}>Kredit</button>
      <button className="meniBotun" onClick={handleTick1}>TicTackToe v 1</button>
      <button className="meniBotun" onClick={handleTick2}>TicTackToe v 1</button>
      <button className="meniBotun" onClick={handleTick3}>TicTackToe pvp</button>
      </div>
      :
      <></>
      }
    </div>
)
}
export default HeaderMarket;