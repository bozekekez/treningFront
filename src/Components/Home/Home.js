import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
import './Home.css'
import car from './car.png'
import books from './books.png'
import market from './market.png'

const Home = () =>{
    const {header, setHeader, isHome, setIsHome} = useContext(ItemContext);
    const [auti, setAuti] = useState([])
    const [loaded, setLoaded] = useState(false);
    let history = useHistory();

    
    useEffect(() => {
        fetch('http://localhost:3000/', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setAuti(temporary)
                    setLoaded(true)   
            })
    }, [loaded]);

    const nameLink = (_id) =>{
        history.push(`/item/${_id}`);
    }

    console.log(auti)        

    const handleAuti = () =>{
        setIsHome(true)
    }

    const handleKnjige = () =>{
        setHeader('knjige');
        document.body.style = 'background: rgb(198, 242, 248)';
        history.push(`/knjige`);
        setIsHome(true)
    }

    const handleMarket = () =>{
        setHeader('market');
        document.body.style = 'background: #e6e6ff';
        history.push('/market');
        setIsHome(true)
    }

    return(
        <div>
        { isHome === false?
        <div className="landing">
        <button className="landingButton" onClick={handleAuti}><img src={car} className="slika"></img></button>
        <button className="landingButton" onClick={handleKnjige}><img src={books} className="slika"></img></button>
        <button className="landingButton" onClick={handleMarket}><img src={market} className="slika"></img></button>
        </div>
        :
        <div className="karticeHome">
            { loaded === false ?
            <div className="spiner">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            :
            auti.map(member =>{
                return (
                    <div key={member._id} className="kartica" onClick={() => nameLink(member._id)}>
                        <h3>{member.name}</h3>
                        <p>{member.cijena}</p>
                    </div>
                )
                })
            }
        </div>
        }
        </div>
    )
}

export default Home;