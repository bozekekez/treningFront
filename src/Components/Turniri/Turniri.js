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
    const [id, setId] = useState()
    const [selected, setSelected] = useState('karticaTurnirSelected')
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
        e.preventDefault();
        if(id && render[id.i].sudionici.length < 16){
            fetch('http://localhost:3000/turnir/sudionik', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    _id: id._id,
                    sudionik: sudionik
            })
            })
            .then(resopnse => resopnse.json())
            .then(article =>{
                if (article){
                        render[id.i].sudionici.push(sudionik)
                        setMessage(`${article} has been added`)
                        // console.log(render[id.i])
                        setSudionik('')
                    }
            })
        }
        else{
            setMessage('Odaberi turnir')
        }
    }

    const manageSelected = (_id, turnir, i) =>{
        setId({
            _id: _id,
            i: i
        })
        setMessage(`${turnir} selected`)
        setRender(render)
    }

    const handleSudionik = (e) =>{
        if(e.target.value.length < 8){
            setSudionik(e.target.value)
            setMessage()
        }
        if(e.target.value.length >= 8){
            setMessage('Ime predugo')
        }
    }

    const handleKreiraj = () =>{
        setAkcija('kreiraj')
        setMessage()
        setLoaded(false)
    }
    const handleJoin = () =>{
        setAkcija('join')
        // setMessage()
    }

    const handlePregled = () =>{
        setAkcija('pregled')
        setMessage()
        setLoaded(false)
    }

    const startTurnir = () =>{

    }

    console.log('2', id)

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
                <input value={turnir} type ="text" value={turnir} onChange={handleNoviTurnir}/>
            </form>
            : akcija === 'join' ?
            <form onSubmit={handleAdd}>
                <label>Ime sudionika</label>
                <input value={sudionik} type ="text" onChange={handleSudionik}/>
            </form>
            // : akcija === 'pregled' ?
            // <div>1</div>
            :
            <></>
            }
            <div className="turniriKartice">
            { render.map((element, i) => {
                if(!id || id._id != element._id){
                    return(
                        <div className="karticaTurnir" onClick={() =>{manageSelected(element._id, element.turnir, i)}}>
                            <h1 className="karticaTop">{element.turnir}</h1>
                            <button onClick={() =>{startTurnir(element._id)}}>Start</button>
                            <p>Sudionici:</p>
                            <div className="turnirSudionici">
                            { element.sudionici.map(member =>{
                                return <p className="sudionik">{member}</p>
                            })
                            }
                            </div>
                        </div>
                    )
                }
                if(element._id == id._id){
                    return(
                        <div className="karticaTurnirSelect" onClick={() =>{manageSelected(element._id, element.turnir, i)}}>
                            <h1 className="karticaTop">{element.turnir}</h1>
                            <button onClick={() =>{startTurnir(element._id)}}>Start</button>
                            <p>Sudionici:</p>
                            <div className="turnirSudionici">
                            { element.sudionici.map(member =>{
                                return <p className="sudionik">{member}</p>
                            })
                            }
                            </div>
                        </div>
                    )
                }
            })
            }
            </div>
        </div>
        
    )
}

export default Turnir;