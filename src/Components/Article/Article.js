import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../Context/Context'

const Article = () =>{
    const {basket, setBasket, setCart, cart} = useContext(ItemContext);
    const [auti, setAuti] = useState([])
    const [loadedItem, setLoadedItem] = useState(false);
    let render = [];

    const params = window.location.pathname;
    
    useEffect(() => {
        fetch(`https://trening-88.herokuapp.com/${params}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
            })
            .then(resopnse => resopnse.json())
            .then(temporary => {
                setAuti(temporary)
                setLoadedItem(true)
            })
    }, [loadedItem]);     

    const add = (price, user, article) => {
        let sum;
        let tempCart = {
            article: article,
            price: price,
            user: user
        }
        setCart(cart => [...cart, tempCart])
        sum = parseFloat(basket) + parseFloat(price)
        setBasket(sum.toFixed(2));
    }

    console.log(basket)
    console.log(cart)

    return(
        <div className="itemDiv">
            { loadedItem === false ?
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            :
            auti.map(member =>{
                return (
                    <div className="item" >
                        <h3>{member.article}</h3>
                        <p>{member.price}</p>
                        <p>{member.user}</p>
                        <button onClick={() => add(member.price, member.article, member.user)}>Add</button>
                    </div>
                )
            })
            }  
        </div>
    )
}

export default Article;