import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../Context/Context";
import "./Banka.css";

const Bank = () => {
  const [račun1, setRačun1] = useState(0);
  const [račun2, setRačun2] = useState(0);
  const [račun3, setRačun3] = useState(0);
  const [račun4, setRačun4] = useState(0);
  const [račun5, setRačun5] = useState(1000);
  const [račun6, setRačun6] = useState(1000);
  const [račun7, setRačun7] = useState(1000);
  const [račun8, setRačun8] = useState(1000);
  const [račun9, setRačun9] = useState(1000);
  const [račun10, setRačun10] = useState(1000);
  const [total, setTotal] = useState(
    Number(račun1) + Number(račun2) + Number(račun3) + Number(račun4)
  );
  const [trans, setTrans] = useState(0);
  const [iznos, setIznos] = useState(0);
  const [kamata, setKamata] = useState();
  let history = useHistory();

  // if(račun1 !== 0){
  //     // let temp = račun1 + račun2 +račun3 + račun4 + račun5 + račun6 + račun7 + račun8 +račun9 +račun10
  //     let temp = Number(račun1) + Number(račun2) + Number(račun3) + Number(račun4)
  //     setTotal(temp)
  // }

  const handleTrans = (e) => {
    setTrans(e.target.value);
  };

  const handleIznos = (e) => {
    setIznos(e.target.value);
  };

  const handle1 = (e) => {
    setRačun1(e.target.value);
  };
  const handle2 = (e) => {
    setRačun2(e.target.value);
  };
  const handle3 = (e) => {
    setRačun3(e.target.value);
  };
  const handle4 = (e) => {
    setRačun4(e.target.value);
  };

  const handle5 = (e) => {
    setRačun5(e.target.value);
  };

  const reset = () => {
    setRačun1(10000);
    setRačun2(10000);
    setRačun3(10000);
    setRačun4(10000);
    setRačun5(10000);
    setRačun6(10000);
    setTotal(40000);
  };

  const handleKamateChange = (e) => {
    setKamata(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp1 = račun1;
    let temp2 = račun2;
    let temp3 = račun3;
    let temp4 = račun4;
    let tempIznos = iznos;
    console.log(tempIznos);
    for (let i = 0; i < trans; i++) {
      temp1 = temp1 - tempIznos;
      temp2 = Number(temp2) + Number(tempIznos);
      temp3 = temp3 - tempIznos;
      temp4 = Number(temp4) + Number(tempIznos);
    
    setRačun1(temp1.toFixed(2));
    setRačun2(temp2.toFixed(2));
    setRačun3(temp3.toFixed(2));
    setRačun4(temp4.toFixed(2));
    let sum = Number(račun1) + Number(račun2) + Number(račun3) + Number(račun4);
    setTotal(sum.toFixed(2));
    }
  };

  const handleKamate = (e) => {
    e.preventDefault();
    let temp1 = račun1;
    let temp2 = račun2;
    let temp3 = račun3;
    let temp4 = račun4;
    let tempKamata = kamata;
    console.log(tempKamata);
    for (let i = 0; i < trans; i++) {
      temp1 = temp1 * (1 + Number(tempKamata));
      temp2 = temp2 * (1 + Number(tempKamata));
      temp3 = temp3 * (1 + Number(tempKamata));
      temp4 = temp4 * (1 + Number(tempKamata));
    
    setRačun1(temp1.toFixed(2));
    setRačun2(temp2.toFixed(2));
    setRačun3(temp3.toFixed(2));
    setRačun4(temp4.toFixed(2));
    let sum = Number(račun1) - Number(račun2) + Number(račun3) - Number(račun4);
    setTotal(sum.toFixed(2));
    }
  };

  const handleUkamati = (e) => {
    e.preventDefault();
    let temp = račun5;
    let tempKamata = kamata;
    console.log(tempKamata);
    for (let i = 0; i < trans; i++) {
        temp = temp * (1 + Number(tempKamata));
        setRačun5(temp.toFixed(2))
        setRačun6(temp)
    }
    console.log('5', temp)
    
  };

  console.log("1", račun1);
  console.log("2", račun2);
  console.log("3", račun3);
  console.log("4", račun4);
  console.log(total);

  return (
    <div>
      <div className="banka">
        <h3>Transakcije:</h3>
        <label>Total: </label>
        {total}
        <form>
          <label>Račun 1:</label>
          <input type="text" value={račun1} onChange={handle1}></input>
          <label>Račun 2:</label>
          <input type="text" value={račun2} onChange={handle2}></input>
          <label>Račun 3:</label>
          <input type="text" value={račun3} onChange={handle3}></input>
          <label>Račun 4:</label>
          <input type="text" value={račun4} onChange={handle4}></input>
        </form>
        <form onSubmit={handleSubmit}>
          <label>Broj transakcija</label>
          <input type="text" onChange={handleTrans}></input>
          <label>Iznos transakcija</label>
          <input type="text" onChange={handleIznos}></input>
          <button onSubmit={handleSubmit}>Start</button>
        </form>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="banka">
        <h3>kamate:</h3>
        <label>Total: </label>
        {total}
        <form>
          <label>Štednja 1:</label>
          <input type="text" value={račun1} onChange={handle1}></input>
          <label>Kredit 2:</label>
          <input type="text" value={račun2} onChange={handle2}></input>
          <label>Štednja 3:</label>
          <input type="text" value={račun3} onChange={handle3}></input>
          <label>Kredit 4:</label>
          <input type="text" value={račun4} onChange={handle4}></input>
        </form>
        <form onSubmit={handleKamate}>
          <label>Broj transakcija</label>
          <input type="text" onChange={handleTrans}></input>
          <label>Iznos kamate</label>
          <input type="text" onChange={handleKamateChange}></input>
          <button onSubmit={handleKamate}>Start</button>
        </form>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="banka">
        <h3>kamate:</h3>
        <div>
        <label>Total toFixed(2): </label>
        {račun5}
        </div>
        <label>Total float: </label>
        {račun6}
        <form>
          <label>Račun:</label>
          <input type="text" value={račun5} onChange={handle5}></input>
        </form>
        <form onSubmit={handleUkamati}>
          <label>Broj godina</label>
          <input type="text" onChange={handleTrans}></input>
          <label>Iznos kamate</label>
          <input type="text" onChange={handleKamateChange}></input>
          <button onSubmit={handleUkamati}>Start</button>
        </form>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Bank;
