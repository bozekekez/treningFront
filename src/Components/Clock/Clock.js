import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Clock.css'

const Clock = () => {
   const [mala, setMala] = useState(0);
   const [velika, setVelika] = useState(0);
   const [kut1, setKut1] = useState(0);
   const [kut2, setKut2] = useState(0);
   const [stop, setStop] = useState(true);
   const [minute, setMinute] = useState(0);

   const move = () =>{
       if(stop === false){
           setTimeout(() => {
               if(velika < 360 && mala < 360){
                    setVelika(velika + 6);
                    setMala(mala + 0.5);
                    // setKut1(velika - mala);
                    // setKut2(360 - kut1);
                    setMinute(minute + 1);
               }
               if(velika === 360){
                   setVelika(0)
               }
               if(mala === 360){
                    setMala(0)
                }
            }, 1000);
            // temp1= velika - mala
            // console.log(temp1)
       }
   }

//    setKut1(velika - mala);
//    setKut2(360 - kut1);
    let temp1
    let temp2
    if(velika > mala){
        temp1= velika - mala
        temp2 = 360 - (velika - mala)
    }
    if(mala > velika){
        temp1= mala - velika
        temp2 = 360 - (mala - velika)
    }
   console.log(temp1)

   const stopClock = () =>{
        if(stop === false){
            setStop(true);
        }
        
   }

   const restart = () =>{
    setVelika(0);
    setMala(0);
    setKut1(0);
    setKut2(0);
    setMinute(0);
   }

   const start = () =>{
    if(stop === true){
        setStop(false);
    }
   }

   move();
return(
    <div className="clockParent">
        <button onClick={start}>Start</button>
        <button onClick={stopClock}>Stop</button>
        <button onClick={restart}>Restart</button>
        <div>
            {minute}
        <h4>{mala}:{velika}</h4>
        <label>Kut 1:</label>
        <p>{temp1}</p>
        <label>Kut 2:</label>
        <p>{temp2}</p>
        </div>
       {/* <div className='mala'></div>
       <div className='velika'></div> */}
    </div>
)
}

export default Clock;