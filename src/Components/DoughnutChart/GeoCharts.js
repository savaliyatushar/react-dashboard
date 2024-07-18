import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
];

const GeoChart = () => {
    const handleChartSelect = ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 0) return;
        const region = data[selection[0].row + 1];
        console.log("Selected: " + region);
    };

    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: handleChartSelect,
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="100%"
            data={data}
        />
    );
};

export default GeoChart;
