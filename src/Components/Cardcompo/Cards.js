import React from 'react';
import './Cards.css';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdPageview } from "react-icons/md";
import { FaStackExchange } from "react-icons/fa";
import CountUp from 'react-countup';

const Cardcompo = ({ title, amount, content, footer, icon, imageSrc, customClassName, onClick }) => {
    
    const icons = {
        FaMoneyCheckDollar: <FaMoneyCheckDollar />,
        LiaFileInvoiceDollarSolid: <LiaFileInvoiceDollarSolid />,
        FaStackExchange: <FaStackExchange />,
        MdPageview: <MdPageview />
    };

    return (
        <div className={`card-component ${customClassName}`} onClick={onClick}>
            {/* <img src={imageSrc} alt={title} className="card-image" /> */}
            <h6 className="card-title">
                {title}
                <span className='icons'>  {icons[icon]} </span>
            </h6>
            <span className="card-amount">
                <CountUp end={parseFloat(amount.replace(/[^0-9.-]+/g, ""))} duration={3} prefix={amount.includes('$') ? '$' : ''} />
            </span>
            <span className="card-content">{content}</span>
            <div className="card-footer">{footer}</div>
        </div>
    );
};

export default Cardcompo;
