import React from 'react';
import { FormSelect } from 'react-bootstrap';
import './Opstion.css';

const Opstion = ({ Default, opstion1, opstion2, opstion3, num1, num2, num3, num4, num5, num6 }) => {
    return (
        <div className="opstion-container">
            <FormSelect aria-label="Default select example">
                <option>{Default}</option>
                <option value="1">{opstion1} {num1}</option>
                <option value="2">{opstion2} {num2}</option>
                <option value="3">{opstion3} {num3}</option>
                <option value="4">{num4}</option>
                <option value="5">{num5}</option>
                <option value="6">{num6}</option>
            </FormSelect>
        </div>
    );
}

export default Opstion;
                                