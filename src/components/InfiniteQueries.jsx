import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColorsData = (pageParams) => {
    return axios.get(`http://localhost:8000/colors?_per_page=2&_page=${pageParams}`)
}

const InfiniteQuery = () => {
    const {data, isError, error, isFetchingNextPage, isFetching, hasNextPage, fetchNextPage} = useInfiniteQuery(["colors"], ({ pageParam = 1 }) => fetchColorsData(pageParam), {
        getNextPageParam: (lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1;
            }else{
                return undefined;
            }

        }
    })

    return (
        <div>
            <h1>Infinite Query</h1>
            {
                data?.pages?.map((page, i) => {
                    return (
                        <div key={i}>
                            {page?.data?.data?.map((color) => {
                                return (
                                    <div key={color?.id}>
                                        {color?.id} - {color?.label}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>Load More</button>
            {
                isFetching && !isFetchingNextPage && <div>Loading...</div>
            }
        </div>
    )
}


export default InfiniteQuery;
