import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js
import "./Charts.css"
const DoughnutChart = () => {
    const data = {
        labels: ['blue ', 'Skyblue', 'Yellow'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(25, 69, 92,1)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <>
            <div className='main-chart'>
                <div className='main-nav-header'>
                    <div>PROJECTS</div>
                    </div>
                <div className='doughnut'>
                    <Doughnut data={data} options={options} />;
                </div>
            </div>
        </>
    );

};

export default DoughnutChart;
