import { useContext } from "react"
import { AppContext } from "../App"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

export const Home = () => {
    const {data, isLoading, isError, refetch} = useQuery({queryKey: ["task"],queryFn: async () => {
        const res = await Axios.get("https://catfact.ninja/fact")
        return res.data;
    }
    })
    const {username} = useContext(AppContext);

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if(isError) {
        return <h1>error occured</h1>
    }

    return (
        <h1> 
        This is the Home page and the user is: {username} <p>{data.fact}</p> 
        <button onClick={refetch}>Update fact</button>
        </h1>
    )
}