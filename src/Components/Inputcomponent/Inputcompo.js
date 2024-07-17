import React from 'react';
import "./Inputcompo.css"

const Inputcompo = ({ label, type, Name, value, onChange, placeholder, error, icon, customClassName }) => {

    const input = () => {

    }
    return (
        <div className=''>
            {icon}
            {label && <lable htmlFor={Name}>{Name}</lable>}
            <input
                onClick={input}
                type={type}
                name={Name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={customClassName}
            />
            {error && <span className="error-message">{error}</span>}



        </div>
    );
}

export default Inputcompo;
