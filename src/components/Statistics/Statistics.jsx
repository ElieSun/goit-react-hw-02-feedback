
const Statistics = ({info, state}) => {

    const positiveFeedback = Math. round(info.positivePercentage * 100);
    return (
        <>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {state.good}</li>
            <li>Neutral: {state.neutral}</li>
            <li>Bad: {state.bad}</li>
            <li>Total: {info.total}</li>
            <li>Positive Feedback: {positiveFeedback}</li>
        </ul>
        </>
    )
}

export default Statistics;