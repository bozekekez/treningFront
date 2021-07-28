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
  
        useEffect(() => { 
        fetch('http://localhost:3000/tick', {
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
            }
          })
        })

      const handlePrvo = (e) => {
          if(!prvo && red === true && pobjeda === false)
          {
              // setPrvo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      prvo: 'x',
                      pozeti: pozeti
                  })
              })
              .then(resopnse => resopnse.json())
      
          }
          if(!prvo && red === false && pobjeda === false)
          {
              // setPrvo('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      prvo: 'o',
                      pozeti: pozeti
                  })
              })
              .then(resopnse => resopnse.json())
          }
          
      }
      const handleDrugo = (e) => {
          if(!drugo && red === true && pobjeda === false)
          {
              // setDrugo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      drugo: 'x',
                      pozeti: pozeti
                  })
              })
              .then(resopnse => resopnse.json())
          }
          if(!drugo && red === false && pobjeda === false)
          {
              // setDrugo('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      drugo: 'o',
                      pozeti: pozeti
                  })
              })
          }
      }
      const handleTrece = (e) => {
          if(!trece && red === true && pobjeda === false)
          {   
              // setTrece('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      trece: 'x',
                      pozeti: pozeti
                  })
              })
          }
          if(!trece && red === false && pobjeda === false)
          {
              // setTrece('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      trece: 'o',
                      pozeti: pozeti
                  })
              })
          }
  
      }
      const handleCetvrto = (e) => {
          if(!cetvrto && red === true && pobjeda === false)
          {   
              // setCetvrto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      cetvrto: 'x',
                      pozeti: pozeti
                  })
              })
          }
          if(!cetvrto && red === false && pobjeda === false)
          {
              // setCetvrto('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                      cetvrto: 'o',
                      pozeti: pozeti
                  })
              })
          }
  
      }
      const handlePeto = (e) => {
          if(!peto && red === true && pobjeda === false)
          {   
              // setPeto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        peto: 'x',
                        pozeti: pozeti
                    })
                })
          }
          if(!peto && red === false && pobjeda === false)
          {
              // setPeto('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        peto: 'o',
                        pozeti: pozeti
                    })
                })
          }
      }
      const handleSesto = (e) => {
          if(!sesto && red === true && pobjeda === false)
          {   
              // setSesto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        sesto: 'x',
                        pozeti: pozeti
                    })
                })
          }
          if(!sesto && red === false && pobjeda === false)
          {
              // setSesto('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        sesto: 'o',
                        pozeti: pozeti
                    })
                })
          }
          
      }
      const handleSedmo = (e) => {
          if(!sedmo && red === true && pobjeda === false)
          {   
              //setSedmo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        sedmo: 'x',
                        pozeti: pozeti
                    })
                })
          }
          if(!sedmo && red === false && pobjeda === false)
          {
              // setSedmo('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        sedmo: 'o',
                        pozeti: pozeti
                    })
                })
          }
      }
      const handleOsmo = (e) => {
          if(!osmo && red === true && pobjeda === false)
          {   
              // setOsmo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        osmo: 'x',
                        pozeti: pozeti
                    })
                })
          }
          if(!osmo && red === false && pobjeda === false)
          {
              // setOsmo('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        osmo: 'o',
                        pozeti: pozeti
                    })
                })
          }
          
      }
      const handleDeveto = (e) => {
          if(!deveto && red === true && pobjeda === false)
          {   
              // setDeveto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        deveto: 'x',
                        pozeti: pozeti
                    })
                })
          }
          if(!deveto && red === false && pobjeda === false)
          {
              // setDeveto('o')
              setRed(true)
              setProvjera(true)
              setPotezi(pozeti + 1)
              fetch('http://localhost:3000/tick', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        deveto: 'o',
                        pozeti: pozeti
                    })
                })
          }
      }
      
      

      if(provjera === true){

          if(prvo === 'x' && drugo === 'x' && trece === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(trece === 'x' && peto === 'x' && sesto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(sedmo === 'x' && osmo === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(prvo === 'x' && cetvrto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(drugo === 'x' && peto === 'x' && osmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(trece === 'x' && sesto === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(prvo === 'x' && peto === 'x' && deveto === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(trece === 'x' && peto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          if(cetvrto === 'x' && peto === 'x' && sedmo === 'x'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Pobjeda')
          }
          // AI
          if(cetvrto === 'o' && peto === 'o' && sesto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(prvo === 'o' && drugo === 'o' && trece === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(trece === 'o' && peto === 'o' && sesto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(sedmo === 'o' && osmo === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(prvo === 'o' && cetvrto === 'o' && sedmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(drugo === 'o' && peto === 'o' && osmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(trece === 'o' && sesto === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(prvo === 'o' && peto === 'o' && deveto === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
          if(trece === 'o' && peto === 'o' && sedmo === 'o'){
              setProvjera(false)
              setPobjeda(true)
              setMessage('Poraz!')
          }
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
  
     return (
      <div className="trickParent">
          {pozeti}
          { pobjeda === true?
              <p>{message}</p>
          :
          <></>
          }
        
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
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };

  export default TickTackToe;
  