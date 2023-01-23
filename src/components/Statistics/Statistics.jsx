import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <section>
            <ul>
                <li>Good:<span>{good}</span></li>
                <li>Neutral:<span>{neutral}</span></li>
                <li>Bad:<span>{bad}</span></li>
                <li>Total:<span>{total}</span></li>
                <li>Positive Feedback:<span>{positivePercentage}</span></li>
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
