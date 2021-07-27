import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import List from './Components/List/List';
import Query from './Components/Query/Query';
import Motori from './Components/Motori/Motori';
import Home from './Components/Home/Home';
import Item from './Components/Item/Item';
import Delete from './Components/Delete/Delete';
import HeaderKnjige from './Components/Header/HeaderKnjige'
import AddBook from './Components/Adding/AddBook'
import { ItemContext } from './Components/Context/Context';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";
import { useState } from 'react';
import AddAuthor from './Components/Adding/AddAuthor';
import Filter from './Components/Filter/Filter';
import HeaderMarket from './Components/Header/HeaderMarket';
import Login from './Components/Login/Login';
import Market from './Components/Market/Market';
import Sell from './Components/Market/Sell';
import Article from './Components/Article/Article';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';
import Bank from './Components/Bank/Bank'
import Credit from './Components/Credit/Credit';
import CreditSearch from './Components/Credit/CreditSearch';
import CreditPay from './Components/Credit/CreditPay';
import Tick from './Components/Tick/Tick';

function App() {
  const [header, setHeader] = useState('auti');
  const [logged, setLogged] = useState('');
  const [isHome, setIsHome] = useState(false);
  const [basket, setBasket] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div >
      <ItemContext.Provider value={{cart, setCart, basket, setBasket, header, setHeader, logged, setLogged, isHome, setIsHome}}>
        { header === 'auti' ?
          <Header/>
        : header === 'knjige' ?
          <HeaderKnjige/>
        : header === 'market' ?
          <HeaderMarket/>
        :
          <></>
        }
        <Route exact={true} path="/search" render={() =>(
          <Search />
        )}/>
        <Route exact={true} path="/list" render={() =>(
          <List />
        )}/>
        <Route exact={true} path="/query" render={() =>(
          <Query />
        )}/>
        <Route exact={true} path="/motori" render={() =>(
          <Motori />
        )}/>
        <Route exact={true} path="/" render={() =>(
          <Home />
        )}/>
        <Route path="/item" render={() =>(
          <Item />
        )}/>
        <Route exact={true} path="/delete" render={() =>(
          <Delete />
        )}/>
        <Route exact={true} path="/books" render={() =>(
          <p>books</p>
        )}/>
        <Route exact={true} path="/books/addbook" render={() => (
          <AddBook/>
        )}/>
        <Route exact={true} path="/books/addauthor" render={() => (
          <AddAuthor/>
        )}/>
        <Route exact={true} path="/books/filter" render={() => (
          <Filter/>
        )}/>
        <Route exact={true} path="/market/login" render={() => (
          <Login/>
        )}/>
        <Route exact={true} path="/market" render={() => (
          <Market/>
        )}/>
        <Route exact={true} path="/market/sell" render={() => (
          <Sell/>
        )}/>
        <Route path="/market/article" render={() => (
          <Article/>
        )}/>
        <Route path="/profile" render={() => (
          <Profile/>
        )}/>
        <Route exact={true} path="/market/cart" render={() => (
          <Cart/>
        )}/>
        <Route exact={true} path="/banka" render={() => (
          <Bank/>
        )}/>
         <Route exact={true} path="/credit" render={() => (
          <Credit/>
        )}/>
        <Route exact={true} path="/credit/search" render={() => (
          <CreditSearch/>
        )}/>
         <Route exact={true} path="/credit/pay" render={() => (
          <CreditPay/>
        )}/>
        <Route exact={true} path="/tick" render={() => (
          <Tick/>
        )}/>
      </ItemContext.Provider>
      </div>
    </Router>
  );
}

export default App;
