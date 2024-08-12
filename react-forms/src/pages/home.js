import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../App.css"

export const Home = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(14).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null]),
    });
    
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    // console.log(handleSubmit)

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Full Name..." {...register("fullName")} /> <br/>
            <input type="text" placeholder="email" {...register("email")}/> <br/>
            <input type="number" placeholder="Age" {...register("age")}/> <br/>
            <input type="password" placeholder="Pasoword" {...register("password")}/> <br/>
            <input type="password" placeholder="confirm password" {...register("confirmPassword")}/> <br/>
            <button>Submit</button>
        </form>
    )
}