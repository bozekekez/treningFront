import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Turniri.css'

const Turnir = () =>{
    const [turnir, setTurnir] = useState()
    const [message, setMessage] = useState()
    const [akcija, setAkcija] = useState()
    const [aktivni, setAktivni] = useState('aktivni')
    const [sudionik, setSudionik] = useState()
    const [loaded, setLoaded] = useState(false)
    const [render, setRender] = useState([])
    const [id, setId] = useState()
    const [start, setStart] = useState('')
    const [selected, setSelected] = useState('karticaTurnirSelected')
    let history = useHistory();

    // let url = new URLSearchParams ({
    //     user: author
    // })

    useEffect(() => {
        if(aktivni === 'aktivni'){
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
        if(aktivni === 'neaktivni'){
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

    const manageDeselect = (_id) => {
        setId()
        setMessage(`Odaberi turnir`)
        // setRender(render)
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
        if(aktivni === 'aktivni'){
            setAktivni('neaktivni')
            setMessage()
            setLoaded(false)
        }
        if(aktivni === 'neaktivni'){
            setAktivni('aktivni')
            setMessage()
            setLoaded(false)
        }
    }

    const startTurnir = (_id) =>{
        if(!start){
            setStart(_id)
        }
        if(start){
            setStart()
        }
        setRender(render)
    }
    
    
    const startRound = (sudionici, _id) =>{
        let renderIndex = render.findIndex(element => element._id === _id)
        let sudionici8 = render[renderIndex].sudionici8
        let sudionici4 = render[renderIndex].sudionici4
        let sudionici2 = render[renderIndex].sudionici2
        let sudionici1 = render[renderIndex].sudionici1
        if(sudionici8[0] === undefined && sudionici.length === 16){
            for (let index = 0; index < 8; index++) {
               if(index === 0){
                   let random = Math.floor(Math.random() * 101)
                   if(random <=50){
                       sudionici8[0] = sudionici[0]
                   }
                   if(random > 50){
                    sudionici8[0] = sudionici[1]
                   }
               }
               if(index === 1){
                let random = Math.floor(Math.random() * 101)
                if(random <=50){
                    sudionici8[1] = sudionici[2]
                }
                if(random > 50){
                    sudionici8[1] = sudionici[3]
                }
               }
                if(index === 2){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[2] = sudionici[4]
                    }
                    if(random > 50){
                     sudionici8[2] = sudionici[5]
                    }
                }
                if(index === 3){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[3] = sudionici[6]
                    }
                    if(random > 50){
                     sudionici8[3] = sudionici[7]
                    }
                }
                if(index === 4){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[4] = sudionici[8]
                    }
                    if(random > 50){
                     sudionici8[4] = sudionici[9]
                    }
                }
                if(index === 5){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[5] = sudionici[10]
                    }
                    if(random > 50){
                     sudionici8[5] = sudionici[11]
                    }
                }
                if(index === 6){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[6] = sudionici[12]
                    }
                    if(random > 50){
                     sudionici8[6] = sudionici[13]
                    }
                }
                if(index === 7){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici8[7] = sudionici[14]
                    }
                    if(random > 50){
                     sudionici8[7] = sudionici[15]
                    }
                }
            }
            let renderIndex = render.findIndex(element => element._id === _id)
            setRender(() => render[renderIndex].sudionici8 = sudionici8)
    
            fetch('http://localhost:3000/turnir/sudionici8', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        _id: _id,
                        sudionici8: sudionici8
                })
                })
                .then(resopnse => resopnse.json())
                .then(article =>{
                    if (article){
                        //render[renderIndex].sudionici8 = sudionici8
                            setMessage(`${article.turnir} runda 16 odigrana`)
                            // setRender(() => render[renderIndex].sudionici8 = sudionici8)
                        }
                })
                console.log('ren', renderIndex, render)
        }

        else if(sudionici8[0] && sudionici4[0] === undefined){
            for (let index = 0; index < 4; index++) {
               if(index === 0){
                   let random = Math.floor(Math.random() * 101)
                   if(random <=50){
                       sudionici4[0] = sudionici8[0]
                   }
                   if(random > 50){
                    sudionici4[0] = sudionici8[1]
                   }
               }
               if(index === 1){
                let random = Math.floor(Math.random() * 101)
                if(random <=50){
                    sudionici4[1] = sudionici8[2]
                }
                if(random > 50){
                    sudionici4[1] = sudionici8[3]
                }
               }
                if(index === 2){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici4[2] = sudionici8[4]
                    }
                    if(random > 50){
                     sudionici4[2] = sudionici8[5]
                    }
                }
                if(index === 3){
                    let random = Math.floor(Math.random() * 101)
                    if(random <=50){
                        sudionici4[3] = sudionici8[6]
                    }
                    if(random > 50){
                     sudionici4[3] = sudionici8[7]
                    }
                }
            }
            let renderIndex = render.findIndex(element => element._id === _id)
            setRender(() => render[renderIndex].sudionici4 = sudionici4)
    
            fetch('http://localhost:3000/turnir/sudionici4', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        _id: _id,
                        sudionici4: sudionici4
                })
                })
                .then(resopnse => resopnse.json())
                .then(article =>{
                    if (article){
                        
                            setMessage(`${article.turnir} runda 8 odigrana`)
                            // // console.log(render[id.i])
                            // setSudionik('')
                        }
                })
                console.log('ren', renderIndex, render)
        }

        else if(sudionici4[0] && sudionici2[0] === undefined){
            for (let index = 0; index < 4; index++) {
               if(index === 0){
                   let random = Math.floor(Math.random() * 101)
                   if(random <=50){
                       sudionici2[0] = sudionici4[0]
                   }
                   if(random > 50){
                    sudionici2[0] = sudionici4[1]
                   }
               }
               if(index === 1){
                let random = Math.floor(Math.random() * 101)
                if(random <=50){
                    sudionici2[1] = sudionici4[2]
                }
                if(random > 50){
                    sudionici2[1] = sudionici4[3]
                }
               }
            }
            let renderIndex = render.findIndex(element => element._id === _id)
            setRender(() => render[renderIndex].sudionici2 = sudionici2)
    
            fetch('http://localhost:3000/turnir/sudionici2', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        _id: _id,
                        sudionici2: sudionici2
                })
                })
                .then(resopnse => resopnse.json())
                .then(article =>{
                    if (article){
                        // render[renderIndex].sudionici2 = sudionici2
                            setMessage(`${article.turnir} runda 4 odigrana`)
                            // // console.log(render[id.i])
                            // setSudionik('')
                        }
                })
        }
        else if(sudionici2[0] && sudionici1[0] === undefined){
            for (let index = 0; index < 4; index++) {
               if(index === 0){
                   let random = Math.floor(Math.random() * 101)
                   if(random <=50){
                       sudionici1[0] = sudionici2[0]
                   }
                   if(random > 50){
                    sudionici1[0] = sudionici2[1]
                   }
               }
            }
            let renderIndex = render.findIndex(element => element._id === _id)
            setRender(() => render[renderIndex].sudionici1 = sudionici1)
    
            fetch('http://localhost:3000/turnir/sudionici1', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        _id: _id,
                        sudionici1: sudionici1
                })
                })
                .then(resopnse => resopnse.json())
                .then(article =>{
                    if (article){
                        // render[renderIndex].sudionici1 = sudionici1
                            setMessage(`${article.turnir} finale odigrano`)
                            // // console.log(render[id.i])
                            // setSudionik('')
                        }
                })
        }

        if(sudionici.length < 17){
            setMessage('Nije prijavljeno dovoljno sudionika')
        }
        console.log('8', sudionici8)
        console.log('4', sudionici4)
        console.log('2', sudionici2)
        console.log('1', sudionici1)
        setRender(render)
    }

    const handleEnd = (_id) => {
        let renderIndex = render.findIndex(element => element._id === _id)
        if(render[renderIndex].sudionici1[0]){
            fetch('http://localhost:3000/turnir/end', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        _id: _id,
                })
                })
                .then(resopnse => resopnse.json())
                .then(article =>{
                    if (article){
                        // render[renderIndex].sudionici1 = sudionici1
                            setMessage(`${article.turnir} has ended`)
                            // // console.log(render[id.i])
                            // setSudionik('')
                        }
                })
        }
        else{
            setMessage('Turnir nije odigran do kraja')
        }
    }

    console.log('1', id)
    console.log('2', start, typeof(start))
    console.log('3', render)

    return(
        <div className="turniriParent">
            <div>
            <button onClick={handleKreiraj}>Kreiraj turnir</button>
            <button onClick={handleJoin}>Pridruži se turniru</button>
            { aktivni === 'aktivni' ?
                <button onClick={handlePregled}>Pregled završenih turnira</button>
            :
                <button onClick={handlePregled}>Pregled aktivnih turnira</button>
            }
            </div>
            { message ?
            <p>{message}</p>    
            :
            <p>Turniri</p>
            }
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
            <form className="hiddenForm">
                <label></label>
                <input />
            </form>
            }
            <div className="turniriKartice">
            { render.map((element, i) => {
                if(element._id === start){
                    return(
                        <div className="karticaTurnir" >
                            <h1 className="karticaTop">{element.turnir}</h1>
                            <div>
                            <button onClick={() =>{startRound(element.sudionici, element._id)}}>Startaj rundu</button>
                            <button onClick={() =>{startTurnir(element._id)}}>Povratak</button>
                            <button onClick={() =>{handleEnd(element._id)}}>Završi turnir</button>
                            </div>
                            <div className="bracket">
                            <div className="round16">
                                { element.sudionici.map(item => {
                                    if(element.sudionici8.includes(item)){
                                        return <p className="sudionikRoundWin">{item}</p>
                                    }
                                    else{
                                        return <p className="sudionikRound">{item}</p>
                                    }
                                })
                                }
                            </div>
                            <div className="round8">
                                { element.sudionici8.map(item => {
                                    if(element.sudionici4.includes(item)){
                                        return <p className="sudionikRound8Win">{item}</p>
                                    }
                                    else{
                                        return <p className="sudionikRound8">{item}</p>
                                    }
                                })
                                }
                            </div>
                            <div className="round4">
                                { element.sudionici4.map(item => {
                                    if(element.sudionici2.includes(item)){
                                        return <p className="sudionikRound4Win">{item}</p>
                                    }
                                    else{
                                        return <p className="sudionikRound4">{item}</p>
                                    }
                                })
                                }
                            </div>
                            <div className="round2">
                                { element.sudionici2.map(item => {
                                    if(element.sudionici1.includes(item)){
                                        return <p className="sudionikRound2Win">{item}</p>
                                    }
                                    else{
                                        return <p className="sudionikRound2">{item}</p>
                                    }
                                })
                                }
                            </div>
                            <div className="round1">
                                { element.sudionici1[0] ?
                                <p className="sudionikRound1Win">{element.sudionici1[0]}</p>
                                :
                                <p className="sudionikRound1"></p>
                                }
                            </div>
                            </div>
                        </div>
                    )
                }
                if(!id || id._id != element._id){
                    return(
                        <div className="karticaTurnir" >
                            <h1 className="karticaTop">{element.turnir}</h1>
                            <div className="selectContainer">
                            <button className="select" onClick={() =>{manageSelected(element._id, element.turnir, i)}}></button>
                            </div>
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
                        <div className="karticaTurnirSelect" >
                            <h1 className="karticaTop">{element.turnir}</h1>
                            <div className="selectContainer">
                            <button className="selected" onClick={() =>{manageDeselect(element._id)}}></button>
                            </div>
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