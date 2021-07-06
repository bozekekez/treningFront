import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import '../List/List.css'

const Motori = () => {
    const [naziv, setNaziv] = useState();
    const [snaga, setSnaga] = useState();

    const handleName = (e) =>{
        setNaziv(e.target.value);
    }

    const handleSnaga = (e) => {
        setSnaga(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/motori', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                name: naziv,
                snaga: snaga,
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
        <label>Proizvodac</label>
        <input type="text" onChange={handleName}></input>
        <label>Konjska snaga</label>
        <input type="text" onChange={handleSnaga}></input>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}
export default Motori;