import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
  } from "react-router-dom";
  import React, { useState } from "react";
  import "./Tick.css";
  
  const TickTack = () => {
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
      const [tezina, setTezina] = useState()
  
      const handlePrvo = (e) => {
          if(!prvo && red === true && pobjeda === false)
          {
              setPrvo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
          
      }
      const handleDrugo = (e) => {
          if(!drugo && red === true && pobjeda === false)
          {
              setDrugo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
          
      }
      const handleTrece = (e) => {
          if(!trece && red === true && pobjeda === false)
          {   
              setTrece('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
  
      }
      const handleCetvrto = (e) => {
          if(!cetvrto && red === true && pobjeda === false)
          {   
              setCetvrto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
  
      }
      const handlePeto = (e) => {
          if(!peto && red === true && pobjeda === false)
          {   
              setPeto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
         
      }
      const handleSesto = (e) => {
          if(!sesto && red === true && pobjeda === false)
          {   
              setSesto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
         
          
      }
      const handleSedmo = (e) => {
          if(!sedmo && red === true && pobjeda === false)
          {   
              setSedmo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
          
      }
      const handleOsmo = (e) => {
          if(!osmo && red === true && pobjeda === false)
          {   
              setOsmo('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
          
      }
      const handleDeveto = (e) => {
          if(!deveto && red === true && pobjeda === false)
          {   
              setDeveto('x')
              setRed(false)
              setProvjera(true)
              setPotezi(pozeti + 1)
          }
      }
      
      
  
      const ai = () => { 
          console.log('eo me')
          console.log(prvo)
          if(pobjeda === false){
             //pobjeda
            if(prvo === 'o' && sedmo === 'o' && cetvrto !== 'x'){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(drugo === 'o' && osmo === 'o' && peto !== 'x'){
                if(!peto){
                    return(
                    setPeto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(trece === 'o' && deveto === 'o' && sedmo !== 'x'){
                if(!sedmo){
                    return(
                    setSedmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'o' && trece === 'o' && drugo !== 'x'){
                if(!drugo){
                    return(
                    setDrugo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(cetvrto === 'o' && sesto === 'o' && peto !== 'x'){
                if(!peto){
                    return(
                    setPeto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(sedmo === 'o' && deveto === 'o' && osmo !== 'x'){
                if(!osmo){
                    return(
                    setOsmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(cetvrto === 'o' && peto === 'o' && sesto !== 'x'){
                if(!sesto){
                    return(
                    setSesto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(osmo === 'o' && peto === 'o' && drugo !== 'x'){
                if(!drugo){
                    return(
                    setDrugo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(drugo === 'o' && peto === 'o' && osmo !== 'x'){
                if(!osmo){
                    return(
                    setOsmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(sesto === 'o' && peto === 'o' && cetvrto !== 'x'){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'o' && peto === 'o' && deveto !== 'x'){
                if(!deveto){
                    return(
                    setDeveto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(sesto === 'o' && peto === 'o' && cetvrto !== 'x'){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(cetvrto === 'o' && peto === 'o' && sesto !== 'x'){
                if(!sesto){
                    return(
                    setSesto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            } 
            // blok
            if (prvo === 'x' && trece === 'x' && drugo !== 'o'){
                if(!drugo){
                    return(
                    setDrugo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (cetvrto === 'x' && sesto === 'x' && peto !== 'o'){
                if(!peto){
                    return(
                    setPeto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (sedmo === 'x' && deveto === 'x' && osmo !== 'o'){
                if(!osmo){
                    return(
                    setOsmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (trece === 'x' && deveto === 'x' && sesto !== 'o'){
                if(!sesto){
                    return(
                    setSesto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (cetvrto === 'x' && peto === 'x' && sesto !== 'o'){
                if(!sesto){
                    return(
                    setSesto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (sesto === 'x' && peto === 'x' && cetvrto !== 'o'){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (peto === 'x' && trece === 'x' && sedmo !== 'o'){
                if(!sedmo){
                    return(
                    setSedmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (peto === 'x' && sedmo === 'x' && trece !== 'o'){
                if(!trece){
                    return(
                    setTrece('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (peto === 'x' && deveto === 'x' && prvo !== 'o'){
                if(!prvo){
                    return(
                    setPrvo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (peto === 'x' && prvo === 'x' && deveto !== 'o'){
                if(!deveto){
                    return(
                    setDeveto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if (cetvrto === 'x' && peto === 'x' && sesto !== 'o'){
                if(!sesto){
                    return(
                    setSesto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'x' && sedmo === 'x' ){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(osmo === 'x' && peto === 'x' && !drugo){
                if(!drugo){
                    return(
                    setDrugo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(drugo === 'x' && peto === 'x' && !osmo){
                if(!osmo){
                    return(
                    setOsmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(deveto === 'x' && osmo === 'x' && !sedmo){
                if(!sedmo){
                    return(
                    setSedmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(sedmo === 'x' && osmo === 'x' && !deveto){
                console.log('9')
                if(!deveto){
                    return(
                    setDeveto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'x' && drugo === 'x' && !trece){
                if(!trece){
                    return(
                    setTrece('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'x' && peto === 'x' && !deveto){
                if(!deveto){
                    return(
                    setDeveto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(deveto === 'x' && sesto === 'x' && !trece){
                if(!trece){
                    return(
                    setTrece('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'x' && sedmo === 'x' && !cetvrto){
                if(!cetvrto){
                    return(
                    setCetvrto('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(sedmo === 'x' && cetvrto === 'x' && !prvo){
                if(!prvo){
                    return(
                    setPrvo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            if(prvo === 'x' && cetvrto === 'x' && !sedmo){
                if(!sedmo){
                    return(
                    setSedmo('o'),
                    setRed(true),
                    setProvjera(true)
                )
                }
            }
            
            //potezi
            if(pozeti === 1){
                if(!peto){
                    return(
                        setPeto('o'),
                        setRed(true),
                        setProvjera(true)
                    )
                }
                if(peto === 'x'){
                    let store = Math.floor(Math.random() * 100)
                    console.log(store)
                    if(store <= 25){
                     if(!prvo){
                      return(
                      setPrvo('o'),
                      setRed(true),
                      setProvjera(true)
                  )
                  }
                    }
                    if(store > 25 && store <= 50){
                  if(!trece){
                      return(
                      setTrece('o'),
                      setRed(true),
                      setProvjera(true)
                  )
                  }
                    }
                    if(store >50 && store <=75){
                  if(!sedmo){
                      return(
                      setSedmo('o'),
                      setRed(true),
                      setProvjera(true)
                  )
                  }

                    }
                    if(store >75){
                  if(!deveto){
                      return(
                      setDeveto('o'),
                      setRed(true),
                      setProvjera(true)
                  )
                      }
                    }
                }

          if (prvo === 'x' && trece === 'x' && drugo !== 'o'){
              if(!drugo){
                  return(
                  setDrugo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (trece === 'x' && sesto === 'x' && deveto !== 'o'){
            if(!deveto){
                return(
                setDeveto('o'),
                setRed(true),
                setProvjera(true)
            )
            }
        }
          if (cetvrto === 'x' && sesto === 'x' && peto !== 'o'){
              if(!peto){
                  return(
                  setPeto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (sedmo === 'x' && deveto === 'x' && osmo !== 'o'){
              if(!osmo){
                  return(
                  setOsmo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (trece === 'x' && deveto === 'x' && sesto !== 'o'){
              if(!sesto){
                  return(
                  setSesto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (cetvrto === 'x' && peto === 'x' && sesto !== 'o'){
              if(!sesto){
                  return(
                  setSesto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (sesto === 'x' && peto === 'x' && cetvrto !== 'o'){
              if(!cetvrto){
                  return(
                  setCetvrto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (peto === 'x' && trece === 'x' && sedmo !== 'o'){
              if(!sedmo){
                  return(
                  setSedmo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (peto === 'x' && sedmo === 'x' && trece !== 'o'){
              if(!trece){
                  return(
                  setTrece('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (peto === 'x' && deveto === 'x' && prvo !== 'o'){
              if(!prvo){
                  return(
                  setPrvo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (peto === 'x' && prvo === 'x' && deveto !== 'o'){
              if(!deveto){
                  return(
                  setDeveto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if (cetvrto === 'x' && peto === 'x' && sesto !== 'o'){
              if(!sesto){
                  return(
                  setSesto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(prvo === 'x' && sedmo === 'x' ){
              if(!cetvrto){
                  return(
                  setCetvrto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(osmo === 'x' && peto === 'x' && !drugo){
              if(!drugo){
                  return(
                  setDrugo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(drugo === 'x' && peto === 'x' && !osmo){
              if(!osmo){
                  return(
                  setOsmo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(deveto === 'x' && osmo === 'x' && !sedmo){
              if(!sedmo){
                  return(
                  setSedmo('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(sedmo === 'x' && osmo === 'x' && !deveto){
              console.log('9')
              if(!deveto){
                  return(
                  setDeveto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(prvo === 'x' && drugo === 'x' && !trece){
              if(!trece){
                  return(
                  setTrece('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(prvo === 'x' && peto === 'x' && !deveto){
              if(!deveto){
                  return(
                  setDeveto('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          if(deveto === 'x' && sesto === 'x' && !trece){
              if(!trece){
                  return(
                  setTrece('o'),
                  setRed(true),
                  setProvjera(true)
              )
              }
          }
          // if(prvo === 'x' || trece === 'x' || sedmo === 'x' || deveto === 'x' && peto === 'o' )
          // {
          //     console.log('2', red)
          //     if(!sesto){
          //         return(
          //         setSesto('o'),
          //         setRed(true)
          //     )
          //     }
          // }
         
            }
            if(pozeti === 2){
                if(prvo === 'x' || trece === 'x' || sedmo === 'x' || deveto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                    if(peto === 'o'){
                        {
                            if(peto){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!drugo){
                                  return(
                                  setDrugo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                                }
                                if(store > 25 && store <= 50){
                                if(!cetvrto){
                                  return(
                                  setCetvrto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                                }
                                if(store >50 && store <=75){
                                if(!sesto){
                                  return(
                                  setSesto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                
                                }
                                if(store >75){
                                if(!osmo){
                                  return(
                                  setOsmo('o'),
                                  setRed(true),
                                  setProvjera(true)
                              )
                                  }
                                }
                            }
                        }
                    }
                }
                if(drugo === 'x' && sesto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                }
                if(peto === 'o'){
                    console.log('peto')
                        {
                            if(peto){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!prvo){
                                  return(
                                  setPrvo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )}
                                else if(!trece){
                                    return(
                                    setTrece('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                            }
                                if(store > 25 && store <= 50){
                                if(!cetvrto){
                                  return(
                                  setCetvrto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!sedmo){
                                    return(
                                        setSedmo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }
                                if(store >50 && store <=75){
                                if(!sedmo){
                                  return(
                                  setSedmo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!deveto){
                                    return(
                                        setDeveto('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                
                                }
                                if(store >75){
                                if(!deveto){
                                  return(
                                  setDeveto('o'),
                                  setRed(true),
                                  setProvjera(true)
                              )
                                  } else if (!prvo){
                                    return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }
                            
                        }
                    }
                }  
                else if(peto === 'x'){
                        {
                            if(peto){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!prvo){
                                  return(
                                  setPrvo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )}
                                else if(!trece){
                                    return(
                                    setTrece('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                                else if(!sedmo){
                                    return(
                                    setSedmo('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                                else if(!deveto){
                                    return(
                                    setDeveto('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                                if(store > 25 && store <= 50){
                                    if(!cetvrto){
                                      return(
                                      setCetvrto('o'),
                                      setRed(true),
                                      setProvjera(true)
                                    )
                                    }else if (!sedmo){
                                        return(
                                            setSedmo('o'),
                                            setRed(true),
                                            setProvjera(true)
                                          )
                                    }
                                    else if(!trece){
                                        return(
                                        setTrece('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!prvo){
                                        return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!deveto){
                                        return(
                                        setDeveto('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                }
                                    if(store >50 && store <=75){
                                    if(!sedmo){
                                      return(
                                      setSedmo('o'),
                                      setRed(true),
                                      setProvjera(true)
                                    )
                                    }else if (!deveto){
                                        return(
                                            setDeveto('o'),
                                            setRed(true),
                                            setProvjera(true)
                                          )
                                    }
                                    else if(!trece){
                                        return(
                                        setTrece('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!prvo){
                                        return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!deveto){
                                        return(
                                        setDeveto('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                }
                                if(store >75){
                                    if(!deveto){
                                      return(
                                      setDeveto('o'),
                                      setRed(true),
                                      setProvjera(true)
                                  )
                                      } else if (!prvo){
                                        return(
                                            setPrvo('o'),
                                            setRed(true),
                                            setProvjera(true)
                                          )
                                    }
                                    else if(!trece){
                                        return(
                                        setTrece('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!sedmo){
                                        return(
                                        setSedmo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    else if(!prvo){
                                        return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                    }
                                    }
                                }
                            }
                                
                            }
                        }
            }
            if(pozeti === 3){
                if(prvo === 'x' || trece === 'x' || sedmo === 'x' || deveto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                    if(peto === 'o'){
                        {
                            if(peto && !drugo && !cetvrto && !sesto && !osmo){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!drugo){
                                  return(
                                  setDrugo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                                }
                                if(store > 25 && store <= 50){
                                if(!cetvrto){
                                  return(
                                  setCetvrto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                                }
                                if(store >50 && store <=75){
                                if(!sesto){
                                  return(
                                  setSesto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }
                
                                }
                                if(store >75){
                                if(!osmo){
                                  return(
                                  setOsmo('o'),
                                  setRed(true),
                                  setProvjera(true)
                              )
                                  }
                                }
                            }
                            else{
                                if (!prvo) {
                                  return (
                                    setPrvo("o"), setRed(true), setProvjera(true)
                                  );
                                } else if (!drugo) {
                                  return (
                                    setDrugo("o"), setRed(true), setProvjera(true)
                                  );
                                }
                                else if (!trece) {
                                  return (
                                    setTrece("o"), setRed(true), setProvjera(true)
                                  );
                                }
                                else if (!cetvrto) {
                                  return (
                                    setCetvrto("o"), setRed(true), setProvjera(true)
                                  );
                                }
                                else if (!sesto) {
                                  return (
                                    setSesto("o"), setRed(true), setProvjera(true)
                                  );
                                }
                                else if (!sedmo) {
                                  return (
                                    setSedmo("o"), setRed(true), setProvjera(true)
                                  );
                                }  
                                else if (!osmo) {
                                    return (
                                      setOsmo("o"), setRed(true), setProvjera(true)
                                    );
                                  }  
                                else if (!deveto) {
                                    return (
                                      setDeveto("o"), setRed(true), setProvjera(true)
                                    );
                                  }   
                             }
                        }
                    }
                }
                if(drugo === 'x' && sesto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                }
                if(peto === 'o'){
                    console.log('peto')
                        {
                            if(peto){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!prvo){
                                  return(
                                  setPrvo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )}
                                else if(!trece){
                                    return(
                                    setTrece('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                                else if(!sedmo){
                                    return(
                                    setSedmo('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                             }
                                if(store > 25 && store <= 50){
                                if(!cetvrto){
                                  return(
                                  setCetvrto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!sedmo){
                                    return(
                                        setSedmo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }
                                if(store >50 && store <=75){
                                if(!sedmo){
                                  return(
                                  setSedmo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!deveto){
                                    return(
                                        setDeveto('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                
                                }
                                if(store >75){
                                if(!deveto){
                                  return(
                                  setDeveto('o'),
                                  setRed(true),
                                  setProvjera(true)
                              )
                                  } else if (!prvo){
                                    return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }
                         }
                         else{
                            if (!prvo) {
                              return (
                                setPrvo("o"), setRed(true), setProvjera(true)
                              );
                            } else if (!drugo) {
                              return (
                                setDrugo("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!trece) {
                              return (
                                setTrece("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!cetvrto) {
                              return (
                                setCetvrto("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!sesto) {
                              return (
                                setSesto("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!sedmo) {
                              return (
                                setSedmo("o"), setRed(true), setProvjera(true)
                              );
                            }  
                            else if (!osmo) {
                                return (
                                  setOsmo("o"), setRed(true), setProvjera(true)
                                );
                              }  
                            else if (!deveto) {
                                return (
                                  setDeveto("o"), setRed(true), setProvjera(true)
                                );
                              }   
                         }
                    }
                }  
          
            }
            if(pozeti === 4){
                if(prvo === 'x' || trece === 'x' || sedmo === 'x' || deveto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                    // if(peto === 'o'){
                    //     {
                    //         if(peto){
                    //             let store = Math.floor(Math.random() * 100)
                    //             console.log(store)
                    //             if(store <= 25){
                    //              if(!drugo){
                    //               return(
                    //               setDrugo('o'),
                    //               setRed(true),
                    //               setProvjera(true)
                    //             )
                    //             }
                    //             }
                    //             if(store > 25 && store <= 50){
                    //             if(!cetvrto){
                    //               return(
                    //               setCetvrto('o'),
                    //               setRed(true),
                    //               setProvjera(true)
                    //             )
                    //             }
                    //             }
                    //             if(store >50 && store <=75){
                    //             if(!sesto){
                    //               return(
                    //               setSesto('o'),
                    //               setRed(true),
                    //               setProvjera(true)
                    //             )
                    //             }
                
                    //             }
                    //             if(store >75){
                    //             if(!osmo){
                    //               return(
                    //               setOsmo('o'),
                    //               setRed(true),
                    //               setProvjera(true)
                    //           )
                    //               }
                    //             }
                    //         }
                    //     }
                    // }
                }
                if(drugo === 'x' && sesto === 'x'){
                    if(peto !== 'o'){
                        if(!peto){
                        return(
                            setPeto('o'),
                            setRed(true),
                            setProvjera(true)
                        )
                        }
                    }
                }
                if(peto){
                    console.log('peto')
                        {
                            if(peto && !prvo && !trece && !sedmo && !deveto){
                                let store = Math.floor(Math.random() * 100)
                                console.log(store)
                                if(store <= 25){
                                 if(!prvo){
                                  return(
                                  setPrvo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )}
                                else if(!trece){
                                    return(
                                    setTrece('o'),
                                    setRed(true),
                                    setProvjera(true)
                                  )
                                }
                             }
                                if(store > 25 && store <= 50){
                                if(!cetvrto){
                                  return(
                                  setCetvrto('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!sedmo){
                                    return(
                                        setSedmo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }
                                if(store >50 && store <=75){
                                if(!sedmo){
                                  return(
                                  setSedmo('o'),
                                  setRed(true),
                                  setProvjera(true)
                                )
                                }else if (!deveto){
                                    return(
                                        setDeveto('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                
                                }
                                if(store >75){
                                if(!deveto){
                                  return(
                                  setDeveto('o'),
                                  setRed(true),
                                  setProvjera(true)
                              )
                                  } else if (!prvo){
                                    return(
                                        setPrvo('o'),
                                        setRed(true),
                                        setProvjera(true)
                                      )
                                }
                                }   
                        }  else{
                            if (!prvo) {
                              return (
                                setPrvo("o"), setRed(true), setProvjera(true)
                              );
                            } else if (!drugo) {
                              return (
                                setDrugo("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!trece) {
                              return (
                                setTrece("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!cetvrto) {
                              return (
                                setCetvrto("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!sesto) {
                              return (
                                setSesto("o"), setRed(true), setProvjera(true)
                              );
                            }
                            else if (!sedmo) {
                              return (
                                setSedmo("o"), setRed(true), setProvjera(true)
                              );
                            }  
                            else if (!osmo) {
                                return (
                                  setOsmo("o"), setRed(true), setProvjera(true)
                                );
                              }  
                            else if (!deveto) {
                                return (
                                  setDeveto("o"), setRed(true), setProvjera(true)
                                );
                              }   
                         }
                    }
                }  
                
            }
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
  
      if(red === false){
          console.log('red')
          ai();
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
          <div></div>
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

  export default TickTack;
  