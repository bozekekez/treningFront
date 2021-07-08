import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Home.css'

const Home = () =>{
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

    // let render;

    // if(loaded === true)
    // {
    //     render = auti.map(member =>{
    //         return (
    //             <div key={member._id} className="kartica" onClick={() => nameLink(member._id)}>
    //                 <h3>{member.name}</h3>
    //                 <p>{member.cijena}</p>
    //             </div>
    //         )
    //     })
    // }
    
    return(
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
    )
}

export default Home;