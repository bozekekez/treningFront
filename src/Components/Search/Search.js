import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext, useImperativeHandle } from 'react';
import './Search.css'

const Search = () => {
    const [name, setName] = useState()
    const [polovno, setPolovno] = useState(false)
    const [servis, setServirs] = useState(false)
    const [cijena, setCijena] = useState()
    const [klima, setKlima] = useState(false)
    const [message, setMessage] = useState('')
    const [auto, setAuto] = useState()
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handlePolovno = () => {
        setPolovno(true)
    }

    const handleServis = () => {
        setServirs(true)
    }

    const handleKlima = () => {
        setKlima(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/search', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				polovno: polovno,
                servis: servis,
                klima: klima,
                cijena: cijena
			})
		}).then(resopnse => resopnse.json())
        .then(temporary => {
            // console.log(prazno)
            setAuto(temporary)
            console.log(auto)
        })
        .catch(setMessage('Nije pronađeno ništa po tim kriterijima'))
    }

    const handleCijena = (e) => {
        setCijena(e.target.value)
    }

return(
    <div className="search">
        <form onSubmit={handleSubmit}>
        <label>Pretraživanje:</label>
        <input className='inputSearch' type='text' placeholder='Search items' value={name} onChange={handleChange} ></input>
        <div>
            <input type="checkbox" onClick={handlePolovno}></input>
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
            <input type="checkbox"></input>
            <label>Senzor za parkiranje</label>
        </div>
        <label>Cijena do:</label>
        <input className='inputSearch' type='text' placeholder='cijena do' value={cijena} onChange={handleCijena}/>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}
export default Search;