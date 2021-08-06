import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Pongo.css'

const Pongo = () => {
    const [lokacija, setLokacija] = useState(150);
    const [balunY, setBalunY] = useState(10)
    const [balunX, setBalunX] = useState(1300)

    const gori = (e) =>{
        console.log(e.key)
        if(e.key === 'w' && lokacija > -80){
            setLokacija(lokacija-10)
        }
        if(e.key === 's' && lokacija < 480){
            setLokacija(lokacija+10)
        }
    }
    let a = document.getElementById('div1')
    let b = document.getElementById('div2')
    
    console.log('1', a)

    let isColliding = (a, b) =>{
        // return !(
        //     ((a.y + a.height) < (b.y)) ||
        //     (a.y > (b.y + b.height)) ||
        //     ((a.x + a.width) < b.x) ||
        //     (a.x > (b.x + b.width))
        // );
    };

        
    const handleStart = () => {
        let tempY = balunY
        let tempX = balunX
        let bounceTop = false
        let bounceBot = false
        setInterval(() => {
           if(tempY > -160 && tempY < 463 && tempX > 0 && bounceTop === false){
               tempY = tempY - 3
               tempX = tempX - 3
               setBalunY(tempY)
               setBalunX(tempX)
           }
           if(tempY === -161){
            bounceTop = true
            bounceBot = false
            tempY = tempY + 3
            tempX = tempX - 3
            setBalunY(tempY)
            setBalunX(tempX)
           }
           if(tempY > -160 && tempY < 463 && tempX > 0 && bounceTop === true){
            tempY = tempY + 3
            tempX = tempX - 3
            setBalunY(tempY)
            setBalunX(tempX)
            }
            if(tempY === 463){
                bounceBot = true
                bounceTop = false
                tempY = tempY - 3
                tempX = tempX - 3
                setBalunY(tempY)
                setBalunX(tempX)
               }
               if(tempY > -160 && tempY < 463 && tempX > 0 && bounceBot === true){
                tempY = tempY - 3
                tempX = tempX - 3
                setBalunY(tempY)
                setBalunX(tempX)
                }
            if(tempX < 10){
                isColliding(a, b)
                if(isColliding === false){
                    console.log('tru')
                }
            }
        //    console.log('y', tempY)
        //    console.log('x', tempX)
        }, 10);
    }

    //console.log('1', isColliding)

    const doli = () =>{
        setLokacija(lokacija+50)
    }

return(
    <div className="list">
        <input onKeyPress={gori}/>
        <button onClick={handleStart}>Start</button>
        <div className="court">
        <div id="div1" className="reket" onKeyPress ={gori} style={{
          transform: `translateY(${lokacija}px)`
        }}>
        </div>
        <div id="div2" className="balun" style={{
          transform: `translateY(${balunY}px) translateX(${balunX}px)`
        }}>
        </div>
        </div>
        {/* <button onClick = {gori} >Gori</button>
        <button onClick = {doli} >Doli</button> */}
    </div>
)
}
export default Pongo;