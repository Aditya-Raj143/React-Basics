import Axios from "axios"
import {useQuery} from "@tanstack/react-query"

export const useCatdata = () => {
    const {data, isLoading, refetch} = useQuery({queryKey: ["task"],queryFn: async () => {
        const res = await Axios.get("https://catfact.ninja/fact")
        return res.data;
        }
    }) 
    
    const refetchData = () => {
        alert("new fact fetched");
        refetch();
    }

    return {data, refetchData, isLoading}
}