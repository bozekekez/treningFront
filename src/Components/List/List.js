import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './List.css'

const List = () => {
    const [naziv, setNaziv] = useState();
    const [cijena, setCijena] = useState();
    const [polovno, setPolovno] = useState(true);
    const [servis, setServis] = useState(false);
    const [klima, setKlima] = useState(false);
    const [message, setMessage] = useState();
    const [senzor, setSenzor] = useState(false);
    const [kamera, setKamera] = useState(false);

    const handleName = (e) =>{
        setNaziv(e.target.value);
    }

    const handleCijena = (e) => {
        setCijena(e.target.value);
    }

    const handlePolovno = (e) =>{
        if(polovno === true){
            setPolovno(false);
        }
        if(polovno === false){
            setPolovno(true);
        }
    }

    const handleServis= (e) =>{
        if(servis === true){
            setServis(false);
        }
        if(servis === false){
            setServis(true);
        }
    }

    const handleKlima= (e) =>{
        if(klima === true){
            setKlima(false);
        }
        if(klima === false){
            setKlima(true);
        }
    }

    const handleSenzor = () =>{
        if(senzor === true){
            setSenzor(false)
        }
        if(senzor === false){
            setSenzor(true)
        }
    }

    const handleKamera = () => {
        if(kamera === true){
            setKamera(false)
        }
        if(kamera === false){
            setKamera(true)
        }
    }

    console.log(senzor)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(naziv);

        fetch('http://localhost:3000/list', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                name: naziv,
                cijena: cijena,
                polovno: polovno,
                servis: servis,
                klima: klima,
                dodatno:{
                    senzor: senzor,
                    kamera: kamera
                }
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.name} has been listed`)
                }
        })
    }

return(
    <div className="list">
       <form onSubmit={handleSubmit} className="forma">
        <label>Naziv</label>
        <input type="text" onChange={handleName}></input>
        <label>Cijena</label>
        <input type="text" onChange={handleCijena}></input>
        <div>
            <input type="checkbox" defaultChecked={polovno} onClick={handlePolovno}></input>
            <label>Polovno</label>
        </div>
        <div>
            <input type="checkbox" onClick={handleServis}></input>
            <label>Servisna knjizica</label>
        </div>
        <div>
            <input type="checkbox" onClick={handleKlima}></input>
            <label>Klima</label>
        </div>
        <div>
            <input type="checkbox" onClick={handleSenzor}></input>
            <label>Senzor</label>
        </div>
        <div>
            <input type="checkbox" onClick={handleKamera}></input>
            <label>Kamera</label>
        </div>
        <button onClick={handleSubmit}>submit</button>
        </form>
        {message}
    </div>
)
}
export default List;