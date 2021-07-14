import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'
// import '../List/List.css'

const Login = () => {
    const {logged, setLogged} = useContext(ItemContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const [register, setRegister] = useState(false);
    const [user, setUser] = useState();
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPw, setRegisterPw] = useState();
    let history = useHistory();

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/market/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(resopnse => resopnse.json())
        .then(article => {
            if(article === "Username not found"){
                setMessage("Username not found")
            }
            else if(article === 'Wrong password'){
                setMessage("Incorect password")
            }
            else if (article){
                console.log('1', article)
                setLogged(article);
                history.push('/market');
            }
        })
    }

    const handleRegiser = () =>{
        // history.push('/market/register');
        setRegister(true)
    }

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const regEmail = (e) => {
        setRegisterEmail(e.target.value)
    }

    const regPw = (e) => {
        setRegisterPw(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/market/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                username: user,
                email: registerEmail,
                password: registerPw,
            })
        })
        .then(resopnse => resopnse.json())
        .then(article =>{
            if (article){
                    setMessage(`${article.username} has been created`)
                    setRegister(false)
                }
        })
    }

    const handleBack = () =>{
        setRegister(false);
    }
return(
    <div className="list">
        {message}
        { register === false ?
        <>
            <form onSubmit={handleSubmit} className="forma">
            <label>Email</label>
            <input type="email" onChange={handleEmail}></input>
            <label>Password</label>
            <input type="password" onChange={handlePassword}></input>
            <button onClick={handleSubmit}>submit</button>
            </form>
            <button onClick={handleRegiser}>register</button>
        </>
        :
        <>
            <form onSubmit={handleSubmit} className="forma">
            <label>Create a new user:</label>
            <label>Username</label>
            <input type="text" onChange={handleUser}></input>   
            <label>Email</label>
            <input type="email" onChange={regEmail}></input>
            <label>Password</label>
            <input type="password" onChange={regPw}></input>
            <button onClick={handleRegister}>submit</button>
            </form>
            <button onClick={handleBack}>Back</button>
        </>
        }
       
    </div>
)
}

export default Login;