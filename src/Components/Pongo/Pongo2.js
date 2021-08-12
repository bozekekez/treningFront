import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Pongo.css'

const Pongo2 = () => {
    const [lokacija, setLokacija] = useState(Math.floor(Math.random() * 100) + 100);
    const [balunY, setBalunY] = useState(Math.floor(Math.random() * 100) + 10)
    const [balunX, setBalunX] = useState(Math.floor(Math.random() * 100) + 1000)
    const [start, setStart] = useState(false)
    const [hard, setHard] = useState(5)
    const [message, setMessage] = useState()
    const [go, setGo] = useState(false)
    // let go = false
    let colision = false

    const gori = (e) =>{
        e.preventDefault();
        // console.log(e.key)
        switch(e.key){
            case ('w'):
                console.log(e.key)
                setLokacija(lokacija-10); 
                break;
            
            case ('s'):
                setLokacija(lokacija-10)
                break;
        }
        // if(e.key === 'w' && lokacija > -80){
        //     setLokacija(lokacija-10)
        // }
        // if(e.key === 's' && lokacija < 480){
        //     setLokacija(lokacija+10)
        // }
    }
    let a = document.getElementById('div1')
    let b = document.getElementById('div2')
    
    // console.log('1', a)

    let isColliding = (a, b) =>{
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
        if(((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))){
            // setStart(false)
        }else{
            colision = true
        }
    };

    let tempY = balunY
    let tempX = balunX
    let bounceTop = false
    let bounceBot = false
    let bounceLeft = false
    let direction = true
    let bounceRight = false
    let inter
    let myTimer

    const move = () => {
        // let tempY = balunY
        // let tempX = balunX
        // let bounceTop = false
        // let bounceBot = false
        // let bounceLeft = false
        // let direction = true
        // let bounceRight = false
        // let inter
        if(start === true && go === true){
            
            // inter = setInterval(() => {
                // setInterval(() => {
                myTimer = () => {
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
               if(tempY > -160 && tempY < 463 && tempX > 0 && bounceTop === true && bounceLeft !== true){
                if(direction === true){

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
                if(tempY === 463 || tempY === 464 || tempY === 465 || tempY >= 466 ){
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
                if(tempX === 0){
                    setMessage('Game over')
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
            // }, 1);
            }
            inter = setInterval(myTimer, 5000)
            if(start === false || go === false){
                clearInterval(myTimer)
            }
        }
    }
    // let mojInterval = setInterval(myTimer, 1)   
    // // if(start === true){
    // const mojInterval = setInterval(myTimer, 1000)
    // // }    

    const handleStart = () => {
        if(start === true){
            //go = true
            setGo(true)
            move();
        }
        else if(start === false){
            setGo(false)
            console.log('tu sam')
            // go = false
            clearInterval(myTimer)
            //clearInterval(myTimer)
        }
    }

    const handleGo = () =>{
        if(start === false){
            setStart(true)
            //handleStart()
        }
        else if(start === true){
            setStart(false)
            clearInterval(myTimer)
            // clearInterval(mojInterval)
        }
    }
    //console.log('1', isColliding)
    const handleHardness = (e) =>{
        setHard(e.target.value)
    }

    const handleRestart = () =>{
        setLokacija(150)
        setBalunY(10)
        setBalunX(1300)
        setStart(false)
        setMessage()
    }

    const doli = () =>{
        setLokacija(lokacija+50)
    }

    window.addEventListener('keydown', (e) => { 
        e.preventDefault();
        gori(e)
        // switch (e.key) {
        // case ('w'):
        //     setLokacija(lokacija-10);
        //     console.log('w')
        //     break;
        // case ('s'):
        //     setLokacija(lokacija+10)
        //     break;
        // if(e.key === 'w' && lokacija > -80){
        //     console.log('w')
        //     setLokacija(lokacija-10)
        // }
        // if(e.key === 's' && lokacija < 480){
        //     setLokacija(lokacija+10)
        // }
        // }
    },)
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
        <h1 className="gameOver">{message}</h1>
        <div className="court" >
        <div id="div1" className="reket" onKeyDown ={gori} style={{
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
export default Pongo2;