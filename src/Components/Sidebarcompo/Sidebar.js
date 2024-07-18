import { useState } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdMenu } from "react-icons/io";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { SiDecapcms } from "react-icons/si";
import { IoClose } from 'react-icons/io5';
import { AiOutlineHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { SiFigma } from "react-icons/si";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Inputcompo from '../Inputcomponent/Inputcompo';
import { LiaSearchSolid } from "react-icons/lia";

function Sidebars({ onLogout }) {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div className='mainsidebar'>
                {show ? (
                    <IoClose onClick={handleClose} className="navbutton" />
                ) : (
                    <IoMdMenu onClick={handleShow} className="navbutton" />
                )}
                <div className='sidebarinputcompo'>
                    <LiaSearchSolid className='LiaSearchSolid' />
                    <div className='maininputsidebar'>
                        <Inputcompo
                            type='search'
                            Name="search"
                            placeholder="search"
                            onChange={handleSearchChange}
                            customClassName="inputsidebar"
                            value={searchQuery}
                        />
                    </div>
                </div>
            </div>
            <Offcanvas className="Offcanvas" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <SiDecapcms className='logonav' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanvasbody'>
                    <Sidebar>
                        <Menu>
                            <span>Menu</span>
                            <MenuItem component={<Link to="/Homepage" />}><AiOutlineHome className='AiOutlineHome' />
                             Home</MenuItem>
                            <MenuItem component={<Link to="/Task" />}><BiTask className='BiTask' /> Task</MenuItem>
                            <MenuItem component={<Link to="/Activity" />}><BsActivity className='BsActivity' /> Activity</MenuItem>
                            <MenuItem component={<Link to="/User" />}><FaUserCheck className='FaUserCheck' /> User</MenuItem>
                            <MenuItem component={<Link to="/Notification" />}><IoMdNotificationsOutline className='IoMdNotificationsOutline' /> Notification</MenuItem>
                            <MenuItem component={<Link to="/Settings" />}><IoSettingsOutline className='IoSettingsOutline' /> Settings</MenuItem>
                            <MenuItem component={<Link to="/Support" />}><GoQuestion className='GoQuestion' /> Support</MenuItem>
                            <span>Group</span>
                            <MenuItem component={<Link to="/Figm aFiles" />}><SiFigma className='SiFigma' /> Figma Files</MenuItem>
                            <MenuItem component={<Link to="/Downloads" />}><IoCloudDownloadOutline className='IoCloudDownloadOutline' /> Downloads</MenuItem>
                            <MenuItem component={<Link to="/Gifts" />}><IoGiftOutline className='IoGiftOutline' /> Gifts</MenuItem>
                            <MenuItem component={<Link to="/Logout" />}><MdLogout className='MdLogout' /> Logout</MenuItem>
                        </Menu>
                    </Sidebar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebars;
