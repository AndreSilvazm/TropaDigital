import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function MarkOptimization() {
  return (
    <LineChart
      series={[
          { curve: "linear",
          data: [0, 20, 0, -20, -60, -20, 0],
          label: 'product 1',
          color: '#A155B9',
        },

        { curve: "linear", 
        data: [-20, -60, -20, -60, -100, -60, -20],
        label: 'Product 2',
        color: '#F765A3'
      },

      { curve: "linear", 
      data: [-60, -20, -60, 60, 0, 20, -60],
      label: 'Product 3',
      color: '#165BAA'
    }
      ]} slotProps={{legend: {

        direction: 'row',
        position: {vertical: 'bottom', horizontal: 'middle'},
        padding: 1,
        labelStyle: {

          fontSize: 11,
        }

      }}}
    />
  );
}