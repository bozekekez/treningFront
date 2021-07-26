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
  
  const Credit = () => {
    const [račun5, setRačun5] = useState(1000);
    const [trans, setTrans] = useState(0);
    const [iznos, setIznos] = useState(0);
    const [kamata, setKamata] = useState();
    const [plan, setPlan] = useState([]);
    const [generate, setGenerate] = useState(false)
    const [message, setMessage] = useState();
    let history = useHistory();
  
    const handleTrans = (e) => {
      setTrans(e.target.value);
    };
  
    const handle5 = (e) => {
      setRačun5(e.target.value);
    };
  
    const handleKamateChange = (e) => {
        setKamata(e.target.value);
      };

    const reset = () => {
      setRačun5(10000);
      setGenerate(false)
      setPlan()
    };
  
    const handleKredit = (e) =>{
      e.preventDefault();
      let temp = račun5;
      let tempKamata = kamata;
      let glavnica = Number(račun5);
      console.log(glavnica)
      let anuitet = račun5/trans;
      let tempPlan = [];
      for (let i = 0; i < trans; i++) {
          temp = Number(glavnica) - (Number(glavnica) * (1 - Number(tempKamata)/100));
          let zbroj = anuitet + temp; 
          glavnica = Number(glavnica) - Number(anuitet);
          tempPlan.push({
              anuitet: zbroj.toFixed(2),
              kamata: temp.toFixed(2),
              glavnicaGod: anuitet.toFixed(2),
              broj: i + 1,
              ostatak: glavnica.toFixed(2),
              payed: false
          })
          
          
          console.log(i)
          console.log(temp)
          console.log(glavnica)
      }
      setPlan(tempPlan)
      setGenerate(true)
    }

    const plati = () =>{
      history.push('/credit/pay')
    }

    const pregled = () =>{
      history.push('/credit/search')
    }

    const uzmi = (e) =>{
        e.preventDefault();
        fetch('http://localhost:3000/credit', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(plan)
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article._id} je izdan!`)
                }
        })
    }

    console.log('1', plan)

    return (
      <div className="kreditParent">
        <div >
            {message}
          <h3>Otplata:</h3>
          <form>
            <label>Iznos:</label>
            <input type="text" value={račun5} onChange={handle5}></input>
          </form>
          <form onSubmit={handleKredit}>
            <label>Broj godina</label>
            <input type="text" onChange={handleTrans}></input>
            <label>Iznos kamate</label>
            <input type="text" onChange={handleKamateChange}></input>
            <button onSubmit={handleKredit}>Start</button>
          </form>
          <button onClick={reset}>Reset</button>
          <button onClick={uzmi}>Uzmni kredit</button>
          <button onClick={plati}>Plati kredit</button>
          <button onClick={pregled}>Pregled kredita</button>
          <div > 
          <div className="tablicaKreditTop">
            <label className="celije">Broj anuiteta:</label>
            <label className="celije">Godišnji anuitet:</label>
            <label className="celije">Godišnja kamata:</label>
            <label className="celije">Godišnja glavnica:</label>
            <label className="celije">Preostala glavnica:</label>
          </div>
          { generate === true ?
              plan.map(member => {
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
    );
  };
  
  export default Credit;