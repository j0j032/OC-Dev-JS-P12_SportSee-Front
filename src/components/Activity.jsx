import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Loader from './Loader'

const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}cal`}</p>
			</div>
		);
	}
	
	return null;
};

const CustomLegend = () => {
		return (
			<div className="custom-legend">
				<h3>Activité quotidienne</h3>
				<div className='bar-legend'>
					<p>Poids (kg)</p>
					<p>Calories brulées (kCal)</p>
				</div>
			</div>
		);
};


const Activity = ({activityData}) => {
	
	const {data, isLoading, error} = activityData
	
	const formatData = () => {
		const {sessions} = data
		const days = ["1","2","3","4","5","6","7"]
		return days.map((item, index)=>({day:item, poids: sessions[index].kilogram, cals: sessions[index].calories}))
	}
	
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='activity-container'>
			<ResponsiveContainer title= "Activité quotidienne" width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={formatData()}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3"
								   vertical={false}
					/>
					<XAxis dataKey= "day"
						   dy={15}
						   tickCount="7"
						   tickLine={false}
						   tick={{fontSize:14}}
					/>
					<YAxis dataKey="poids"
						   yAxisId="poids"
						   axisLine={false}
						   domain={["dataMin-2", 'dataMax+1']}
						   dx={14}
						   tickCount= "3"
						   tickLine={false}
						   tick={{fontSize:14}}
						   orientation='right'
					/>
					<YAxis dataKey="cals"
						   yAxisId="cals"
						   type='number'
						   hide={true}
					/>
					<Legend layout="horizontal"
							content={<CustomLegend/>}
							verticalAlign="top"
							
					/>
					<Tooltip labelFormatter={()=>""}
							 cursor={{fill:"#DFDFDF", opacity:"0.6"}}
							 content={<CustomTooltip />}
							 wrapperStyle={{outline:'none'}}
					/>
					<Bar dataKey="poids"
						 yAxisId="poids"
						 fill="black"
						 radius={[10,10,0,0]}
						 barSize={10}
					/>
					<Bar dataKey="cals"
						 yAxisId="cals"
						 fill="red"
						 radius={[10,10,0,0]}
						 barSize={10}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity

