import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchSuperHeroDetail = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:8000/superheroes/${heroId}`)
}

export const useSuperHeroDetails = (heroId) => {
    const queryClient = useQueryClient();

    return useQuery(['super-heroe', heroId], fetchSuperHeroDetail, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(heroId));
            if(hero) {
                return {data: hero}
            }else{
                return undefined;
            }
        }
    });
};
