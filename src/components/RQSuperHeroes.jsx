import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:8000/superheroes");
}

const RQSuperHeroes = () => {
    const { data, isLoading, isError, error, isFetching, refetch } = useQuery("super-heroes", fetchSuperHeroes);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <div>RQSuperHeroes</div>
            {
                data?.data.map((hero) => (
                    <h2 key={hero.id}>{hero.name}</h2>
                ))
            }
        </>
    )
}


export default RQSuperHeroes;