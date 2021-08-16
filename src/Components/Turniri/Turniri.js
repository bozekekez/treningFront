import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Turniri.css'

const Turnir = () =>{
    const [turnir, setTurnir] = useState()
    const [message, setMessage] = useState()
    const [akcija, setAkcija] = useState()
    const [sudionik, setSudionik] = useState()
    const [loaded, setLoaded] = useState(false)
    const [render, setRender] = useState([])
    let history = useHistory();

    // let url = new URLSearchParams ({
    //     user: author
    // })

    useEffect(() => {
        if(akcija !== 'pregled'){
            fetch('http://localhost:3000/turnir', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setRender(temporary)
                    setLoaded(true)   
            })
        }
        if(akcija === 'pregled'){
            fetch('http://localhost:3000/turnir/neaktivni', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setRender(temporary)
                    setLoaded(true)   
            })
        }    
    }, [loaded]);

    const handleNoviTurnir = (e) =>{
        setTurnir(e.target.value)
    }

    console.log(turnir)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/turnir', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                turnir: turnir
        })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.turnir} has been created`)
                    // history.go(0)
                    setRender(render => [...render, article])
                    setTurnir('')
                }
        })
        
    }
    
    const handleAdd = (e) =>{
        fetch('http://localhost:3000/turnir', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                sudionik: sudionik
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.name} has been listed`)
                }
        })
        })
    }

    const handleSudionik = (e) =>{
        setSudionik(e.target.value)
    }

    const handleKreiraj = () =>{
        setAkcija('kreiraj')
        setMessage()
        setLoaded(false)
    }
    const handleJoin = () =>{
        setAkcija('join')
        setMessage()
    }

    const handlePregled = () =>{
        setAkcija('pregled')
        setMessage()
        setLoaded(false)
    }

    console.log(render)

    return(
        <div className="turniriParent">
            <div>
            <button onClick={handleKreiraj}>Kreiraj turnir</button>
            <button onClick={handleJoin}>Pridruži se turniru</button>
            <button onClick={handlePregled}>Pregled završenih turnira</button>
            </div>
            {message}
            { akcija === 'kreiraj'?
            <form onSubmit={handleSubmit}>
                <label>Ime turnira</label>
                <input type ="text" value={turnir} onChange={handleNoviTurnir}/>
            </form>
            : akcija === 'join' ?
            <form onSubmit={handleAdd}>
                <label>Ime sudionika</label>
                <input type ="text" onChange={handleSudionik}/>
            </form>
            // : akcija === 'pregled' ?
            // <div>1</div>
            :
            <></>
            }
            <div className="turniriKartice">
            { render.map(element => {
                return(
                <div>
                    <h1>{element.turnir}</h1>
                </div>
                )
            })
            }
            </div>
        </div>
        
    )
}

export default Turnir;