import { useState } from "react";

export const Counter = ({ clickCounter }) => {

    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <h4>Score: {clickCounter} </h4>
            <h4>Best score: {bestScore} </h4>
        </>
    )
}
