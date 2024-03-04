import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get(`http://localhost:8000/superheroes`);
}
 
const fetchFriends = () => {
    return axios.get(`http://localhost:8000/friends`);
}

const ParallelQueries = () => {

    const {data: superheroes} = useQuery('super-heroes', fetchSuperHeroes);
    const {data: friends} = useQuery('friends', fetchFriends);

    console.log("superheroes: ", superheroes?.data);
    console.log("friends: ", friends?.data);

    return (
        <div>
            ParallelQueries
        </div>
    )
}

export default ParallelQueries;