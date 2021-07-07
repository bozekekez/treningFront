import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';

const Item = () =>{
    const [auti, setAuti] = useState([])
    const [loadedItem, setLoadedItem] = useState(false);

    const params = new URLSearchParams(window.location.search);
    
    console.log('1', params)
    
    useEffect(() => {
        fetch(`http://localhost:3000/item/${params}`, {
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

    // const render = auti.map(member =>{
    //     return (
    //         <div className="kartica" >
    //             <h3>{member.name}</h3>
    //             <p>{member.cijena}</p>
    //         </div>
    //     )
    // })
    

    return(
        <div className="karticeHome">
            {/* {render} */}
        </div>
    )
}

export default Item;