import { React, useState, useEffect, Fragment } from "react";
import axios from "axios";

const SuperHeroes = () => {
    const [superHeroes, setSuperHeroes] = useState([]);
    const [isLoading,  setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/superheroes")
            .then((response) => {
                setSuperHeroes(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const handleAddSuperHero = () => {
    //     axios.post("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {
    //         name: "Batman",
    //         power: "Money",
    //         universe: "DC"
    //     })
    //         .then((response) => {
    //             setSuperHeroes([...superHeroes, response.data]);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
       <div className="superHeroes-wrapper">
            <h1>Super Heroes</h1>
            <div className="superHeroes-list">
                {superHeroes.map((superHero) => (
                    <h4 key={superHero.id}>{superHero.name}</h4>
                ))}
            </div>
        </div>
    )
}


export default SuperHeroes;