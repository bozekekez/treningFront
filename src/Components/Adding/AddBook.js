import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
// import '../List/List.css'

const AddBook = () => {
    const [naziv, setNaziv] = useState();
    const [autor, setAutor] = useState();
    console.log('1')

    const handleName = (e) =>{
        setNaziv(e.target.value);
    }

    const handleAutor = (e) => {
        setAutor(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/motori', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                name: naziv,
                autor: autor,
            })
        })
        .then(resopnse => resopnse.json())
        // .then(article =>{
        //     if (article){
        //             setMessage(`${article.name} has been created`)
        //         }
        // })
    }

return(
    <div className="list">
       <form onSubmit={handleSubmit} className="forma">
        <label>Ime knjige</label>
        <input type="text" onChange={handleName}></input>
        <label>Autor</label>
        <input type="text" onChange={handleAutor}></input>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}

export default AddBook;