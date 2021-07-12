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

function App() {
  const [header, setHeader] = useState('auti');
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div >
      <ItemContext.Provider value={{header, setHeader}}>
        { header === 'auti' ?
          <Header/>
        : header === 'knjige' ?
          <HeaderKnjige/>
        :
          <Header/>
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
      </ItemContext.Provider>
      </div>
    </Router>
  );
}

export default App;
