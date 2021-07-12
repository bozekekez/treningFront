import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
// import '../List/List.css'

const AddAuthor = () => {
    const [ime, setIme] = useState();
    const [lokacija, setLokacija] = useState();
    const [message, setMessage] = useState('');
    console.log('1')

    const handleName = (e) =>{
        setIme(e.target.value);
    }

    const handleAutor = (e) => {
        setLokacija(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/author', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                name: ime,
                location: lokacija,
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.name} has been created`)
                }
        })
    }

return(
    <div className="list">
        {message}
       <form onSubmit={handleSubmit} className="forma">
        <label>Ime autora</label>
        <input type="text" onChange={handleName}></input>
        <label>Lokacija</label>
        <input type="text" onChange={handleAutor}></input>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}

export default AddAuthor;