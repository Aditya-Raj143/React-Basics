import {useState} from "react"

export const useCounter = (initialVal = 0) => {
    const [count, setcount] = useState(initialVal);

    const increase = () => {
        setcount(count+1);
    }

    const decrease = () => {
        setcount(count-1);
    }

    const reset = () => {
        setcount(0);
    }

    return {count, increase, decrease, reset}
}
