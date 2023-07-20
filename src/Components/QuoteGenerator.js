import React from "react";
import { useState, useEffect } from "react";

function getRandomQuotes(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function QuoteGenerator(){

    const [quote,setQuote]=useState(null);
    const [quotes,setQuotes]=useState([]);

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=> res.json())
        .then((json)=>
           { setQuote(json[0]);
            setQuotes(json);
           })
         },[]);

    function newQuote(){
        setQuote(getRandomQuotes(quotes))
    }

    return (
    
    <div>
        <button onClick={newQuote}> New Quote</button>
        <p>{quote?.text}</p>
        <p>{quote?.author}</p>

    </div>);
}

export default QuoteGenerator;