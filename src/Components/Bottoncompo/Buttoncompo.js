import React from 'react';
import { Button } from 'react-bootstrap';
import "./Buttoncompo.css"
const Buttoncompo = ({ btn, onClick, coustomclass }) => {
    return (
        <div>
            <Button
                className={coustomclass}
                onClick={onClick}
                >
                {btn}
            </Button>

        </div>
    );
}

export default Buttoncompo;
