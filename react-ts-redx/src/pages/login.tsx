import { useState } from 'react';
import { login, logout } from "../store"
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
    const [newUserName, setnewUserName] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>{username}</h1>
            <input onChange={(e) => {
                setnewUserName(e.target.value);
            }} />
            <button onClick={() => dispatch(login({ username: newUserName }))} >Login</button>
            <button onClick={() => dispatch(logout())} >Logout</button>
        </div>
    )
}