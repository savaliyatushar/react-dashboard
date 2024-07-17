import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./BarChart.css"
import { GoDotFill } from "react-icons/go";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Replace with Utils.months({ count: 7 }) if you have a similar function
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
          <>
            <div className='main-barchart'>
                <div className='main-bar-header'>
                    <div className='bar-header'>SALES
                        <span><GoDotFill className='dot-icon'/>PROJECTIONS</span>
                    </div>
                    
                    </div>
                <div className='barchart'>
                    <div className='cenvabar'>
                    <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </>
       
    );
};

export default BarChart;
