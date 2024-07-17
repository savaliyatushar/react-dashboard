import React, { useState } from 'react';
import UserTableData from "./UserTableData.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FormCheck, Navbar, NavDropdown, Table,  } from 'react-bootstrap';
import "./UserTable.css";
import Paginations from '../Paginationcompo/Pagination';
import { MdDelete } from "react-icons/md";

const UserTable = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [data, setData] = useState(UserTableData);
    const itemsPerPage = 10;

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        if (newSelectAll) {
            setSelectedItems(currentPageData.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleDelete = () => {
        const newData = data.filter(item => !selectedItems.includes(item.id));
        setData(newData);
        setSelectedItems([]);
        setSelectAll(false);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
        <div className='main-table'>
            <div className="table-container">
                <div className='main-nav-header'>
                    <div>USERS</div>
                    <div>
                        <Navbar>
                            <MdDelete className='delete' onClick={handleDelete}/>
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
                            <th>
                                <FormCheck
                                    aria-label="select all"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Signed up</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((item) => (
                            <tr className='table-trdata' key={item.id}>
                                <td>
                                    <FormCheck
                                        aria-label={`select ${item.fullName}`}
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                </td>
                                <td>{item.id}</td>
                                <td className="name-cell">
                                    <img src={item.image} alt={item.fullName} className="profile-image" />
                                    {item.fullName}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.userId}</td>
                                <td>{item.signedUp}</td>
                                <td className={`status-cell ${item.status.toLowerCase().replace(' ', '-')}`}>
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <Paginations pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>
            </div>
        </div>
    );
}

export default UserTable;
