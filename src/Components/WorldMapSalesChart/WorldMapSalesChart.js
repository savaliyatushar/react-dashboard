import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

// Example data (replace with your actual sales data)
const salesData = [
    { country: 'USA', sales: 100 },
    { country: 'CAN', sales: 50 },
    { country: 'MEX', sales: 75 },
    // Add more countries and sales data as needed
];

const WorldMapSalesChart = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ComposableMap
                projectionConfig={{
                    scale: 150,
                }}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            >
                <ZoomableGroup zoom={1}>
                    <Geographies geography={process.env.PUBLIC_URL + '/world-50m.json'}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const countryData = salesData.find((data) => data.country === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={countryData ? getColor(countryData.sales) : '#F5F4F6'}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

// Function to assign colors based on sales value (example)
const getColor = (sales) => {
    // You can customize this function based on your sales data range and colors
    if (sales > 80) {
        return '#238636'; // Green
    } else if (sales > 50) {
        return '#7BC96F'; // Light green
    } else if (sales > 20) {
        return '#C6E48B'; // Yellow
    } else {
        return '#F5F4F6'; // Default gray
    }
};

export default WorldMapSalesChart;
