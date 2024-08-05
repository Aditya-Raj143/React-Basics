import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const {username} = useContext(AppContext);
    return <h1> This is the Home page and the user is: {username} </h1>
}