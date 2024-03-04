import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchColorsData = (pageNumber) => {
    return axios.get(`http://localhost:8000/colors?_per_page=2&_page=${pageNumber}`);
}

const PaginatedQuery = () => {
    const [ pageNumber, setPageNumber ] = useState(1);
    const {data, isLoading, isError, error, isFetching} = useQuery(["colors", pageNumber], () => fetchColorsData(pageNumber), {
        keepPreviousData: true
    });

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error?.message}</div>
    console.log("data: ", data?.data?.data?.length);

    return (
        <div>
            Paginated Query
            {
                data?.data?.data?.map((color) => {
                    return (
                        <div key={color?.id}>
                            {color?.id} - {color?.label}
                        </div>
                    )
                })
            } 
            <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev Page</button>
            <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>Next Page</button>
            {
                isFetching && <div>Loading...</div>
            }
        </div>
    )
}


export default PaginatedQuery;