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
  
  const CreditSearch = () => {
      const [loaded, setLoaded] = useState(false);
      const [credits, setCredits] = useState([]);
      const [prikaz, setPrikaz] = useState([]);
      const [generate, setGenerate] = useState(false)
      let url 
    const getCredits = (e) =>{
        e.preventDefault();
        if(loaded === false)
        {
            fetch('http://localhost:3000/credit/search', {
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
        console.log('eo', e.target.value)
        url = new URLSearchParams ({_id: e.target.value})
        
    }
    const handleShow = () =>{
            fetch('http://localhost:3000/credit/search?' + url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            }).then(resopnse => resopnse.json())
            .then(temporary => {
                // let save = temporary.Array.map(member =>({
                //     'broj': member.broj,
                //     'anuitet': member.anuitet,
                //     'kamata': member.kamata,
                //     'glavnicaGod': member.glavnicaGod,
                //     'ostatak': member.ostatak
                // }))
                console.log('11', temporary)
                setPrikaz(temporary.niz)
                setGenerate(true)
            })
    }

    console.log('22', prikaz)
    let render = [];

    render = credits.map((member) => {
        return(
            <option key={member._id} value={member._id}>{member._id}</option>
        )
    })

    return(
        <div>
        <div className="kreditSearch">
            <select name="credits" id="credit" onChange={handleCredits} onClick={getCredits}>
            {render}
            </select>
            <button onClick={handleShow}>Prikaži kredit</button>
        </div>
        <div className="kreditSearchTable">
        <div className="tablicaKreditTopsSearch">
            <label className="celije">Broj anuiteta:</label>
            <label className="celije">Godišnji anuitet:</label>
            <label className="celije">Godišnja kamata:</label>
            <label className="celije">Godišnja glavnica:</label>
            <label className="celije">Preostala glavnica:</label>
        </div>
        <div>
          { generate === true ?
              prikaz.map(member => {
                  return(
                    <div className="tablicaKredit">
                    <h4 className="celije">{member.broj}</h4>
                    <h4 className="celije">{member.anuitet}</h4>
                    <h4 className="celije">{member.kamata}</h4>
                    <h4 className="celije">{member.glavnicaGod}</h4>
                    <h4 className="celije">{member.ostatak}</h4>
                    </div>
                  )
              })
            :
            <></>
          }
        </div>
        </div>
        </div>
    )
  }
  export default CreditSearch;