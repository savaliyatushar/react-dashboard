import React from 'react';
import "./Home.css";
import Cardcompo from '../../Components/Cardcompo/Cards';
import { Col, Container, Row } from 'react-bootstrap';
import HomeData from "./HomeData.json" // Adjust path as per your project structure
import Tablescompo from '../../Components/Tablecompo/Tables';
import BarChart from '../../Components/DoughnutChart/BarChart';
import UserTable from '../../Components/Usertablecompo/UserTable';
const Home = () => {
    return (
        <div className='home-color'>
            <Container>
                <div className='home-card'>
                    {HomeData.map((card, index) => (
                        <Cardcompo
                            key={index}
                            title={card.title}
                            amount={card.amount}
                            content={card.details}
                            icon={card.icon}
                        />
                    ))}
                </div>

                <div>
                    <Row>
                        <Col lg={5}>
                            <Tablescompo
                            
                            />
                        </Col>
                        <Col lg={7}>
                            <BarChart />
                        </Col>
                    </Row>
                    <div>
                        <UserTable />
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default Home;
