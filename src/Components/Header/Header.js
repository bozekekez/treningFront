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
  const { setBeckground, logged, setLogged, basket } = useContext(ItemContext);
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
  const [botunBasket, setBotunBaskert] = useState('botBasketY')
  let boja = localStorage.getItem('color');
  const [colorStyle, setColorStyle] = useState(boja);
  const [grafMeni, setGrafMeni] = useState(false);
  const [pongoMeni, setPongoMeni] = useState(false);
  const [turnirMeni, setTurnirMeni] = useState(false);
  const [loaded, setLoaded] = useState(false)

  const user = localStorage.getItem('user')

  console.log('tu', boja)

  let change = (color) => {
    console.log(color)
    if(color === 'yellow'){
      setStyle('meniBotun');
      setStyleMeni('botun2')
      setNavStyle('navbar')
      setBotunBaskert('botBasketY')
      setColorStyle('ActiveY')
      document.body.style = "background: honeydew"
      localStorage.setItem('color', 'ActiveY')
    }
    if(color === 'green'){
      setStyle('meniBotun2');
      setStyleMeni('botun3')
      setNavStyle('navbar2')
      setBotunBaskert('botBasketG')
      setColorStyle('ActiveG')
      document.body.style = "background: rgb(206, 241, 212)"
      localStorage.setItem('color', 'ActiveG')
    }
    if(color === 'blue'){
      setStyle('meniBotun3');
      setStyleMeni('botun4')
      setNavStyle('navbar3')
      setBotunBaskert('botBasketB')
      setColorStyle('ActiveB')
      document.body.style = "background: lightcyan"
      localStorage.setItem('color', 'ActiveB')
    }
  }

  if(colorStyle === 'ActiveY' && loaded === false){
    // let temp = (color) => change(color = 'yellow')
    // temp();
    setStyle('meniBotun');
    setStyleMeni('botun2')
    setNavStyle('navbar')
    setBotunBaskert('botBasketY')
    document.body.style = "background: honeydew"
    setLoaded(true)
  }
  if(colorStyle === 'ActiveG' && loaded === false){
    setStyle('meniBotun2');
    setStyleMeni('botun3')
    setNavStyle('navbar2')
    setBotunBaskert('botBasketG')
    document.body.style = "background: rgb(206, 241, 212)"
    setLoaded(true)
  }
  if(colorStyle === 'ActiveB' && loaded === false){
    setStyle('meniBotun3');
    setStyleMeni('botun4')
    setNavStyle('navbar3')
    setBotunBaskert('botBasketB')
    document.body.style = "background: lightcyan"
    setLoaded(true)
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
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

const handleArray = () =>{
  history.push('/array')
}

const handleZadatak = () =>{
  if(zadaci === false){
    setZadaci(true)
    setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBankaMeni(false);
      setGrafMeni(false)
      setPongoMeni(false);
      setTurnirMeni(false);
  }
  if(zadaci === true){
    setZadaci(false)
  }
}

const handleSignOut = () => {
  setLogged('')
  localStorage.removeItem('user');
}

const handleSell = () => {
  history.push('/market/sell');
}


const handleProfil = () =>{
  history.push(`/profile/${user}`)
}

const handleCart = () =>{
  history.push('/market/cart')
}


const handleClock  = () =>{
  history.push('/clock')
}

const handleGraf = () =>{
  if(grafMeni === false){
      setGrafMeni(true)
       setZadaci(false)
      setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBankaMeni(false);
      setPongoMeni(false);
      setTurnirMeni(false);
  }
  if(grafMeni === true){
    setGrafMeni(false)
  }
}

const handleGrafikon = () =>{
  history.push('/chart')
}

const handlePongo = () =>{
  if(pongoMeni === false){
    setPongoMeni(true)
    setGrafMeni(false)
    setZadaci(false)
    setMarketMeni(false);
    setTick(false);
    setAutiMeni(false);
    setCreditmeni(false);
    setBankaMeni(false);
    setTurnirMeni(false);
    }
    if(grafMeni === true){
      setGrafMeni(false)
    }
}

const handleTurnir = () => {
  if(turnirMeni === false){
    setTurnirMeni(true)
    setPongoMeni(false)
    setGrafMeni(false)
    setZadaci(false)
    setMarketMeni(false);
    setTick(false);
    setAutiMeni(false);
    setCreditmeni(false);
    setBankaMeni(false);
    }
    if(grafMeni === true){
      setGrafMeni(false)
    }
}

const handlePongo1 = () => {
  history.push('/pongo')
}

const handlePongo2 = () =>{
  history.push('/pongo2')
}

const handleTurnirRuta = ()=>{
  history.push('/turnir')
} 
console.log(basket)
  return (
    <div className="headerParent">
      <div className={navStyle}>
        <button className={styleMeni} onMouseEnter={handleMeni} onClick={handleMeni}>
          <img className="meni" src={list} />
        </button>
        {  
          basket === '0' || basket === '0.00' || basket === '-0.00' || basket === '0' ?
          <div/>
          :
          basket !== 0?
          <button className={botunBasket} onClick={handleCart} >{basket}</button>
          :
          <div/>
        }
        { colorStyle === 'ActiveY' ?
        <button onClick={(color) =>change(color = 'yellow')} className="ActiveY"></button>
        :
        <button onClick={(color) =>change(color = 'yellow')} className="botunY"></button>
        }
        { colorStyle === 'ActiveG' ?
        <button onClick={(color) =>change(color = 'green')} className="ActiveG"></button>
        :
        <button onClick={(color) =>change(color = 'green')} className="botunG"></button>
        }
        { colorStyle === 'ActiveB' ?
        <button onClick={(color) =>change(color = 'blue')} className="ActiveB"></button>
        :
        <button onClick={(color) =>change(color = 'blue')} className="botunB"></button>
        }
        
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
            <button className={style} onMouseEnter={handleGraf} onClick={handleGraf}>
              Graf
            </button>
            <button className={style} onMouseEnter={handlePongo} onClick={handlePongo}>
              Pongo
            </button>
            <button className={style} onMouseEnter={handleTurnir} onClick={handleTurnir}>
              Turnir
            </button>
          </div>
          { turnirMeni === true ?
           <div className="meniDeploy2">
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className="none">1</button>
          <button className={style} onClick={handleTurnirRuta}>Turnir</button>
          </div>
          :
            <></>
          }
          { pongoMeni === true?
          <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            {/*<div className="meniDeployPodPongo"> */}
            <button className={style} onClick={handlePongo1}>Pongo v1</button>
            <button className={style} onClick={handlePongo2}>Pongo v2</button>
          </div>
            :
            <></>
          }
          { bankaMeni === true?
            <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className={style} onClick={handleBanka}>Banka</button>
            </div>
          :
          <div/>
          }
          {creditMeni === true ? (
            <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className={style} onClick={handleIzračun}>Kredit izračun</button>
            <button className={style} onClick={handlePlaćanje}>Plaćanje kredita</button>
            <button className={style} onClick={handlePregled}>Pregled kredita</button>
          </div>
          ) : (
            <div/>
          )}
          {tick === true ? (
            <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
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
            <div/>
          )}
          {marketMeni === true ? (
            <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
              <button className={style} onClick={handleMarket}>
                Market
              </button>
              <button className={style} onClick={handleCart} >{basket}</button>
              { user === '' || user === null ?
                <button className={style} onClick={handleLog}>Login</button>
                :
                <>
                {/* <button className={style} onClick={handleProfil}>{logged}</button> */}
                <button className={style} onClick={handleProfil}>{user}</button>
                <button className={style} onClick={handleSell}>Sell</button>
                <button className={style} onClick={handleSignOut}>Log out</button>
                </>
              }         
            </div>
          ) : (
            <div/>
          )}
          {autiMeni === true ? (
            <div className="meniDeploy2">
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
            <div/>
          )}
          { booksMeni === true ?
          <div className="meniDeploy2">
            <button className="none">1</button>
            <button className={style} onClick={handleBooks}>Books</button>
            <button className={style} onClick={handleAdd}>Add Book</button>
            <button className={style} onClick={handleAddAuthor}>Add Author</button>
            <button className={style} onClick={handleFilter}>Filter</button>
          </div>
          :
          <div/>
          }
          { zadaci === true?
          <div className="meniDeploy2">
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className="none">1</button>
            <button className={style} onClick={handleClock}>Clock</button>
            <button className={style} onClick={handleArray}>Array</button>
          </div>
          :
          <div/>
          }
          { grafMeni === true?
            <div className="meniDeploy2">
              <button className="none">1</button>
              <button className="none">1</button>
              <button className="none">1</button>
              <button className="none">1</button>
              <button className="none">1</button>
              <button className="none">1</button>
              <button className="none">1</button>
              <button className={style} onClick={handleGrafikon}>Graf</button>
            </div>
            :
            <></>
          }
        </div>
      ) : (
        <div/>
      )}
    </div>
  );
};
export default Header;
