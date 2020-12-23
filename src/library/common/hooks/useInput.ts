import { useState } from 'react'

export const useInput = (initialValue: any) => {
    const [state, setState] = useState(initialValue);

    const handleChange = (e: any) => {
        setState(e.target.value)
    }

    const reset = () => {
        setState("");
    }

    return [state, handleChange, reset]
}

export { }