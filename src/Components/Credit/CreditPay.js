import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
  } from "react-router-dom";
  import React, { useState, useEffect, useContext } from "react";
  import './Credit.css'
  
  const CreditPay = () => {
      const [loaded, setLoaded] = useState(false);
      const [credits, setCredits] = useState([]);
      const [prikaz, setPrikaz] = useState([]);
      const [generate, setGenerate] = useState(false);
      const [message, setMessage] = useState()
      const [ credit, setCredit] = useState(); 
      let history = useHistory();
    const getCredits = (e) =>{
        e.preventDefault();
        if(loaded === false)
        {
            fetch('https://trening-88.herokuapp.com/credit/search', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                setCredits(temporary)
                setLoaded(true)
            })
        }
    }

    console.log(credits)

    const handleCredits = (e) =>{
        setCredit(e.target.value)
    }

    const handlePay = (e) => {
        e.preventDefault();
        fetch('https://trening-88.herokuapp.com/credit/pay', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                _id: credit,
                payed: true
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article === 'payed'){
                    setMessage(`rata je plaćena`)
                }
        })
    } 

    const handleCredit = () => {
        history.push('/credit')
    }

    const handlePregled = () => {
        history.push('/credit/search')
    }

    let render = [];

    render = credits.map((member) => {
        return(
            <option key={member._id} value={member._id}>{member._id}</option>
        )
    })

    return(
        <div>
            
        <div className="kreditSearch">
            {message}
            <select name="credits" id="credit" onChange={handleCredits} onClick={getCredits}>
            {render}
            </select>
            <button onClick={handlePay}>Plati ratu</button>
            <button onClick={handleCredit}>Zatraži kredit</button>
            <button onClick={handlePregled}>Pregled kredita</button>
        </div>
        </div>
    )
  }
  export default CreditPay;