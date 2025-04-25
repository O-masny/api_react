import { useState, useEffect } from "react";

export default function About(){
    //definice stavu
    const [facts, setFacts] = useState([])
    //provedeni a zmena stavu
    useEffect(() => {
        //api, url 
        let apiURL = "https://meowfacts.herokuapp.com/"
        console.log(apiURL)
        //api call - then převod na json - then vypsání do konzole
        fetch(apiURL)
        .then(response => response.json())
        .then(data =>  {
            console.log(data)
            setFacts(data)
        })
    
      return () => {
      }
    }, [])
    
    return(
    <>
    <div>
        <img src="https://http.cat/200.jpg"></img>
    <p>
   </p>
   {facts.map(fact => <div>{JSON.stringy(fact.name)}</div>)} 
    </div>
    </>)
}