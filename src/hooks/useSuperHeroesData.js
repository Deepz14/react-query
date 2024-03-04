import { useQuery } from "react-query"
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:8000/superheroes");
}


export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess: onSuccess, // perform side effects on success.
        onError: onError, // perform side effects on error.
        //select: (data) => { // for data transformation before returning to the component.
        //    return data.data.map(heros => heros.name);
        //}
    });
}