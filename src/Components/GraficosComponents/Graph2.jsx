import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Product 1', color:'#165BAA' },
            { id: 1, value: 15, label: 'Product 2', color: '#16BFD6' },
            { id: 2, value: 20, label: 'Product 3', color: '#E697FF' },
          ],
        },
      ]} 

    />
  );
}