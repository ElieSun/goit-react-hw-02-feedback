import React, { Component } from 'react';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import { Main, SubTitle } from 'components/App.styled';

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    incrementFeedback = (option) => {
        this.setState(prevState => { 
            return {
                [option]: ++prevState[option]
            }
        });
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    };

    countPositivePersentage = () => {
        if(!this.countTotalFeedback()) { 
          return 0; 
        } 
        return Math.round((this.state.good / this.countTotalFeedback() * 100));
    };

    render() {
        return(
          <Main>
              <SectionTitle title="Please leave your Feedback"></SectionTitle>
              <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.incrementFeedback}/>
              <SubTitle>Statistics</SubTitle>
              {this.countTotalFeedback() ? (
                <Statistics good={this.state.good} 
                            neutral={this.state.neutral} 
                            bad={this.state.bad} 
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositivePersentage()}/>
              ) : (<Notification message="There is no feedback"/>)}
          </Main>
        );
    };
}
