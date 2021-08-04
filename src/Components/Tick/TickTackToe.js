import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
  } from "react-router-dom";
  import React, { useEffect, useState } from "react";
  import "./Tick.css";
  
  const TickTackToe = () => {
      const [prvo, setPrvo] = useState()
      const [drugo, setDrugo] = useState()
      const [trece, setTrece] = useState()
      const [cetvrto, setCetvrto] = useState()
      const [peto, setPeto] = useState()
      const [sesto, setSesto] = useState()
      const [sedmo, setSedmo] = useState()
      const [osmo, setOsmo] = useState()
      const [deveto, setDeveto] = useState()
      const [red, setRed] = useState(true)
      const [message, setMessage] = useState()
      const [provjera, setProvjera] = useState(false);
      const [pobjeda, setPobjeda] = useState(false)
      const [pozeti, setPotezi] = useState(0)
      const [gameId, setGameIf] = useState()  
      const [player, setPlayer] = useState()
      const [games, setGames] = useState([])
      let url;
        // useEffect(() => { 
        // fetch('http://localhost:3000/tick', {
        // method: 'get',
        // headers: {'Content-Type': 'application/json'}
        // }).then(resopnse => resopnse.json())
        // .then(temporary => {
        //     console.log('oe', temporary)
        //     if(pozeti > 0){
        //     setPrvo(temporary.prvo)
        //     setDrugo(temporary.drugo)
        //     setTrece(temporary.trece)
        //     setCetvrto(temporary.cetvrto)
        //     setPeto(temporary.peto)
        //     setSesto(temporary.sesto)
        //     setSedmo(temporary.sedmo)
        //     setOsmo(temporary.osmo)
        //     setDeveto(temporary.deveto)
        //     }
        //   })
        // })

        console.log('game id', gameId, red)

        useEffect(() => {
            const interval = setInterval(() => {
               if(gameId !== undefined){
                console.log('game id', gameId)
                   console.log('oe svake sekunde')
                url = new URLSearchParams({ _id: gameId });
                fetch('http://10.13.246.226:3000/tick?' + url, {
                method: 'get',
                headers: {'Content-Type': 'application/json'}
                }).then(resopnse => resopnse.json())
                .then(temporary => {
                console.log('oe me', temporary)
                setPrvo(temporary.prvo)
                setDrugo(temporary.drugo)
                setTrece(temporary.trece)
                setCetvrto(temporary.cetvrto)
                setPeto(temporary.peto)
                setSesto(temporary.sesto)
                setSedmo(temporary.sedmo)
                setOsmo(temporary.osmo)
                setDeveto(temporary.deveto)
                setRed(temporary.red)
                })
            }
            }, 2000);
            return () => clearInterval(interval);
          }, [gameId]);

      const handlePrvo = (e) => {
          if(!prvo && red === true && pobjeda === false && player === 1) 
          {
              // setPrvo('x')
            //   setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                        _id: gameId,
                      prvo: 'x',
                      pozeti: pozeti,
                      red: false
                  })
              })
              .then(resopnse => resopnse.json())
      
          }
          if(!prvo && red === false && pobjeda === false && player === 2)
          {
              // setPrvo('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      prvo: 'o',
                      pozeti: pozeti,
                      red: true
                  })
              })
              .then(resopnse => resopnse.json())
          }
          
      }
      const handleDrugo = (e) => {
          if(!drugo && red === true && pobjeda === false && player === 1)
          {
              // setDrugo('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      drugo: 'x',
                      pozeti: pozeti,
                      red: false
                  })
              })
              .then(resopnse => resopnse.json())
          }
          if(!drugo && red === false && pobjeda === false && player === 2) 
          {
              // setDrugo('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      drugo: 'o',
                      pozeti: pozeti,
                      red: true
                  })
              })
          }
      }
      const handleTrece = (e) => {
          if(!trece && red === true && pobjeda === false && player === 1)
          {   
              // setTrece('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      trece: 'x',
                      pozeti: pozeti,
                      red: false
                  })
              })
          }
          if(!trece && red === false && pobjeda === false && player === 2)
          {
              // setTrece('o')
              //setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      trece: 'o',
                      pozeti: pozeti,
                      red: true
                  })
              })
          }
  
      }
      const handleCetvrto = (e) => {
          if(!cetvrto && red === true && pobjeda === false && player === 1)
          {   
              // setCetvrto('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      cetvrto: 'x',
                      pozeti: pozeti,
                      red: false
                  })
              })
          }
          if(!cetvrto && red === false && pobjeda === false && player === 2)
          {
              // setCetvrto('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                _id: gameId,
                      cetvrto: 'o',
                      pozeti: pozeti,
                      red: true
                  })
              })
          }
  
      }
      const handlePeto = (e) => {
          if(!peto && red === true && pobjeda === false && player === 1)
          {   
              // setPeto('x')
              //setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        peto: 'x',
                        pozeti: pozeti,
                        red: false
                    })
                })
          }
          if(!peto && red === false && pobjeda === false && player === 2)
          {
              // setPeto('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        peto: 'o',
                        pozeti: pozeti,
                        red: true
                    })
                })
          }
      }
      const handleSesto = (e) => {
          if(!sesto && red === true && pobjeda === false && player === 1)
          {   
              // setSesto('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        sesto: 'x',
                        pozeti: pozeti,
                        red: false
                    })
                })
          }
          if(!sesto && red === false && pobjeda === false && player === 2)
          {
              // setSesto('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        sesto: 'o',
                        pozeti: pozeti,
                        red: true
                    })
                })
          }
          
      }
      const handleSedmo = (e) => {
          if(!sedmo && red === true && pobjeda === false && player === 1)
          {   
              //setSedmo('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        sedmo: 'x',
                        pozeti: pozeti,
                        red: false
                    })
                })
          }
          if(!sedmo && red === false && pobjeda === false && player === 2)
          {
              // setSedmo('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        sedmo: 'o',
                        pozeti: pozeti,
                        red: true
                    })
                })
          }
      }
      const handleOsmo = (e) => {
          if(!osmo && red === true && pobjeda === false && player === 1)
          {   
              // setOsmo('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        osmo: 'x',
                        pozeti: pozeti,
                        red: false
                    })
                })
          }
          if(!osmo && red === false && pobjeda === false && player === 2)
          {
              // setOsmo('o')
             // setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        osmo: 'o',
                        pozeti: pozeti,
                        red: true
                    })
                })
          }
          
      }
      const handleDeveto = (e) => {
          if(!deveto && red === true && pobjeda === false && player === 1)
          {   
              // setDeveto('x')
             // setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        deveto: 'x',
                        pozeti: pozeti,
                        red: false
                    })
                })
          }
          if(!deveto && red === false && pobjeda === false && player === 2)
          {
              // setDeveto('o')
            //  setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://10.13.246.226:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    _id: gameId,
                        deveto: 'o',
                        pozeti: pozeti,
                        red: true
                    })
                })
          }
      }
      
      const handleCreate = () => {
            fetch('http://10.13.246.226:3000/tick', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    active: true,
                })
                 })
                .then(resopnse => resopnse.json())
                .then(temporary => {
                    setGameIf(temporary._id)
                    setMessage(`${temporary._id} has been created `)
                    })
                    setPrvo()
                    setDrugo()
                    setTrece()
                    setCetvrto()
                    setPeto()
                    setSesto()
                    setSedmo()
                    setOsmo()
                    setDeveto()
                    setRed(true)
                    setPobjeda(false)
                    setPotezi(0)
           
      }

      if(provjera === true){
            url = new URLSearchParams({ _id: gameId });
            console.log('ovdje', url)
            fetch('http://10.13.246.226:3000/tick?' + url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                console.log('oe', temporary)
                if(pozeti > 0 && temporary !== null){
                setPrvo(temporary.prvo)
                setDrugo(temporary.drugo)
                setTrece(temporary.trece)
                setCetvrto(temporary.cetvrto)
                setPeto(temporary.peto)
                setSesto(temporary.sesto)
                setSedmo(temporary.sedmo)
                setOsmo(temporary.osmo)
                setDeveto(temporary.deveto)
                setRed(temporary.red)
                }
              })
          if(prvo === 'x' && drugo === 'x' && trece === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(trece === 'x' && peto === 'x' && sesto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(sedmo === 'x' && osmo === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(prvo === 'x' && cetvrto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(drugo === 'x' && peto === 'x' && osmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(trece === 'x' && sesto === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(prvo === 'x' && peto === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(trece === 'x' && peto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          if(cetvrto === 'x' && peto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda x')
          }
          // AI
          if(cetvrto === 'o' && peto === 'o' && sesto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(prvo === 'o' && drugo === 'o' && trece === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(trece === 'o' && peto === 'o' && sesto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(sedmo === 'o' && osmo === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(prvo === 'o' && cetvrto === 'o' && sedmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(drugo === 'o' && peto === 'o' && osmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(trece === 'o' && sesto === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(prvo === 'o' && peto === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
          if(trece === 'o' && peto === 'o' && sedmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda o')
          }
      }
  
      if(pobjeda === true){
            fetch('http://10.13.246.226:3000/tick', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    _id: gameId,
                    active: false
                })
            })
      }

      console.log(prvo, red)
  
      const handleReset = () => {
          setPrvo()
          setDrugo()
          setTrece()
          setCetvrto()
          setPeto()
          setSesto()
          setSedmo()
          setOsmo()
          setDeveto()
          setRed(true)
          setPobjeda(false)
          setPotezi(0)
      }
  
      const handlePlayer1 = () =>{
          setPlayer(1)
      }

      
      const handlePlayer2 = () =>{
        setPlayer(2)
      }
        const  getGames = () =>{
                fetch('http://10.13.246.226:3000/tick/games', {
                method: 'get',
                headers: {'Content-Type': 'application/json'}
                }).then(resopnse => resopnse.json())
                .then(temporary => {
                    console.log('1', temporary)
                    setGames(temporary)
                    console.log(games)
                })

            // fetch('http://10.13.246.226:3000/tick?' + url, {
            // method: 'get',
            // headers: {'Content-Type': 'application/json'}
            // }).then(resopnse => resopnse.json())
            // .then(temporary => {
            //     console.log('oe', temporary)
            //     if(pozeti > 0){
            //     setPrvo(temporary.prvo)
            //     setDrugo(temporary.drugo)
            //     setTrece(temporary.trece)
            //     setCetvrto(temporary.cetvrto)
            //     setPeto(temporary.peto)
            //     setSesto(temporary.sesto)
            //     setSedmo(temporary.sedmo)
            //     setOsmo(temporary.osmo)
            //     setDeveto(temporary.deveto)
            //     }
            //   })
        }
        const handleGame = (e) =>{
            setGameIf(e.target.value)
            if(e.target.value.length > 1){
                url = new URLSearchParams({ _id: e.target.value });
            console.log('ovdje', url)
            fetch('http://10.13.246.226:3000/tick?' + url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                console.log('oe', temporary)
                if(pozeti > 0){
                setPrvo(temporary.prvo)
                setDrugo(temporary.drugo)
                setTrece(temporary.trece)
                setCetvrto(temporary.cetvrto)
                setPeto(temporary.peto)
                setSesto(temporary.sesto)
                setSedmo(temporary.sedmo)
                setOsmo(temporary.osmo)
                setDeveto(temporary.deveto)
                setRed(temporary.red)
                }
              })
            }
            
        }

        const handleClear = () =>{
            setGameIf();
            setPrvo()
          setDrugo()
          setTrece()
          setCetvrto()
          setPeto()
          setSesto()
          setSedmo()
          setOsmo()
          setDeveto()
          setRed(true)
          setPobjeda(false)
          setPotezi(0)
            fetch('http://10.13.246.226:3000/tick/', {
                method: 'delete',
                headers: {'Content-Type': 'application/json'}
                }).then(resopnse => resopnse.json())
                .then(temporary => {
                    setMessage('Database was cleared')
                })
        }
      let render;

      render = games.map((member) => {
        return(
            <option value={member._id}>{member._id}</option>
        )
        })

      
     return (
      <div className="trickParent">
          <div className="komande">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClear}>Clear db</button>
            <button onClick={handleCreate}>Create game</button>
            <label>Join game:</label>
            <select name="igre" id="gre" onChange={handleGame} onClick={getGames}>
            {render}
             </select>
            <button onClick={handlePlayer1}>Player 1</button>
            <button onClick={handlePlayer2}>Player 2</button>
          <label>Potezi: {pozeti}</label>
          {red}
          { pobjeda === true?
              <p>{message}</p>
          :
          <div></div>
          }
          <label>Game: {gameId}</label>
          <label>Player: {player}</label>
        </div>
        <div className="tick">
          <button className="tick1" onClick={handlePrvo}>{prvo}</button>
          <button className="tick2" onClick={handleDrugo}>{drugo}</button>
          <button className="tick3" onClick={handleTrece}>{trece}</button>
        </div>
        <div className="tickdva">
          <button className="tick4" onClick={handleCetvrto}>{cetvrto}</button>
          <button className="tick5" onClick={handlePeto}>{peto}</button>
          <button className="tick6" onClick={handleSesto}>{sesto}</button>
          </div>
          <div className="ticktri">
            <button className="tick7" onClick={handleSedmo}>{sedmo}</button>
            <button className="tick8" onClick={handleOsmo}>{osmo}</button>
            <button className="tick9" onClick={handleDeveto}>{deveto}</button>
          </div>
        
      </div>
    );
  };

  export default TickTackToe;
  