import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import "./ModalForm.css";
import Inputcompo from '../Inputcomponent/Inputcompo';
import Opstion from '../Opstioncompo/Opstion';
import DatePickers from '../Datepickercompo/Datepickers';
import PropTypes from 'prop-types';
import Buttoncompo from '../Bottoncompo/Buttoncompo';

const ModalForm = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New Task
                </Modal.Title>
            </Modal.Header>
            <div className='modelform'>
                <Form>
                    <div className='form'>
                        <Inputcompo
                            label="Title"
                            type='text'
                            name="Title"
                            placeholder="Title of the task"
                            customClassName="forminput"
                        />
                        <div className='mt-4'>
                            <Row>
                                <Col>
                                    <label>Priority</label>
                                    <Opstion
                                        Default="Choose..."
                                        option1="Low"
                                        option2="Medium"
                                        option3="High"
                                    />
                                </Col>
                                <Col>
                                    <label>Fix versions</label>
                                    <Opstion
                                        Default="None"
                                        num1="2.0.0"
                                        num2="2.0.1"
                                        num3="2.0.2"
                                        num4="2.0.3"
                                        num5="2.0.4"
                                        num6="2.0.5"
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className='mt-4'>
                            <label>Description</label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </div>
                        <div className='mt-4'>
                            <Row>
                                <Col>
                                    <label>Assign to</label>
                                    <Opstion
                                        Default="Choose..."
                                        option1="Martin Edwards"
                                        option2="Dulan Sutton"
                                        option3="Chloe Brewer"
                                        option4="Jimmy Riley"
                                        option5="Melissa Stuart"
                                    />
                                </Col>
                                <Col>
                                    <label>Date</label>
                                    <DatePickers />
                                </Col>
                            </Row>
                        </div>
                        <div className='mt-4'>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Attachment</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>

                        <div className='model-btn'>
                            <div className='cancle'>
                                <Buttoncompo
                                    btn={"Cancle"}
                                    coustomclass="cancle-btn"
                                />
                            </div>
                            <div className='save'>
                                <Buttoncompo
                                    btn={"Save"}
                                    coustomclass="modalmain-btn"
                                />
                            </div>

                        </div>
                    </div>
                </Form>
            </div>
        </Modal>
    );
};

ModalForm.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
};

export default ModalForm;
