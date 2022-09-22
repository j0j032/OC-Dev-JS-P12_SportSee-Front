import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from './Loader'
import { AreaChart, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';

const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<div className="custom-tooltip--sessions">
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	
	return null;
};

const CustomLegend = () => {
	return (
		<div className="custom-legend--sessions">
			<p>Durée moyenne des sessions</p>
		</div>
	);
};


const AverageSession = ({sessionData}) => {
	const {id} = useParams()
	const {data, isLoading, error} = sessionData
	console.log(data.sessions)
	
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='sessions-container'>
			<ResponsiveContainer width="100%" height="100%">
			<LineChart width="100%" height="100%"
					   data={data.sessions}
					   margin={{ top: 30, right: 5, left: 5, bottom: 0 }}>
				<XAxis dataKey="day"
					   width={258}
					   axisLine={false}
					   tickLine={false}
					   stroke='#fffefc'
					   tick={{fontSize:14}}
					   tickMargin={4}
				/>
				<Tooltip cursor={false}
						 content={<CustomTooltip />}
						 wrapperStyle={{outline:'none'}}
				/>
				<Legend verticalAlign='top'
						content={<CustomLegend/>}
				/>
				<Line dataKey="sessionLength"
					  type="basis"
					  stroke= 'white'
					  dot={false}
				/>
			</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AverageSession
