import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'components/Statistics/Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <section>
            <List>
                <ListItem><span>Good:</span> <span>{good}</span></ListItem>
                <ListItem><span>Neutral:</span> <span>{neutral}</span></ListItem>
                <ListItem><span>Bad:</span> <span>{bad}</span></ListItem>
                <ListItem><span>Total:</span> <span>{total}</span></ListItem>
                <ListItem><span>Positive Feedback:</span> <span>{positivePercentage}</span></ListItem>
            </List>
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
