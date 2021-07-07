import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import List from './Components/List/List';
import Query from './Components/Query/Query';
import Motori from './Components/Motori/Motori';
import Home from './Components/Home/Home';
import Item from './Components/Item/Item';

import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div >
        <Header/>
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
        
      </div>
    </Router>
  );
}

export default App;
