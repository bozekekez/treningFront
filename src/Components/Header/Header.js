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
import list from "./list.png";

const Header = () => {
  const { setBeckground } = useContext(ItemContext);
  const [meni, setMeni] = useState(false);
  let history = useHistory();
  const [creditMeni, setCreditmeni] = useState(false);
  const [tick, setTick] = useState(false);
  const [marketMeni, setMarketMeni] = useState(false);
  const [autiMeni, setAutiMeni] = useState(false);
  const [booksMeni, setBooksMeni] = useState(false);
  const [bankaMeni, setBankaMeni] = useState(false)
  const [style, setStyle] = useState('meniBotun');
  const [styleMeni, setStyleMeni] = useState('botun2');
  const [navStyle, setNavStyle] = useState('navbar');
  const [zadaci, setZadaci] = useState(false)

  let change = (color) => {
    console.log(color)
    if(color === 'yellow'){
      setStyle('meniBotun');
      setStyleMeni('botun2')
      setNavStyle('navbar')
      document.body.style = "background: honeydew"
    }
    if(color === 'green'){
      setStyle('meniBotun2');
      setStyleMeni('botun3')
      setNavStyle('navbar2')
      document.body.style = "background: rgb(206, 241, 212)"
    }
    if(color === 'blue'){
      setStyle('meniBotun3');
      setStyleMeni('botun4')
      setNavStyle('navbar3')
      document.body.style = "background: lightcyan"
    }
  }

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
    if(booksMeni === false){
      setBooksMeni(true)
      setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBankaMeni(false);
      setZadaci(false)
    }
    if(booksMeni === true){
      setBooksMeni(false)
    }
  };

  const handleLogin = () => {
    if (marketMeni === true) {
      setMarketMeni(false);
    }
    if (marketMeni === false) {
      setMarketMeni(true);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBooksMeni(false);
      setBankaMeni(false);
      setZadaci(false)
    }
  };

  const handleMarket = () => {
    history.push("/market");
  };

  const handleLog = () => {
    history.push("/market/login");
  };

  const handleMeni = () => {
    if (meni === false) {
      setMeni(true);
    }
    if (meni === true) {
      setMeni(false);
    }
      setBooksMeni(false)
      setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBankaMeni(false);
      setZadaci(false)
  };

  const handleAuti = () => {
    if (autiMeni === false) {
      setAutiMeni(true);
      setBooksMeni(false);
      setMarketMeni(false);
      setTick(false);
      setCreditmeni(false);
      setBankaMeni(false);
      setZadaci(false)
    }
    if (autiMeni === true) {
      setAutiMeni(false);
    }
  };

  const handleBankMeni = () =>{
    if(bankaMeni === false){
      setBankaMeni(true)
      setAutiMeni(false);
      setBooksMeni(false);
      setMarketMeni(false);
      setTick(false);
      setCreditmeni(false);
      setZadaci(false)
    }
    if(bankaMeni === true){
      setBankaMeni(false)
    }
  }

  const handleBanka = () => {
      history.push("/banka");
      setAutiMeni(false);
      setBooksMeni(false);
      setMarketMeni(false);
      setTick(false);
      setCreditmeni(false);
      setZadaci(false)
  };

  const handleKredit = () => {
    if (creditMeni === false) {
      setCreditmeni(true);
      setAutiMeni(false);
      setMarketMeni(false);
      setTick(false);
      setBooksMeni(false);
      setBankaMeni(false);
      setZadaci(false)
    }
    if (creditMeni === true) {
      setCreditmeni(false);
    }
  };

  const handleIzračun = () => {
    history.push("/credit");
  };

  const handlePlaćanje = () => {
    history.push("/credit/pay");
  };

  const handlePregled = () => {
    history.push("/credit/search");
  };

  const handleTick = () => {
    if (tick === false) {
      setTick(true);
      setCreditmeni(false);
      setAutiMeni(false);
      setMarketMeni(false);
      setBooksMeni(false);
      setBankaMeni(false);
      setZadaci(false)
    }
    if (tick === true) {
      setTick(false);
    }
  };

  const handleTick1 = () => {
    history.push("/tick");
  };

  const handleTick2 = () => {
    history.push("/ticktack");
  };

  const handleTick3 = () => {
    history.push("/ticktacktoe");
  };

  const handleAdd = () =>{
    history.push('/books/addbook');
}

