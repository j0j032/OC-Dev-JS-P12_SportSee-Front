import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import Loader from './Loader'

const Performance = ({perfData}) => {
	const {data, error, isLoading} = perfData
	const {kind} = data
	const formatData = () => data.data.map((item, index)=>({name:kind[index+1], value: item.value}))
	console.log(formatData())
	
	if (error) return <span>Oups ! il y a eu un problème</span>
	return isLoading ? (<Loader/>) : (
		<div className='perf-container'>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatData()}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Performance
