import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];
const DData = [1000, -4000, -7000, 1780, -6890, 2390, 2490];


const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BarChartStackedBySign() {
  return (
    <BarChart
      series={[
        { data: pData, label: 'p1', id: 'pvId', stack: 'stack1', color:'#FFA5CB' },
        { data: uData, label: 'p2', id: 'uvId', stack: 'stack1', color: '#A155B9'},
        { data: DData, label: 'p3', id: 'ddId', stack: 'stack1', color: '#63ABFD'},

      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}

      slotProps={{legend: {

        direction: 'row',
        position: {vertical: 'bottom', horizontal: 'end'},
        padding: 1,
        labelStyle: {

          fontSize: 11,
        }

      }}}
    />
  );
}