import React, { useState } from 'react';
import Inputcompo from '../../Components/Inputcomponent/Inputcompo';
import Buttoncompo from "../../Components/Bottoncompo/Buttoncompo"
import { useNavigate } from 'react-router-dom';
import { PiUserSwitchLight } from 'react-icons/pi';
import { Form } from 'react-bootstrap';
import "./Forms.css"
import Homepage from '../CmsHomepage/Homepage';

const Formpage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ username: '', password: '' });

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        let valid = true;
        const newError = { username: '', password: '' };

        if (username.trim().length < 3) {
            newError.username = "Username must be at least 3 characters long.";
            valid = false;
        }

        if (password.trim().length < 6) {
            newError.password = "Password must be at least 6 characters long.";
            valid = false;
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            if (!passwordRegex.test(password)) {
                newError.password = "Password must include at least one uppercase letter, one lowercase letter, and one number.";
                valid = false;
            }
        }

        if (!valid) {
            setError(newError);
            return;
        }
        setError({ username: '', password: '' });
        onLogin();
        navigate(<Homepage/>);
        console.log("Form submitted successfully");
    };
    return (
        <div className='formback'>
        <div className='Formcompo'>
            <h1 className='text-center'><PiUserSwitchLight className='loginicon' /></h1>
            <div className='mainform'>
                <Form onSubmit={submit}>
                    <div className='option'>
                        <Form.Select aria-label='Time' className='formselect'>
                            <option>Time</option>
                            <option>In</option>
                            <option>Out</option>
                            <option>Half</option>
                        </Form.Select>
                    </div>
                    <div className='username'>
                        <Inputcompo
                            label="Username"
                            type='text'
                            Name="Username"
                            placeholder="Enter your Username"
                            onChange={handleUsernameChange}
                            customClassName="forminput"
                        />
                        {error.username && <p className="error-message">{error.username}</p>}
                    </div>
                    <div className='password'>
                        <Inputcompo
                            label="Password"
                            type='password'
                            Name="Password"
                            placeholder="Enter your Password"
                            onChange={handlePasswordChange}
                            customClassName="forminput"

                        />
                        {error.password && <p className="error-message">{error.password}</p>}
                    </div>
                    <div className='formbtn'>
                        <Buttoncompo
                            btn={"Login"}
                            onClick={submit}
                            coustomclass="main-btn"
                        />
                    </div>
                </Form>
            </div>
        </div>
            </div>
    );
}

export default Formpage;
