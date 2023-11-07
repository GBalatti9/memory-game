import { useState } from "react";

export const Counter = ({ clickCounter, bestScore }) => {

    return (
        <>
            <h4>Score: {clickCounter} </h4>
            <h4>Best score: {bestScore} </h4>
        </>
    )
}
