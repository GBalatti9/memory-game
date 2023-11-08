
export const Counter = ({ clickCounter, bestScore }) => {

    return (
        <div className="score-container">
            <h4>Score: {clickCounter} </h4>
            <h4>Best score: {bestScore} </h4>
        </div>
    )
}
