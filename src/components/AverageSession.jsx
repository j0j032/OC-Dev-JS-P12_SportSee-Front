import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from './Loader'
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts'

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
	
	const formatData = () => {
		const days = ["L","M","M","J","V","S","D"]
		return days.map((item, index) => ({day: item, length: data.sessions[index].sessionLength}))
	}
	
	if (error || id === undefined) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='sessions-container'>
			<ResponsiveContainer width="100%" height="100%">
			<LineChart width="100%" height="100%"
					   data={formatData()}
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
				<Line dataKey="length"
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
