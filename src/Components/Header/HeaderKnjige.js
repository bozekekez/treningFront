import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Header.css'
import list from './list.png'

const Header = () => {
    const {header, setHeader} = useContext(ItemContext);
    const [meni, setMeni] = useState(false)
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
        document.body.style = 'background: #e6e6ff';
        history.push('/market');
    }
    const handleKnjige = () => {
        setHeader("knjige");
        document.body.style = "background: rgb(198, 242, 248)";
        history.push("/books");
      };
    
      const handleLogin = () => {
        setHeader("market");
        document.body.style = "background: #e6e6ff";
        history.push("/market");
      };
    
      const handleMeni = () => {
        if(meni === false){
          setMeni(true)
        }
        if (meni === true) {
          setMeni(false)
        }
      }
    
      const handleBanka = () =>{
        history.push('banka/');
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
    
return (
    <div>
    <div className="navbarKnjige">
        <button className="botun2" onClick={handleMeni}>
        <img className="meni" src={list}/>
      </button>
        <button className="botunKnjige" onClick={handleAdd}>Add Book</button>
        <button className="botunKnjige" onClick={handleAddAuthor}>Add Author</button>
        <button className="botunKnjige" onClick={handleFilter}>Filter</button>
        
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
export default Header;