import { useParams } from "react-router-dom";
import { useSuperHeroDetails } from "../hooks/useSuperHeroDetails";


const RQSuperHeroe = () => {
    const {heroId} = useParams();
    const { data, isLoading, isError, error } = useSuperHeroDetails(heroId);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>RQSuperHeroe Detail</h2>
            {
                data?.data?.name && <p>{data.data.name} - {data.data.alterEgo}</p>
            }
        </div>
    )
}

export default RQSuperHeroe;