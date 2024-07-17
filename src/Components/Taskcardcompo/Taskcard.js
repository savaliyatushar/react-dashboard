import React from 'react';
import { Card, CardBody, Container, Navbar, NavDropdown } from 'react-bootstrap';
import "./Taskcard.css"
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Taskcard = ({ navtitle, task, icon, text, Image }) => {
    return (
        <div className='m-2'>
            
            <div className='main-task'>
                <Card className='taskcard'>
                    <CardBody className='c-body'>
                        <div className='navtitle'>

                            <div className='nav-DL'>{navtitle}</div>
                            <div>
                                <Navbar>
                                    <NavDropdown title={<HiOutlineDotsHorizontal />}>
                                        <NavDropdown.Item href="#action/3.1">Export report</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Share</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar>
                            </div>
                        </div>
                        <p><b>{task}</b></p>

                        <div className='task-i-img'>
                            <p className='message'>{icon}{text}</p>
                            <img className="taskimg" src={Image} alt='img' />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Taskcard;
