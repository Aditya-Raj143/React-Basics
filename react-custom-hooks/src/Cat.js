import { useCatdata } from "./useCatdata";

export const Cat = ()  => {

    const {data, refetchData, isLoading} = useCatdata();

    if(isLoading) return <p>Loading....</p>

    return (
    <div>
        <h3>Catfact:</h3> <p>{data.fact}</p>
        <button onClick={refetchData}>refetch fact</button>
    </div>
    )
}