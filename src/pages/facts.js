import { useState, useEffect } from "react";
import CoreNavbar from "../components/navbar";

export default function Facts() {
    // Define state
    const [facts, setFacts] = useState([]);

    // Perform fetch and update state
    useEffect(() => {
        // API URL 
        const apiURL = "https://meowfacts.herokuapp.com/";
        console.log(apiURL);

        // API call - then convert to json - then log it to console and set state
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFacts(data.data); 
            })
            .catch(error => console.error("Error fetching data:", error)); // Handle errors
    }, []);

    return (
        <>
            <div className="bg-purple-200 h-screen w-full">
            <CoreNavbar/>

                <img src="https://http.cat/200.jpg" alt="Success Cat" />
                <p className="text-7xl">Here are some cat facts:</p>
                {facts.map((fact, index) => <div key={index}>{JSON.stringify(fact)}</div>)} 
            </div>
        </>
    );
}