import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext, useImperativeHandle } from 'react';
import './Search.css'

const Search = () => {
    const [name, setName] = useState()
    const [polovno, setPolovno] = useState(true)
    const [servis, setServirs] = useState(false)
    const [cijena, setCijena] = useState()
    const [klima, setKlima] = useState(false)
    const [message, setMessage] = useState('')
    const [auto, setAuto] = useState([])
    const [senzor, setSenzor] = useState(false);
    const [kamera, setKamera] = useState(false);
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handlePolovno = () => {
        if(polovno === true){
            setPolovno(false)
        }
        if(polovno === false){
            setPolovno(true)
        }
    }

    const handleServis = () => {
        if(servis === true){
            setServirs(false)
        }
        if(servis === false){
            setServirs(true)
        }
    }

    const handleKlima = () => {
        if(klima === true){
            setKlima(false)
        }
        if(klima === false){
            setKlima(true)
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
                cijena: cijena,
                dodatno: {
                    senzor: senzor,
                    kamera: kamera
                }
			})
		}).then(resopnse => resopnse.json())
        .then(temporary => {
            setAuto(temporary)
            if(!temporary[0]) {
                setMessage('Nije pronađeno ništa po tim kriterijima')
            } if(temporary[0]) {
                setMessage('')
            }
        })
        
        // .catch(setMessage('Nije pronađeno ništa po tim kriterijima'))
    }

    console.log(auto)

    const handleCijena = (e) => {
        setCijena(e.target.value)
    }

    const render = auto.map(member =>{
        return (
            <div className="kartica">
                <h3>{member.name}</h3>
                <p>{member.cijena}</p>
            </div>
        )
    })
return(
    <div className="search">
        <div className="searchChild">
        <form onSubmit={handleSubmit} className="forma">
        <label>Pretraživanje:</label>
        <input className='inputSearch' type='text' placeholder='Search items' value={name} onChange={handleChange} ></input>
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
        <label>Cijena do:</label>
        <input className='inputSearch' type='text' placeholder='cijena do' value={cijena} onChange={handleCijena}/>
        <button onClick={handleSubmit}>submit</button>
        </form>
        </div>   
        <div className="karticeParent">
            {render}
            {message}
        </div>
    </div>
)
}
export default Search;