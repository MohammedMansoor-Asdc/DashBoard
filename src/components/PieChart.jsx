import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
    { name: 'Group A', value: 500 },
    { name: 'Group B', value: 300 },
    { name: 'Group B', value: 200 },
];
const COLORS = ['#A9ADFF', '#F6D78B', '#d4d2cd'];

const ExamplePieFunctionComponent = () => {
    return (
        <ResponsiveContainer width={300} height={300} className="mt-[-80px]">
            <PieChart onMouseEnter={() => { }}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label className='font-Roboto'
                        value={'Total $76,356'}
                        position="center"
                        fill="#000"
                        fontSize={16}
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ExamplePieFunctionComponent;
