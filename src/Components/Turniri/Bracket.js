import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Turniri.css'

const Bracket = () => {
   const [render, setRender] = useState([1, 2])

return(
    <div className="turniriParent">
        { render.map(element => {
            return <div>{element}</div>
        })
        }
        <div className="kocka">{render[0]}</div>
        <div className="crta"/>
        <div className="kocka">{render[1]}</div>
        <div className="kockeParent">
            <div>
                <div className="kocka">{render[0]}</div>
                <div className="kocka">{render[1]}</div>
            </div>
            <div>
                <div className="crtaGornja"/>
            <div className="crtaDonja"/>
            </div>
                <div className="crtaRavna"/>
                <div className="kocka2">{render[1]}</div>
        </div>
    </div>
)
}
export default Bracket;