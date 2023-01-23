import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <section>
            {options.map(option => (
                <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}</button>
            ))}
        </section>
    ); 
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
