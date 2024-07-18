import React from 'react';
import './Activity.css';
import ActivityCard from '../../Components/ActivityCardcompo/Activitycard';
// import Buttoncompo from '../../Components/Bottoncompo/Buttoncompo';
import LineCharts from '../../Components/Linechartcompo/Linechart';
import ActivityData from "./ActivityData.json"
import { Col, Container, Row } from 'react-bootstrap';
import WorldMapSalesChart from '../../Components/WorldMapSalesChart/WorldMapSalesChart';
import Charts from "../../Components/DoughnutChart/Charts"
import GeoChart from '../../Components/DoughnutChart/GeoCharts';
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
                            // showLineChart={index === 0}
                            // linechart={index % 2 === 0 ? <LineCharts /> : null} // Conditionally render LineCharts for even indexes
                            // linechart={ } 
                            footer={activity.footer}
                            buttonText={activity.buttonText}
                        />
                    ))}
                    </div>
                  
                    <div className='mt-5'>
                        <Row>
                        <Col lg={4}> 
                        <div className=' main-activity-chart'>
                           
                            <div className='activity-chart'>
                                <div className='activitychart'>
                                    <Charts className="" text={1000}/>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col lg={8}>
                            <div className=' main-activity-chart'>

                                <div className='activity-chart'>
                                    <div className='activitychart'>
                                        <GeoChart className="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                       
                        </Row>
                      
                    </div>  
             
            </Container>
        </div>
    );
};

export default Activity;
