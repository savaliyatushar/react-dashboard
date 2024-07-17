import React from 'react';
import DataTable from "./DataTable.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Navbar, NavDropdown, Table } from 'react-bootstrap';
import "./Tables.css";

const Tablescompo = () => {
    return (
        <div className='main-table'>
            <div className="table-container">
                <div className='main-nav-header'>
                    <div>PROJECTS</div>
                    <div>
                        <Navbar>
                            <NavDropdown title={<BsThreeDotsVertical />}>
                                <NavDropdown.Item href="#action/3.1">Export report</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Share</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar>
                    </div>
                </div>
                <Table size="sm" className="custom-table">
                    <thead className='table-head'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Project Manager</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataTable.map((item) => (
                            <tr className='table-trdata' key={item.id}>
                                <td>{item.id}</td>
                                <td className="name-cell">
                                    <img src={item.image} alt={item.name} className="profile-image" />
                                    {item.name}
                                </td>
                                <td>{item.projectManager}</td>
                                <td className={`status-cell ${item.status.toLowerCase().replace(' ', '-')}`}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Tablescompo;
