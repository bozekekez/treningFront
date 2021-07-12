import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
// import '../List/List.css'

const AddBook = () => {
    const [naziv, setNaziv] = useState();
    const [author, setAuthor] = useState();
    const [tempDate, setTempDate] = useState();
    const [message, setMessage] = useState('');
    const [authorsLoaded, setAuthorsLoaded] = useState(false)
    const [allAuthors, setAllAuthors] = useState([]);
    console.log('1')

    const handleName = (e) =>{
        setNaziv(e.target.value);
    }

    const handleDate = (e) => {
        setTempDate(e.target.value);
    }

    const handleAutor = (e) => {
        setAuthor(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                bookname: naziv,
                date: tempDate,
                author: author,
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.name} has been created`)
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
return(
    <div className="list">
       <form onSubmit={handleSubmit} className="forma">
        <label>Ime knjige</label>
        <input type="text" onChange={handleName}></input>
        <label>Datum izdanja</label>
        <input type="date" onChange={handleDate}></input>
        <label>Autor</label>
        <select name="authors" id="authors" onChange={handleAutor} onClick={getAuthors}>
           {render}
        </select>
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
)
}

export default AddBook;