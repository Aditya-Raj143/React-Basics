import {useSelector} from "react-redux"



export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username)
    return (
        <div> The username is {username} </div>
    )
} 