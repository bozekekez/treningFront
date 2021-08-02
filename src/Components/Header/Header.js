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
  const { header, setHeader } = useContext(ItemContext);
  const [meni, setMeni] = useState(false);
  let history = useHistory();
  const [creditMeni, setCreditmeni] = useState(false);
  const [tick, setTick] = useState(false);
  const [marketMeni, setMarketMeni] = useState(false);
  const [autiMeni, setAutiMeni] = useState(false);
  const [booksMeni, setBooksMeni] = useState(false);

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
    // setHeader("knjige");
    // document.body.style = "background: rgb(198, 242, 248)";
    // history.push("/books");
    if(booksMeni === false){
      setBooksMeni(true)
      setMarketMeni(false);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
    }
    if(booksMeni === true){
      setBooksMeni(false)
    }
  };

  const handleLogin = () => {
    // setHeader("market");
    // document.body.style = "background: #e6e6ff";
    // history.push("/market");
    if (marketMeni === true) {
      setMarketMeni(false);
    }
    if (marketMeni === false) {
      setMarketMeni(true);
      setTick(false);
      setAutiMeni(false);
      setCreditmeni(false);
      setBooksMeni(false);
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
  };

  const handleAuti = () => {
    // setHeader('auti');
    // document.body.style = 'background: honeydew';
    // history.push('/');
    if (autiMeni === false) {
      setAutiMeni(true);
      setBooksMeni(false);
      setMarketMeni(false);
      setTick(false);
      setCreditmeni(false);
    }
    if (autiMeni === true) {
      setAutiMeni(false);
    }
  };

  const handleBanka = () => {
      history.push("/banka");
      setAutiMeni(false);
      setBooksMeni(false);
      setMarketMeni(false);
      setTick(false);
      setCreditmeni(false);

  };

  const handleKredit = () => {
    // history.push('/credit');
    if (creditMeni === false) {
      setCreditmeni(true);
      setAutiMeni(false);
      setMarketMeni(false);
      setTick(false);
      setBooksMeni(false);
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

  return (
    <div className="headerParent">
      <div className="navbar">
        <button className="botun2" onClick={handleMeni}>
          <img className="meni" src={list} />
        </button>

        {/* <button className="botun2" onClick={handleLogin}>
        eo
      </button> */}

        {/* <button className="botun1" onClick={handleKnjige}>
        Knjige
      </button> */}
      </div>
      {meni === true ? (
        <div className="meniTop">
          <div className="meniDeploy">
            <button className="meniBotun" onMouseEnter={handleAuti} onClick={handleAuti}>
              Auti
            </button>
            <button className="meniBotun" onMouseEnter={handleKnjige} onClick={handleKnjige}>
              Knjige
            </button>
            <button className="meniBotun" onMouseEnter={handleLogin} onClick={handleLogin}>
              Market
            </button>
            <button className="meniBotun" onMouseEnter={handleBanka} onClick={handleBanka}>
              Banka
            </button>
            <button className="meniBotun" onMouseEnter={handleKredit} onClick={handleKredit}>
              Kredit
            </button>
            <button className="meniBotun" onMouseEnter={handleTick} onClick={handleTick}>
              TicTacToe
            </button>
          </div>
          {creditMeni === true ? (
            <div className="meniDeployPodKredit">
              <button className="meniBotun" onClick={handleIzračun}>Kredit izračun</button>
              <button className="meniBotun" onClick={handlePlaćanje}>Plaćanje kredita</button>
              <button className="meniBotun" onClick={handlePregled}>Pregled kredita</button>
            </div>
          ) : (
            <></>
          )}
          {tick === true ? (
            <div className="meniDeployPodTick">
              <button className="meniBotun" onClick={handleTick1}>
                TicTackToe v 1
              </button>
              <button className="meniBotun" onClick={handleTick2}>
                TicTackToe v 2
              </button>
              <button className="meniBotun" onClick={handleTick3}>
                TicTackToe pvp
              </button>
            </div>
          ) : (
            <></>
          )}
          {marketMeni === true ? (
            <div className="meniDeployPodMarket">
              <button className="meniBotun" onClick={handleMarket}>
                Market
              </button>
              <button className="meniBotun" onClick={handleLog}>
                Login
              </button>
            </div>
          ) : (
            <></>
          )}
          {autiMeni === true ? (
            <div className="meniDeployPodAuti">
              <button className="meniBotun" onClick={handleClick}>
                Home
              </button>
              <button className="meniBotun" onClick={handleSearch}>
                Search
              </button>
              <button className="meniBotun" onClick={handleQuery}>
                Query
              </button>
              <button className="meniBotun" onClick={handleList}>
                List
              </button>
              <button className="meniBotun" onClick={handleMotori}>
                Motori
              </button>
              <button className="meniBotun" onClick={handleDelete}>
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
          { booksMeni === true ?
          <div className="meniDeployPodKnjige">
            <button className="meniBotun" onClick={handleAdd}>Add Book</button>
            <button className="meniBotun" onClick={handleAddAuthor}>Add Author</button>
            <button className="meniBotun" onClick={handleFilter}>Filter</button>
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
