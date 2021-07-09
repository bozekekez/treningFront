import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Delete.css'

const Delete = () =>{
    const [auti, setAuti] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [message, setMessage] = useState('');
    let history = useHistory();
    const [check, setCheck] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/delete', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setAuti(temporary)
                    setLoaded(true)   
            })
    }, [loaded]);

    const nameLink = (_id, name) =>{
        // history.push(`/item/${_id}`);
        let tempList = auti.filter(member => member._id !== _id)
        setAuti(tempList)
        fetch('http://localhost:3000/delete', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                _id: _id
            })
        })
        // .then(resopnse => resopnse.json())
        // .then(temp => {setMessage(`${temp.name} has been deleted`)})
        setMessage(`${name} has been deleted`)
        setCheck(false)
    }

    console.log(auti)        

    const provjera = () => {
        // setCheck(true)
        if(check === false){
            setCheck(true)
        }
        if(check === true){
            setCheck(false)
        }
    }

    console.log(check)

    return(
        <div className="marginDel">
        <p className="messageDel">{message}</p>
        <div className="karticeDelete">
            { loaded === false ?
            <div className="spiner">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            :
            auti.map(member =>{
                return (
                    <div key={member._id} className="delKartica" >
                        <h3>{member.name}</h3>
                        <p>{member.cijena}</p>
                        {check === false ?
                        <button onClick={provjera}>x</button>
                        :
                        <div>
                            <button onClick={() => nameLink(member._id, member.name)}>Da</button>
                            <button onClick={provjera}>Ne</button>   
                        </div>
                        }
                        
                    </div>
                )
                })
            }
        </div>
        </div>
    )
}

export default Delete;