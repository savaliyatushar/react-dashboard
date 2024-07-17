import React from 'react';
import "./Users.css"
import UserTable from '../../Components/Usertablecompo/UserTable';
import { Container } from 'react-bootstrap';
const Users = () => {
    return (
        <div>
            <Container>
                <UserTable />
            </Container>
        </div>
    );
}

export default Users;
