import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:8000/superheroes");
}

const addSuperHeroes = (hero) => {
    return axios.post("http://localhost:8000/superheroes", hero);
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


export const useAddSuperHeroesData = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHeroes, {
        onSuccess: (data) => {
            // auto fetch data after mutation(new data added to the list))
            //queryClient.invalidateQueries('super-heroes');

            // handle mutation response
            queryClient.setQueryData('super-heroes', (old) => {
                return {...old, data: [...old.data, data.data]};
            }); 
        },
        onError: (error) => {
            console.log("Error :", error);
        }
    });

}