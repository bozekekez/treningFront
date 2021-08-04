import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Array.css'

const Array = () => {
    const [firstNumber, setFirstNumber] = useState();
    const [index, setIndex] = useState();
    const [array, setArray] = useState();
    const [resault, setResault] = useState();
    const reducer = (accumulator, currentValue) => accumulator * currentValue;

    const handleChangeNumber = (e) =>{
        setFirstNumber(e.target.value)
    }

    const handleChangeIndex = (e) =>{
        setIndex(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        let tempArray = []
        let lastNumber = firstNumber;
        for (let i = 0; i < index; i++) {
            tempArray.push(Number(lastNumber))
            lastNumber = Number(lastNumber) + 1;
        }
        setArray(tempArray)
    }

    console.log(array)

    const calc = () =>{
        let tempRes = []
        // tempRes = array.forEach((member, i) => {
        //     member = array.reduce(reducer)
        // })
        for (let i = 0; i < array.length; i++) {

            tempRes.push(array.slice(i).reduce(reducer));
        }
        setResault(tempRes)
        console.log(tempRes)
    }

    console.log(resault)
 
return(
    <div className="clockParent">
        <form onSubmit={handleSubmit}>
        <label>Unesi početni broj:</label>
        <input type="text" onChange={handleChangeNumber}></input>
        <label>Unesi dužinu niza:</label>
        <input type="text" onChange={handleChangeIndex}></input>
        <button onSubmit={handleSubmit}>Kreiraj niz</button>
        </form>
        <div className="niz">
        { array !== undefined ?
        array.map(member =>{
            return <p className="nizMember">{member}</p>
        })
        :
        <div/>
        }
        </div>
        {/* <p className="niz">{array}</p> */}
        <button onClick={calc}>Izračunaj</button>
        <div className="niz">
        { resault !== undefined ?
        resault.map(member =>{
            return <p className="nizMember">{member}</p>
        })
        :
        <div/>
        }
        </div>
    </div>
)
}

export default Array;