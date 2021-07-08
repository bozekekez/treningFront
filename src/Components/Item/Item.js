import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Item.css'

const Item = () =>{
    const [auti, setAuti] = useState([])
    const [loadedItem, setLoadedItem] = useState(false);
    let render = [];

    const params = window.location.pathname;
    
    console.log('1', params)
    
    useEffect(() => {
        fetch(`http://localhost:3000${params}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                setAuti(temporary)
                setLoadedItem(true)
            })
    }, [loadedItem]);
    console.log(auti)        

    // render = auti.map(member =>{
    //     return (
    //         <div className="item" >
    //             <h3>{member.name}</h3>
    //             <p>{member.cijena}</p>
    //         </div>
    //     )
    // })
    

    return(
        <div className="itemDiv">
            { loadedItem === false ?
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            :
            auti.map(member =>{
                return (
                    <div className="item" >
                        <h3>{member.name}</h3>
                        <p>{member.cijena}</p>
                    </div>
                )
            })
            }  
        </div>
    )
}

export default Item;