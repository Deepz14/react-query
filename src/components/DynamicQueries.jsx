import axios from "axios";
import { useQueries } from "react-query";

const fetchHeroes = (heroId) => {
    return axios.get(`http://localhost:8000/superheroes/${heroId}`);
}

const DynamicQuery = ({heroIds}) => {

    const herosData = useQueries(
        heroIds.map(heroId => ({
            queryKey: ['hero', heroId],
            queryFn: () => fetchHeroes(heroId)
        }))
    );
    
    console.log(herosData);

    return (
        <div>
            <h1>DynamicQuery</h1>
        </div>
    )
}

export default DynamicQuery;