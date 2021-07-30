import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../Context/Context";
import "./Header.css";
import list from './list.png'

const Header = () => {
  const { header, setHeader } = useContext(ItemContext);
  const [meni, setMeni] = useState(false)
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const handleSearch = () => {
    history.push("/search");
  };

  const handleList = () => {
    history.push("/list");
  };

  const handleQuery = () => {
    history.push("/query");
  };

  const handleMotori = () => {
    history.push("/motori");
  };

  const handleDelete = () => {
    history.push("/delete");
  };

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

  const handleAuti = () =>{
    setHeader('auti');
    document.body.style = 'background: honeydew'; 
    history.push('/');
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
    <div className="headerParent">
    <div className="navbar">
      <button className="botun2" onClick={handleMeni}>
        <img className="meni" src={list}/>
      </button>
      
      {/* <button className="botun2" onClick={handleLogin}>
        eo
      </button> */}
      <button className="botun" onClick={handleClick}>
        Home
      </button>
      <button className="botun" onClick={handleSearch}>
        Search
      </button>
      <button className="botun" onClick={handleQuery}>
        Query
      </button>
      <button className="botun" onClick={handleList}>
        List
      </button>
      <button className="botun" onClick={handleMotori}>
        Motori
      </button>
      <button className="botun" onClick={handleDelete}>
        Delete
      </button>
      {/* <button className="botun1" onClick={handleKnjige}>
        Knjige
      </button> */}
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
  );
};
export default Header;
