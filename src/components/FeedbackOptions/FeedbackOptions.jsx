import React from "react";
import PropTypes from 'prop-types';
import { Section, Button } from 'components/FeedbackOptions/FeedBackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <Section>
            {options.map(option => (
                <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}</Button>
            ))}
        </Section>
    ); 
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
