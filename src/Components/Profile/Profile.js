import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Profile.css'

const Profile = () =>{
    const [auti, setAuti] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selected, setSelected] = useState();
    const [selectedDel, setSelectedDel] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [message, setMessage] = useState();
    let history = useHistory();

    const params = window.location.pathname;

    useEffect(() => {
        fetch(`http://localhost:3000${params}`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
        })
        .then(resopnse => resopnse.json())
        .then(temporary => {
            setAuti(temporary)
            setLoaded(true)   
        })
    }, [loaded]);

    const edit = (_id) =>{
        console.log(_id)
        setSelected(_id)
        setEditing(true)
    }

    const cancle = () =>{
        setSelected(0)
    }

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handlePrice = (e) =>{
        setPrice(e.target.value)
    }

    const save = (e) =>{
        e.preventDefault();
        fetch('https://trening-88.herokuapp.com/profile', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                article: name,
                price: price,
                _id: selected
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.article} has been edited`)
                }
        })
    } 

    const deleteOne = (_id) =>{
        setSelectedDel(_id);
    }

    const handleDel = (e) =>{
        e.preventDefault();
        fetch('https://trening-88.herokuapp.com/profile/delete', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                active: false,
                _id: selectedDel
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.article} has been deleted`)
                }
        })
    }

    const render = auti.map(member =>{
        return (
            <div key={member._id} className="karticaProfile">
                { member._id !== selected && member._id !== selectedDel?
                <div>
                    <h3 className="marketChild">{member.article}</h3>
                    <p className="marketChild">{member.price}</p>
                    <div>
                    <button className="botunProfil" onClick={() => edit(member._id)}>Edit</button>
                    <button className="botunProfil" onClick={() => deleteOne(member._id)}>Delete</button>
                    </div>
                </div>
                : 
                member._id === selected ?
                <div>
                    <label>Aricle name:</label>
                    <input type="text" onChange={handleName}></input>
                    <label>Price:</label>
                    <input type="text" onChange={handlePrice}></input>
                    <button onClick={save}>Save</button>
                    <button onClick={cancle}>Cancle</button>
                </div>
                :
                member._id === selectedDel?
                <div>
                    <h3 className="marketChild">{member.article}</h3>
                    <p className="marketChild">{member.price}</p>
                    <div>
                    <button className="botunProfil" onClick={handleDel}>Delete</button>
                    <button className="botunProfil" onClick={() => deleteOne(member._id)}>Cancle</button>
                    </div>
                </div>
                :
                <div></div>    
                }
            </div>
        )
        })

return(
    <div className="profile">
        {message}
        {render}
    </div>
)
}

export default Profile;