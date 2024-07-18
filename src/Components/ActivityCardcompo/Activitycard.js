import React from 'react';
import "./Activitycard.css"
import Progressbar from '../ProgressBarcompo/Progressbar';
import Buttoncompo from '../Bottoncompo/Buttoncompo';
import Activity from '../../Pages/Activitypage/Activity';
const Activitycard = ({ customClassName, onClick, title, linechart, now, btn, number, buttonText, second, third, fourth }) => {
    const handleClick = () => {
        alert("btn is working");
    };


    return (
        <div className={`activitycard-component ${customClassName}`} onClick={onClick}>
            <div className='activity-title'>
                <span className='title'>{title}</span>
                <span className='number'>{number}</span>
            </div>
            <div className='progressbar'>
                <span><Progressbar now={now} /></span>
            </div>
            <div className='btn-chart'>
                <div className='a-card-btn'>
                    <Buttoncompo
                        btn={buttonText}
                        coustomclass="activity-btn"
                        onClick={handleClick}
                    />
                </div>
                <div>
                    {linechart}
                </div>
            </div>

        </div>
    );
}

export default Activitycard;
