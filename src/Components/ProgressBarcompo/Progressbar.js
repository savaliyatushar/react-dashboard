import React from 'react';
import "./Progressbar.css";
import { ProgressBar } from 'react-bootstrap';

const Progressbar = ({ first, now, second, third, fourth }) => {
    

    return (
        <div className='Progressbar-compo'>
            <ProgressBar animated now={now} label={`${now}%`} />
            {/* <ProgressBar animated now={second} label={`${second}%`} />
            <ProgressBar animated now={third} label={`${third}%`} />
            <ProgressBar animated now={fourth} label={`${fourth}%`} /> */}
        </div>
    );
}

export default Progressbar;
