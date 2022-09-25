import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Loader from './Loader'

const CustomTicks = ({payload, x, y, cx, cy, ...rest}) => {
	return (
		<text {...rest} y={y + (y-cy)/8} x={x+ (x- cx)/82}>
			{payload.value}
		</text>
	)
}


const Performance = ({perfData}) => {
	const {data, error, isLoading} = perfData
	
//	const {kind} = data
//	const formatData = () => data.data.map((item, index)=>({name:kind[index+1], value: item.value}))
	
	const kindInFrench = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']
	const formatData = () => data.data.map((item, index)=>({name:kindInFrench[index], value: item.value}))
	
	if (error) return <span>Oups ! il y a eu un problème</span>
	return isLoading ? (<Loader/>) : (
		<div className='perf-container'>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart data={formatData().reverse()}
							cx="50%" cy="50%"
							outerRadius="70%">
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dataKey="name"
									stroke='#fffefc'
									tick={<CustomTicks cx={320} cy={90}/>}
									tickLine={false}
									dy={0}
					/>
					<Radar dataKey="value"
						   fill="red"
						   fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance
