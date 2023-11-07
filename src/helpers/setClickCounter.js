import { useState } from "react";

export const setClickCounter = () => {
    const [clickCounter, setClickCounter] = useState(0);

    const updateClickCounter = () => {
        setClickCounter((prevCounter) => prevCounter + 1);
    }

    const resetCounter = () => {
        setClickCounter(0);
    }

    return {
        clickCounter,
        updateClickCounter,
        resetCounter,
    }
}