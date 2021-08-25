import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
// import '../List/List.css'

const Sell = () => {
    const {logged} = useContext(ItemContext);
    const [ime, setIme] = useState();
    const [cijena, setCijena] = useState();
    const [message, setMessage] = useState('');
    console.log('1')

    const handleName = (e) =>{
        setIme(e.target.value);
    }

    const handleCijena = (e) => {
        setCijena(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://trening-88.herokuapp.com/market/sell', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                article: ime,
                price: cijena,
                username: logged
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.article} has been created`)
                }
        })
    }

return(
    <div className="list">
        {message}
       <form onSubmit={handleSubmit} className="forma">
        <label>Naziv porizvoda</label>
        <input type="text" onChange={handleName}></input>
        <label>Cijena</label>
        <input type="text" onChange={handleCijena}></input>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}

export default Sell;