import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div >
        <Header/>
        <Route exact={true} path="/search" render={() =>(
          <Search />
        )}/>
      </div>
    </Router>
  );
}

export default App;