const handleAddAuthor = () =>{
    history.push('/books/addauthor');
}

const handleFilter = () =>{
    history.push('/books/filter');
}

const handleBooks = () =>{
  history.push('/books')
}

const handleZadatak = () =>{
  if(zadaci === false){
    setZadaci(true)
    setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBankaMeni(false);
  }
  if(zadaci === true){
    setZadaci(false)
  }
}

const handleClock  = () =>{
  history.push('/clock')
}
  return (
    <div className="headerParent">
      <div className={navStyle}>
        <button className={styleMeni} onMouseEnter={handleMeni} onClick={handleMeni}>
          <img className="meni" src={list} />
        </button>
        <button onClick={(color) =>change(color = 'yellow')}className="botunY"></button>
        <button onClick={(color) =>change(color = 'green')} className="botunG"></button>
        <button onClick={(color) =>change(color = 'blue')} className="botunB"></button>
      </div>
      {meni === true ? (
        <div className="meniTop">
          <div className="meniDeploy">
            <button className={style} onMouseEnter={handleAuti} onClick={handleAuti}>
              Auti
            </button>
            <button className={style} onMouseEnter={handleKnjige} onClick={handleKnjige}>
              Knjige
            </button>
            <button className={style} onMouseEnter={handleLogin} onClick={handleLogin}>
              Market
            </button>
            <button className={style} onMouseEnter={handleBankMeni}  onClick={handleBankMeni}>
              Banka
            </button>
            <button className={style} onMouseEnter={handleKredit} onClick={handleKredit}>
              Kredit
            </button>
            <button className={style} onMouseEnter={handleTick} onClick={handleTick}>
              TicTacToe
            </button>
            <button className={style} onMouseEnter={handleZadatak} onClick={handleZadatak}>
              Zadaci
            </button>
          </div>
          { bankaMeni === true?
            <div className="meniDeployPodBanka">
            <button className={style} onClick={handleBanka}>Banka</button>
          </div>
          :
            <></>
          }
          {creditMeni === true ? (
            <div className="meniDeployPodKredit">
            <button className={style} onClick={handleIzračun}>Kredit izračun</button>
            <button className={style} onClick={handlePlaćanje}>Plaćanje kredita</button>
            <button className={style} onClick={handlePregled}>Pregled kredita</button>
          </div>
          ) : (
            <></>
          )}
          {tick === true ? (
            <div className="meniDeployPodTick">
              <button className={style} onClick={handleTick1}>
                TicTackToe v 1
              </button>
              <button className={style} onClick={handleTick2}>
                TicTackToe v 2
              </button>
              <button className={style} onClick={handleTick3}>
                TicTackToe pvp
              </button>
            </div>
          ) : (
            <></>
          )}
          {marketMeni === true ? (
            <div className="meniDeployPodMarket">
              <button className={style} onClick={handleMarket}>
                Market
              </button>
              <button className={style} onClick={handleLog}>
                Login
              </button>
            </div>
          ) : (
            <></>
          )}
          {autiMeni === true ? (
            <div className="meniDeployPodAuti">
              <button className={style} onClick={handleClick}>
                Home
              </button>
              <button className={style} onClick={handleSearch}>
                Search
              </button>
              <button className={style} onClick={handleQuery}>
                Query
              </button>
              <button className={style} onClick={handleList}>
                List
              </button>
              <button className={style} onClick={handleMotori}>
                Motori
              </button>
              <button className={style} onClick={handleDelete}>
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
          { booksMeni === true ?
          <div className="meniDeployPodKnjige">
            <button className={style} onClick={handleBooks}>Books</button>
            <button className={style} onClick={handleAdd}>Add Book</button>
            <button className={style} onClick={handleAddAuthor}>Add Author</button>
            <button className={style} onClick={handleFilter}>Filter</button>
          </div>
          :
          <></>
          }
          { zadaci === true?
          <div className="meniDeployPodZadaci">
            <button className={style} onClick={handleClock}>Clock</button>
          </div>
          :
          <></>
          }
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Header;
