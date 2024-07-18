import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js
import "./Charts.css"
const DoughnutChart = ({ text }) => {
    const data = {
        labels: ['blue ', 'Neon Blue', 'slategrey', 'Skyblue', 'Yellow'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 89, 70, 50, 100],
                backgroundColor: [
                    'rgb(25, 69, 92,1)',
                    'rgb(112, 128, 144,1)',
                    'rgb(82, 177, 189,1)',
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
                position: 'right',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <>
            <div>

                <div className=''>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </>
    );

};

export default DoughnutChart;
