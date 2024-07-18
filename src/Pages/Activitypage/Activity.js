import React from 'react';
import './Activity.css';
import ActivityCard from '../../Components/ActivityCardcompo/Activitycard';
// import Buttoncompo from '../../Components/Bottoncompo/Buttoncompo';
import LineCharts from '../../Components/Linechartcompo/Linechart';
import ActivityData from "./ActivityData.json"
import { Container } from 'react-bootstrap';

const Activity = () => {
    return (
        <div className='home-color'>
            <Container>
                <div className='activity-card-page'>
                    {ActivityData.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            title={activity.title}
                            number={activity.number}
                            now={activity.now}  
                            // linechart={index % 2 === 0 ? <LineCharts /> : null} // Conditionally render LineCharts for even indexes
                            linechart={<LineCharts /> } 
                            footer={activity.footer}
                            buttonText={activity.buttonText}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Activity;
