import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "./Linechart.css"
const BasicLineChart = ({ po }) => {
  return (
   <div>
          <div>
              <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                      {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                  ]}
                  width={200}
                  height={200}
              />
          </div>
        

   </div>
  );
}

export default BasicLineChart;
