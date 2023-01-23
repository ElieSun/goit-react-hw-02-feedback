
const LeaveFeedback = ({buttonType, incrementFeedback}) => {
    return (
            <>
            <h2>Please leave feedback</h2>
            {buttonType.map(type=>( <button type="button" key={type} onClick ={()=> incrementFeedback(type)}
            >{type}</button>))}
            </>
        )
};

export default LeaveFeedback;