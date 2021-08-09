import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Pongo.css'

const Pongo = () => {
    const [lokacija, setLokacija] = useState(150);
    const [balunY, setBalunY] = useState(10)
    const [balunX, setBalunX] = useState(1300)
    const [start, setStart] = useState(false)
    const [hard, setHard] = useState(1)
    let colision = false

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
    
    // console.log('1', a)

    let isColliding = (a, b) =>{
        console.log('tibi')
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
        if(((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))){
            console.log('tibidibi')
            setStart(false)
        }else{
            colision = true
        }
            
        // return !(
        //     ((aRect.top + aRect.height) < (bRect.top)) ||
        //     (aRect.top > (bRect.top + bRect.height)) ||
        //     ((aRect.left + aRect.width) < bRect.left) ||
        //     (aRect.left > (bRect.left + bRect.width))
        // );
    };

    const handleStart = () => {
        let tempY = balunY
        let tempX = balunX
        let bounceTop = false
        let bounceBot = false
        let bounceLeft = false
        let direction = true
        let bounceRight = false
        if(start === true){
                setInterval(() => {
                if(tempY > -160 && tempY < 463 && tempX > 0 && bounceTop === false && bounceLeft !== true && bounceBot === false){
                if(direction === true){
                    tempY = tempY - Number(hard)
                    tempX = tempX - Number(hard)
                    setBalunY(tempY)
                    setBalunX(tempX)
                }
                if(direction === false){
                    tempY = tempY + Number(hard)
                    tempX = tempX + Number(hard)
                    setBalunY(tempY)
                    setBalunX(tempX)
                }
               }
               if(tempY === -160 || tempY === -159 || tempY === -161  || tempY === -162){
                bounceTop = true
                bounceBot = false
                bounceLeft = false
                bounceRight = false
                tempY = -158
                tempX = tempX - Number(hard)
                setBalunY(tempY)
                setBalunX(tempX)
               }
               console.log('top', bounceTop)
               if(tempY > -159 && tempY < 463 && tempX > 0 && bounceTop === true && bounceLeft !== true){
                if(direction === true){
                    console.log('oe')
                    tempY = tempY + Number(hard)
                    tempX = tempX - Number(hard)
                    setBalunY(tempY)
                    setBalunX(tempX)
                }
                if(direction === false){
                    tempY = tempY + Number(hard)
                    tempX = tempX + Number(hard)
                    setBalunY(tempY)
                    setBalunX(tempX)
                }
                }
                if(tempY === 463 || tempY === 464 || tempY === 465 || tempY === 466){
                    bounceBot = true
                    bounceTop = false
                    bounceLeft = false
                    bounceRight = false
                    if(direction === true){
                        tempY = tempY - Number(hard)
                        tempX = tempX - Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                    if(direction === false){
                        console.log('tu')
                        tempY = tempY - Number(hard)
                        tempX = tempX + Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                   }
                if(tempY > -160 && tempY < 468 && tempX > 0 && bounceBot === true && bounceLeft !== true && bounceTop === false){
                    if(direction === true){
                        tempY = tempY - Number(hard)
                        tempX = tempX - Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                    if(direction === false){
                        console.log('isto tu')
                        tempY = tempY - Number(hard)
                        tempX = tempX + Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                    }
                if(tempX === 1585 || tempX > 1585){
                    if(bounceBot == true){
                        tempY = tempY - Number(hard)
                        tempX = tempX - Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                    if(bounceTop === true){
                        console.log('tu')
                        tempY = tempY + Number(hard)
                        tempX = tempX - Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                    bounceRight = true
                    bounceLeft = false
                    direction = true
                   }
                
                if(tempY > -160 && tempY < 468 && tempX <= 1585 && bounceLeft !== true && bounceRight === true){
                        if(direction === true && bounceBot === true){
                            tempY = tempY - Number(hard)
                            tempX = tempX - Number(hard)
                            setBalunY(tempY)
                            setBalunX(tempX)
                        }
                        if(direction === false && bounceTop === true){
                            console.log('isto tu')
                            tempY = tempY - Number(hard)
                            tempX = tempX + Number(hard)
                            setBalunY(tempY)
                            setBalunX(tempX)
                        }
                }
                if(tempX < 16 && bounceLeft === false){
                    isColliding(a,b)
                    if(colision === true){
                        // console.log('bounce')
                        // bounceBot = false;
                        // bounceTop = false;
                        bounceLeft = true;
                        bounceRight = false
                        direction = false
                        colision = false
                    }
                }
                if(tempY > -160 && tempY < 463 && tempX > 0 && bounceLeft === true ){
                     if (bounceBot === true){
                         tempY = tempY - Number(hard)
                         tempX = tempX + Number(hard)
                         setBalunY(tempY)
                         setBalunX(tempX)
                     }
                     if (bounceTop === true){
                        tempY = tempY + Number(hard)
                        tempX = tempX + Number(hard)
                        setBalunY(tempY)
                        setBalunX(tempX)
                    }
                }
            //    console.log('y', tempY)
            //    console.log('x', tempX)
            }, 1);
        }
    }

    const handleGo = () =>{
        if(start === false){
            setStart(true)
            handleStart()
        }
        if(start === true){
            setStart(false)
            handleStart()
        }
    }

    console.log(start)
    //console.log('1', isColliding)

    const handleHardness = (e) =>{
        setHard(e.target.value)
    }

    const handleRestart = () =>{
        setLokacija(150)
        setBalunY(10)
        setBalunX(1300)
        setStart(false)
    }

    const doli = () =>{
        setLokacija(lokacija+50)
    }

return(
    <div className="list">
        <input onKeyPress={gori}/>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleGo}>Go</button>
        <select onChange={handleHardness}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button onClick={handleRestart}>Restart</button>
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