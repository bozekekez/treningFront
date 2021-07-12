import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Filter.css'

const Filter = () => {
    const [knjige, setKnjige] = useState([]);
    const [author, setAuthor] = useState();
    const [message, setMessage] = useState('');
    const [authorsLoaded, setAuthorsLoaded] = useState(false)
    const [allAuthors, setAllAuthors] = useState([]);
    let url;
    console.log('1')

    const handleAutor = (e) => {
        setAuthor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        url = new URLSearchParams ({
            author: author
        })
        fetch('http://localhost:3000/filter?' + url, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
		}).then(resopnse => resopnse.json())
        .then(temporary => {
            setKnjige(temporary)
            if(!temporary[0]) {
                setMessage('Nije pronađeno ništa po tim kriterijima')
            } if(temporary[0]) {
                setMessage('')
            }
        })
    }

    const getAuthors = (e) =>{
        e.preventDefault();
        if(authorsLoaded === false)
        {
            fetch('http://localhost:3000/author', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                setAllAuthors(temporary)
                setAuthorsLoaded(true)
            })
        }
    }

    let render = [];

    render = allAuthors.map((member) => {
        return(
            <option value={member.name}>{member.name}</option>
        )
    })

    const renderKnjige = knjige.map(member => {
        return(
            <div className="karticeKnjige"> 
                <h2>{member.bookname}</h2>
                <h3>{member.author}</h3>
                <p>{member.objave.location}</p>
            </div>
        )
    })
return(
    <div className="list">
       <form onSubmit={handleSubmit} className="filterForm">
        <label>Autor</label>
        <select name="authors" id="authors" onChange={handleAutor} onClick={getAuthors}>
           {render}
        </select>
        <button onClick={handleSubmit}>submit</button>
        </form>
        {renderKnjige}
    </div>
)
}

export default Filter;