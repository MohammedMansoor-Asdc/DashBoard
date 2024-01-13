import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 10,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 32,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 36,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 2780,
    pv: 15,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 10,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 25,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 22,
    amt: 2100,
  },
];

const ExampleBarFunctionComponent = () => {
  return (
    <ResponsiveContainer width={1050} height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax + 10']} interval={0} tickCount={6} />
        <Tooltip />
        <Bar dataKey="pv" fill="#000" radius={[10, 10, 0, 0]} barSize={70} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExampleBarFunctionComponent;
