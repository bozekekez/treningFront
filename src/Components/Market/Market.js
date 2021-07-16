import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import './Market.css'

const Market = () =>{
    const [auti, setAuti] = useState([])
    const [loaded, setLoaded] = useState(false);
    let history = useHistory();
    const [knjige, setKnjige] = useState([]);
    const [author, setAuthor] = useState();
    const [authorsLoaded, setAuthorsLoaded] = useState(false)
    const [allAuthors, setAllAuthors] = useState([]);
    const [filter, setFilter] = useState(false);
    const [message, setMessage] = useState();
    const [search, setSearch] = useState([]);
    const [searchLoaded, setSearchLoaded] = useState(false);
    const [criteria, setCriteria] = useState('name')
    
    let url = new URLSearchParams ({
        user: author
    })

    useEffect(() => {
        if(filter === false){
            fetch('http://localhost:3000/market', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setAuti(temporary)
                    setLoaded(true)   
            })
        }
        if(filter === true){
            fetch('http://localhost:3000/market?' + url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                    setAuti(temporary)
                    setLoaded(true)   
            })
        }
        
    }, [loaded]);

    const nameLink = (_id) =>{
        history.push(`/market/article/${_id}`);
    }

    const handleAutor = (e) => {
        setAuthor(e.target.value);
        setFilter(true);
        setLoaded(false);
        if(e.target.value === "reset"){
            setFilter(false);
            setLoaded(false);
        }
    }

    const getAuthors = (e) =>{
        e.preventDefault();
        if(authorsLoaded === false)
        {
            fetch('http://localhost:3000/market/registered', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                setAllAuthors(temporary)
                setAuthorsLoaded(true)
            })
        }
    }

     const handleSearch = (e) => {
        // setSearchField({article: e.target.value})

        if(criteria === 'name' && e.target.value.length > 2){
            let url = new URLSearchParams ({
                article: e.target.value
            })
            fetch('http://localhost:3000/market?' + url, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
            }).then(resopnse => resopnse.json())
            .then(temporary => {
            setSearch(temporary)
            if(!temporary[0]) {
                //setMessage('Nije pronađeno ništa po tim kriterijima')
            } if(temporary[0]) {
                setMessage('')
                setSearchLoaded(true)
            }
        })
        }
        if(criteria === 'price'){
            url = new URLSearchParams ({
                price: e.target.value
            })
            fetch('http://localhost:3000/market?' + url, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
            }).then(resopnse => resopnse.json())
            .then(temporary => {
            setAuti(temporary)
            if(!temporary[0]) {
                //setMessage('Nije pronađeno ništa po tim kriterijima')
            } if(temporary[0]) {
                setMessage('')
                setSearchLoaded(true)
            }
            })
        }
        // if(e.target.value.length > 2)
        // {
        //     fetch('http://localhost:3000/market?' + url, {
		// 	method: 'get',
		// 	headers: {'Content-Type': 'application/json'},
        //     }).then(resopnse => resopnse.json())
        //     .then(temporary => {
        //     setSearch(temporary)
        //     if(!temporary[0]) {
        //         //setMessage('Nije pronađeno ništa po tim kriterijima')
        //     } if(temporary[0]) {
        //         setMessage('')
        //         setSearchLoaded(true)
        //     }
        // })
        // }
    }
    
    const handleCriteria = (e) =>{
        setCriteria(e.target.value);
    }

    console.log(criteria)

    let render = allAuthors.map((member) => {
        return(
            <option key={member._id} value={member.username}>{member.username}</option>
        )
    })
    
    let autoComplete;

    if(searchLoaded === true ){
        autoComplete = search.map(member => {
            return(
                <p className="auto" key={member._id} onClick={() => nameLink(member._id)}>{member.article} by: {member.user}</p>
            )
        })
    }

    return(
        <div className="marketParent">
            {message}
        <div className="market">
            <select className="marketSelect" name="users" id="users" onChange={handleAutor} onClick={getAuthors}>
                <option value='reset'>Reset</option>
                {render}
            </select>
            <select name="krizeriji" id="krizeriji" onChange={handleCriteria}>
                <option value='name'>By article</option>
                <option value='price'>By price</option>
            </select>
            <input  type="search" onChange={handleSearch}></input>
            {autoComplete}
            </div>
        <div className="karticeMarket">
            { loaded === false ?
            <div className="spiner">
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            :
            auti.map(member =>{
                return (
                    <div key={member._id} className="karticaMarket" onClick={() => nameLink(member._id)}>
                        <h3 className="marketChild">{member.article}</h3>
                        <p className="marketChild">{member.price}</p>
                        <p className="marketChild">{member.user}</p>
                        <p className="marketChild">{member.userinfo.email}</p>
                    </div>
                )
                })
            }
        </div>
        </div>
        
    )
}

export default Market;