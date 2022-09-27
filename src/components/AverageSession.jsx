import React from 'react'
import Loader from './Loader'
import {
	Customized,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

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
	
	const {data, isLoading, error} = sessionData
	
	const formatData = () => {
		const days = ["L","M","M","J","V","S","D"]
		return days.map((item, index) => ({day: item, length: data.sessions[index].sessionLength}))
	}
	
	if (error) return <span>Oups il y a eu un problème</span>
	return isLoading? (<Loader/>) : (
		<div className='sessions-container'>
			<div className='WEE'></div>
			<div className='WE'>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width="100%" height="100%"
							   data={formatData()}
							   margin={{ top: 10, right: 15, left: 15, bottom: 10 }}>
						<XAxis dataKey="day"
							   stroke='#fffefc'
							   tickLine={false}
							   axisLine={false}
							   tick={{fontSize:12, opacity:0.6}}
						/>
						<YAxis hide={true} padding={{top: 80,bottom:40}}/>
						<Tooltip content={<CustomTooltip />}
								 cursor={{
									 strokeOpacity:0,
								 }}
						/>
						<Legend verticalAlign='top'
								content={<CustomLegend/>}
						/>
						<Line dataKey="length"
							  type="natural"
							  stroke="#FFF"
							  strokeWidth={1.5}
							  dot={false}
							  activeDot={{
								  stroke: "#FFF",
								  strokeOpacity: 0.4,
								  strokeWidth: 10,
							  }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default AverageSession
