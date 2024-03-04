import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroDetail = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:8000/superheroes/${heroId}`)
}

export const useSuperHeroDetails = (heroId) => {
    return useQuery(['super-heroe', heroId], fetchSuperHeroDetail);
};
