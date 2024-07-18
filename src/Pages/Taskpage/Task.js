import React, { useState } from 'react';
import "./Task.css"
import TaskData from "./TaskData.json"
import Taskcard from '../../Components/Taskcardcompo/Taskcard';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';
import Buttoncompo from '../../Components/Bottoncompo/Buttoncompo';
import { Col, Container, Row } from 'react-bootstrap';
import ModalForm from '../../Components/ModelFormcompo/ModalForm';

const Task = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='home-color'>
            <div>
                <div className='task-head'>
                    <h2>Task Board</h2>
                    <div className='pt-2'>
                        <Buttoncompo
                            onClick={() => setModalShow(true)}
                            btn={"Add new task"}
                            coustomclass="taskbtn"
                        />
                    </div>
                    <div>
                        <ModalForm
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>            
                </div>                      
            </div>
             <Container>
                {/* <Row> */}
                    {/* <Col lg={12}> */}
                        <div className='d-flex flex-wrap'>
                            {/* <div className='taskmap'> */}
                                {TaskData.map((task, index) => (
                                    <Taskcard
                                        key={index}
                                        navtitle={task.navtitle}
                                        task={task.task}
                                        icon={<MdOutlineMarkUnreadChatAlt />}
                                        text={task.text}
                                        Image={task.image}
                                    />
                                ))}
                            {/* </div> */}
                        </div>
                    {/* </Col> */}
                {/* </Row> */}
             </Container>
            {/* <div className='d-flex flex-row'>
                <Row>
                    <Col lg={12}>
                       
                    </Col>
                </Row>
            </div> */}
        </div>
    );
}

export default Task;
