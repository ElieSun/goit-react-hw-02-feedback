import { Component } from 'react'
import LeaveFeedback from 'components/LeaveFeedback/LeaveFeedback'
import Statistics from 'components/Statistics/Statistics'

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    info = {
        total: 0,
        positivePercentage: 0,
        buttonType: [
            'good', 
            'neutral', 
            'bad'
        ]
    }
    
    incrementFeedback = (name) => {
        this.setState(prevState => { 
            return {
                [name]: prevState[name] + 1
            }
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        this.info.total = good + neutral + bad + 1; 
        this.countPositiveFeedbackPercentage(good, this.info.total);
    };

    countPositiveFeedbackPercentage = (good, total) => {
        this.info.positivePercentage = good / total;
        return this.info.positivePercentage;
    };


    render() {
        return (
            <>
                <LeaveFeedback buttonType={this.info.buttonType} incrementFeedback={this.incrementFeedback}/>
                <Statistics info={this.info} state={this.state}/>
            </>        
        );
    }
}

export default Feedback


