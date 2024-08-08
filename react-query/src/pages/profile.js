import { useState,useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
    const {username,setusername} = useContext(AppContext);
    const [newusername, setnewusername] = useState("");
    return (
        <div>
            <h1> This is the profile page and the user is {username} </h1>
            <input onChange={(event)=>{setnewusername(event.target.value)}}/>
            <button onClick={()=> {setusername(newusername)}} >Change Username</button>
        </div>
    )
}