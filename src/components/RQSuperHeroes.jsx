import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:8000/superheroes");
}

const RQSuperHeroes = () => {

    const onSuccess = (data) => {
        console.log("Perform side effects onSuccess :", data);
    }
    
    const onError = (error) => {
        console.log("Perform side effects onError :", error);
    }

    const { data, isLoading, isError, error, isFetching, refetch } = useQuery("super-heroes", fetchSuperHeroes, {
        // cacheTime: 5000, // (default 5mins) cache results for 5sec
        //staleTime: 30000, // (default 0) fetch(make) request after 30sec
        // refetchOnMount: true, // (default true) fetch(make) request on component mount
        // refetchOnWindowFocus: true, // (default true) fetch(make) request on window focus
        // refetchInterval: false, // (default false) if true fetch(make) request on refetchInterval(in ms) interval when window tab is focus
        // refetchIntervalInBackground: false, // (default false) if true fetch(make) request on refetchIntervalInBackground(in ms) interval when window tab is not focus
        // enabled: false, // (default true) if false, query will not be executed and no error will be thrown. Useful for conditional query execution (onClick using refetch event).
        onSuccess: onSuccess, // perform side effects on success.
        onError: onError, // perform side effects on error.
        select: (data) => { // for data transformation before returning to the component.
            return data.data.map(heros => heros.name);
        }
    });

    console.log("isLoading :", isLoading, "isFetching :", isFetching)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <div>RQSuperHeroes</div>
            <button onClick={() => refetch()}>Refetch</button>
            {
                data?.map((hero) => (
                    <h2 key={hero}>{hero}</h2>
                ))
            }
        </>
    )
}


export default RQSuperHeroes;