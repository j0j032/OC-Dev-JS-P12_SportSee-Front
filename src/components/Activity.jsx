import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default class Activity extends PureComponent {
	
	render() {
		return (
			<div className='Test'>
			<ResponsiveContainer width="100%" height="100%">
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
					<CartesianGrid strokeDasharray="10 20" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle"  />
					<Bar dataKey="pv"
						 fill="black"
						 radius={[10,10,0,0]}
						 barSize={10}/>
					<Bar dataKey="uv"
						 fill="red"
						 radius={[10,10,0,0]}
						 barSize={10} />
				</BarChart>
			</ResponsiveContainer>
			
			</div>
		);
	}
}
