import React, { useEffect } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationSystem = () => {
    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 11000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            transition: Zoom,
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            notify();
        }, 5000); // Trigger notification every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <ToastContainer
             
            />
        </div>
    );
}

export default NotificationSystem;
